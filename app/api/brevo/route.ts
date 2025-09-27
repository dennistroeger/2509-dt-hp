import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, company, mobile, listId: rawListId } = body;

    if (!email || !firstName) {
      return NextResponse.json(
        { error: "Email and first name are required" },
        { status: 400 },
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      return NextResponse.json(
        { error: "BREVO API key not configured" },
        { status: 500 },
      );
    }

    const listId = rawListId ? parseInt(String(rawListId), 10) : 7;

    if (isNaN(listId)) {
      return NextResponse.json(
        { error: "Invalid listId provided" },
        { status: 400 },
      );
    }

    const headers = {
      "Content-Type": "application/json",
      "api-key": BREVO_API_KEY,
    };

    // Check if contact exists
    const getContactResponse = await fetch(
      `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: headers,
      },
    );

    if (getContactResponse.ok) {
      // Contact exists, update it
      const existingContact = await getContactResponse.json();
      const existingListIds = existingContact.listIds || [];
      const newListIds = [...new Set([...existingListIds, listId])];

      const updateContactData = {
        attributes: {
          VORNAME: firstName,
          COMPANY: company || "",
          SMS: mobile || "",
        },
        listIds: newListIds,
      };

      console.log(
        "Updating contact in Brevo:",
        JSON.stringify({ email, ...updateContactData }, null, 2),
      );

      const updateResponse = await fetch(
        `https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`,
        {
          method: "PUT",
          headers: headers,
          body: JSON.stringify(updateContactData),
        },
      );

      if (!updateResponse.ok) {
        const errorData = await updateResponse.text();
        console.error("BREVO API Error (Update):", errorData);
        return NextResponse.json(
          { error: "Failed to update contact in BREVO" },
          { status: 500 },
        );
      }

      console.log("Brevo contact updated successfully.");
    } else if (getContactResponse.status === 404) {
      // Contact does not exist, create it
      const createContactData = {
        email: email,
        attributes: {
          VORNAME: firstName,
          COMPANY: company || "",
          SMS: mobile || "",
          SOURCE: "Website Form",
          SIGNUP_DATE: new Date().toISOString(),
        },
        listIds: [listId],
        updateEnabled: false,
      };

      console.log(
        "Creating contact in Brevo:",
        JSON.stringify(createContactData, null, 2),
      );

      const createResponse = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(createContactData),
      });

      if (!createResponse.ok) {
        const errorData = await createResponse.text();
        console.error("BREVO API Error (Create):", errorData);
        return NextResponse.json(
          { error: "Failed to add contact to BREVO" },
          { status: 500 },
        );
      }

      const responseData = await createResponse.json();
      console.log(
        "Brevo response (Create):",
        JSON.stringify(responseData, null, 2),
      );
    } else {
      // Other error when checking for contact
      const errorData = await getContactResponse.text();
      console.error("BREVO API Error (Get Contact):", errorData);
      return NextResponse.json(
        { error: "Failed to check contact status with BREVO" },
        { status: getContactResponse.status },
      );
    }

    return NextResponse.json(
      { message: "Contact processed successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing BREVO request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const listId = searchParams.get("listId");

  if (!listId) {
    return NextResponse.json({ error: "listId is required" }, { status: 400 });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  if (!BREVO_API_KEY) {
    return NextResponse.json(
      { error: "BREVO API key not configured" },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      `https://api.brevo.com/v3/contacts/lists/${listId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("BREVO API Error (Get List Details):", errorData);
      return NextResponse.json(
        { error: "Failed to get list details from BREVO" },
        { status: 500 }
      );
    }

    const data = await response.json();
    // The API returns totalSubscribers for contacts in the list
    const count = data.totalSubscribers || 0;

    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error("Error fetching BREVO list count:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, company } = body;

    if (!email || !firstName) {
      return NextResponse.json(
        { error: 'Email and first name are required' },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      return NextResponse.json(
        { error: 'BREVO API key not configured' },
        { status: 500 }
      );
    }

    // Prepare contact data for BREVO
    const contactData = {
      email: email,
      attributes: {
        VORNAME: firstName, // Trying German attribute name
        COMPANY: company || '',
        SOURCE: 'Website Form',
        SIGNUP_DATE: new Date().toISOString(),
      },
      listIds: [7], // List ID 7 as specified
      updateEnabled: true, // Update existing contacts
    };

    // Debug logging
    console.log('Sending to Brevo:', JSON.stringify(contactData, null, 2));

    // Send to BREVO API
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('BREVO API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to add contact to BREVO' },
        { status: 500 }
      );
    }

    // Log successful response
    const responseData = await response.json();
    console.log('Brevo response:', JSON.stringify(responseData, null, 2));

    return NextResponse.json(
      { message: 'Contact added successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing BREVO request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

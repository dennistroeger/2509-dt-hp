import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, fullName, company } = body;

    if (!email || !fullName) {
      return NextResponse.json(
        { error: 'Email and full name are required' },
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
        FIRSTNAME: fullName.split(' ')[0] || fullName,
        LASTNAME: fullName.split(' ').slice(1).join(' ') || '',
        COMPANY: company || '',
        SOURCE: 'Website Form',
        SIGNUP_DATE: new Date().toISOString(),
      },
      listIds: [7], // List ID 7 as specified
      updateEnabled: true, // Update existing contacts
    };

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

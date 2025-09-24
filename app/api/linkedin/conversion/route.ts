import { NextRequest, NextResponse } from 'next/server';
import { sendLinkedInConversion } from '../../../lib/linkedin';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { liFatId, testMode = false } = body;

    // Use the environment variable for the conversion URN
    const conversionUrn = process.env.LINKEDIN_CEO_SYSTEM_DOWNLOAD;

    if (!conversionUrn) {
      return NextResponse.json(
        { error: 'LinkedIn conversion URN not configured' },
        { status: 500 }
      );
    }

    // Send LinkedIn conversion
    await sendLinkedInConversion(liFatId || '', conversionUrn, testMode);

    return NextResponse.json(
      { message: 'LinkedIn conversion sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending LinkedIn conversion:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

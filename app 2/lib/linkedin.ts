import { randomUUID } from "crypto";

export async function sendLinkedInConversion(
  linkedInFirstPartyId: string,
  conversionUrn: string,
  testMode: boolean = false,
) {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  if (!accessToken || !conversionUrn) {
    console.error(
      "LinkedIn access token or conversion URN is not configured.",
    );
    return;
  }

  // Use test ID when in test mode or when no real ID is provided
  const trackingId = testMode || !linkedInFirstPartyId 
    ? "test-li-fat-id-12345" 
    : linkedInFirstPartyId;

  const url = "https://api.linkedin.com/rest/conversionEvents";
  const payload = {
    conversion: conversionUrn,
    conversionHappenedAt: Date.now(),
    user: {
      userIds: [
        {
          idType: "LINKEDIN_FIRST_PARTY_ADS_TRACKING_UUID",
          idValue: trackingId,
        },
      ],
    },
    eventId: randomUUID(),
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "LinkedIn-Version": "202509",
        "X-Restli-Protocol-Version": "2.0.0",
      },
      body: JSON.stringify(payload),
    });
    console.log(`📊 LinkedIn Conversion Event:`, {
      url,
      payload,
      testMode,
      trackingId: trackingId.substring(0, 10) + '...'
    });
    
    if (response.status !== 201) {
      const responseBody = await response.json();
      console.error(
        "❌ Failed to send LinkedIn conversion event:",
        response.status,
        responseBody,
      );
    } else {
      console.log("✅ Successfully sent LinkedIn conversion event.");
    }
  } catch (error) {
    console.error("Error sending LinkedIn conversion event:", error);
  }
}

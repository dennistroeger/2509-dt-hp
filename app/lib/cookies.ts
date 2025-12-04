/**
 * Cookie consent management utilities
 * Follows best practices for cookie consent handling
 */

export type CookieCategory = 'functional' | 'marketing';

export interface CookieConsent {
  functional: boolean; // Always true, required for site functionality
  marketing: boolean;
  timestamp: number;
}

const COOKIE_NAME = 'cookie_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

/**
 * Get cookie consent from browser
 */
export function getCookieConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;

  try {
    // More robust cookie parsing that handles edge cases
    const cookies = document.cookie.split(';');
    let cookieValue: string | undefined;
    
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${COOKIE_NAME}=`)) {
        cookieValue = cookie.substring(COOKIE_NAME.length + 1);
        break;
      }
    }

    if (!cookieValue) return null;

    const decoded = decodeURIComponent(cookieValue);
    const parsed = JSON.parse(decoded) as CookieConsent;
    
    // Validate the parsed consent object
    if (parsed && typeof parsed.functional === 'boolean' && typeof parsed.marketing === 'boolean') {
      return parsed;
    }
    
    return null;
  } catch (error) {
    // Silently fail - cookie might be malformed or not exist
    return null;
  }
}

/**
 * Set cookie consent
 */
export function setCookieConsent(consent: Partial<CookieConsent>): void {
  if (typeof window === 'undefined') return;

  const existingConsent = getCookieConsent() || {
    functional: true,
    marketing: false,
    timestamp: Date.now(),
  };

  const newConsent: CookieConsent = {
    ...existingConsent,
    ...consent,
    functional: true, // Always true
    timestamp: Date.now(),
  };

  const cookieValue = encodeURIComponent(JSON.stringify(newConsent));
  document.cookie = `${COOKIE_NAME}=${cookieValue}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

/**
 * Check if a specific category is consented
 */
export function hasConsent(category: CookieCategory): boolean {
  const consent = getCookieConsent();
  if (!consent) return false;

  if (category === 'functional') return true; // Always true
  return consent[category] === true;
}

/**
 * Accept all cookies
 */
export function acceptAllCookies(): void {
  setCookieConsent({
    functional: true,
    marketing: true,
  });
}

/**
 * Reject all cookies (except functional)
 */
export function rejectAllCookies(): void {
  setCookieConsent({
    functional: true,
    marketing: false,
  });
}

/**
 * Check if consent banner should be shown
 */
export function shouldShowBanner(): boolean {
  return getCookieConsent() === null;
}

/**
 * Clear cookie consent (to show banner again)
 */
export function clearCookieConsent(): void {
  if (typeof window === 'undefined') return;
  document.cookie = `${COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
}


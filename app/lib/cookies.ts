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
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${COOKIE_NAME}=`))
      ?.split('=')[1];

    if (!cookieValue) return null;

    const decoded = decodeURIComponent(cookieValue);
    return JSON.parse(decoded) as CookieConsent;
  } catch (error) {
    console.error('Error reading cookie consent:', error);
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


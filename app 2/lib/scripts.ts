/**
 * Marketing scripts loader
 * Easy to extend: just add new scripts to the MARKETING_SCRIPTS array
 */

import { CookieCategory, hasConsent } from './cookies';

export interface ScriptConfig {
  id: string;
  category: CookieCategory;
  src?: string;
  innerHTML?: string;
  strategy?: 'afterInteractive' | 'lazyOnload' | 'beforeInteractive' | 'worker';
  async?: boolean;
  defer?: boolean;
  dataAttributes?: Record<string, string>; // For data-* attributes like data-domain
  onLoad?: () => void;
}

/**
 * Marketing scripts configuration
 * Add new marketing scripts here - they will automatically load when marketing consent is granted
 */
export const MARKETING_SCRIPTS: ScriptConfig[] = [
  // Example: Google Analytics
  // {
  //   id: 'google-analytics',
  //   category: 'marketing',
  //   src: 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID',
  //   strategy: 'afterInteractive',
  //   async: true,
  // },
  // {
  //   id: 'google-analytics-init',
  //   category: 'marketing',
  //   innerHTML: `
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag(){dataLayer.push(arguments);}
  //     gtag('js', new Date());
  //     gtag('config', 'GA_MEASUREMENT_ID');
  //   `,
  //   strategy: 'afterInteractive',
  // },
  
  // Example: Facebook Pixel
  // {
  //   id: 'facebook-pixel',
  //   category: 'marketing',
  //   innerHTML: `
  //     !function(f,b,e,v,n,t,s)
  //     {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //     n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  //     if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //     n.queue=[];t=b.createElement(e);t.async=!0;
  //     t.src=v;s=b.getElementsByTagName(e)[0];
  //     s.parentNode.insertBefore(t,s)}(window, document,'script',
  //     'https://connect.facebook.net/en_US/fbevents.js');
  //     fbq('init', 'YOUR_PIXEL_ID');
  //     fbq('track', 'PageView');
  //   `,
  //   strategy: 'afterInteractive',
  // },
  
  // To add a new marketing script:
  // 1. Uncomment one of the examples above or add a new object
  // 2. Fill in the required fields (id, category: 'marketing')
  // 3. Add either 'src' for external scripts or 'innerHTML' for inline scripts
  // 4. The script will automatically load when users accept marketing cookies
];

/**
 * Functional scripts configuration
 * These scripts are always loaded (required for site functionality)
 */
export const FUNCTIONAL_SCRIPTS: ScriptConfig[] = [
  // Plausible Analytics - Always load (functional analytics)
  {
    id: 'plausible-analytics',
    category: 'functional',
    src: 'https://ijv90sca.rpcld.com/js/script.js',
    strategy: 'afterInteractive',
    defer: true,
    dataAttributes: {
      domain: 'theinboxplaybook.com',
    },
  },
  
  // Add other functional scripts here if needed
  // Example: Error tracking, performance monitoring, etc.
];

/**
 * Get scripts that should be loaded based on consent
 */
export function getScriptsToLoad(): ScriptConfig[] {
  const scripts: ScriptConfig[] = [];

  // Always load functional scripts
  scripts.push(...FUNCTIONAL_SCRIPTS);

  // Load marketing scripts only if consent is granted
  if (hasConsent('marketing')) {
    scripts.push(...MARKETING_SCRIPTS);
  }

  return scripts;
}

/**
 * Load a script dynamically
 */
export function loadScript(config: ScriptConfig): void {
  if (typeof window === 'undefined') return;

  // Check if script already exists
  if (document.getElementById(config.id)) {
    return;
  }

  const script = document.createElement('script');
  script.id = config.id;

  if (config.src) {
    script.src = config.src;
  }

  if (config.innerHTML) {
    script.innerHTML = config.innerHTML;
  }

  if (config.async) {
    script.async = true;
  }

  if (config.defer) {
    script.defer = true;
  }

  if (config.dataAttributes) {
    Object.entries(config.dataAttributes).forEach(([key, value]) => {
      script.setAttribute(`data-${key}`, value);
    });
  }

  if (config.onLoad) {
    script.onload = config.onLoad;
  }

  document.head.appendChild(script);
}

/**
 * Remove a script
 */
export function removeScript(id: string): void {
  if (typeof window === 'undefined') return;
  const script = document.getElementById(id);
  if (script) {
    script.remove();
  }
}

/**
 * Load all scripts based on current consent
 */
export function loadScriptsByConsent(): void {
  const scripts = getScriptsToLoad();
  scripts.forEach((script) => {
    loadScript(script);
  });
}

/**
 * Remove all marketing scripts
 */
export function removeMarketingScripts(): void {
  MARKETING_SCRIPTS.forEach((script) => {
    removeScript(script.id);
  });
}


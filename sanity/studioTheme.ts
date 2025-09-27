import {buildLegacyTheme} from 'sanity'

export const studioTheme = buildLegacyTheme({
  '--component-bg': 'transparent',
  '--main-navigation-color': 'transparent',
  '--card-border-color': 'transparent',
  '--card-shadow-outline-color': 'transparent',
  '--card-shadow-penumbra-color': 'transparent',
  '--card-shadow-umbra-color': 'transparent',

  /* rest of colors can be default, but let's set some */
  '--white': '#fff',
  '--black': '#000',
  '--brand-primary': '#000',
  '--focus-color': '#000',
})

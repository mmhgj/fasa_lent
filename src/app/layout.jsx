import 'src/global.css';

import localFont from 'next/font/local';

import { theme } from 'src/data/font';
import { CONFIG } from 'src/config-global';
import { primary } from 'src/theme/core/palette';
import { LocalizationProvider } from 'src/locales';
import { detectLanguage } from 'src/locales/server';
import { I18nProvider } from 'src/locales/i18n-provider';
import { ThemeProvider } from 'src/theme/theme-provider';
import { getInitColorSchemeScript } from 'src/theme/color-scheme-script';

import { Snackbar } from 'src/components/snackbar';
import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { detectSettings } from 'src/components/settings/server';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

import { CheckoutProvider } from 'src/sections/checkout/context';

import { AuthProvider as JwtAuthProvider } from 'src/auth/context/jwt';
import { AuthProvider as Auth0AuthProvider } from 'src/auth/context/auth0';
import { AuthProvider as AmplifyAuthProvider } from 'src/auth/context/amplify';
import { AuthProvider as SupabaseAuthProvider } from 'src/auth/context/supabase';
import { AuthProvider as FirebaseAuthProvider } from 'src/auth/context/firebase';

// ----------------------------------------------------------------------

const AuthProvider =
  (CONFIG.auth.method === 'amplify' && AmplifyAuthProvider) ||
  (CONFIG.auth.method === 'firebase' && FirebaseAuthProvider) ||
  (CONFIG.auth.method === 'supabase' && SupabaseAuthProvider) ||
  (CONFIG.auth.method === 'auth0' && Auth0AuthProvider) ||
  JwtAuthProvider;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: primary.main,
};

const Iransans = localFont({
  variable: '--font-iransans',
  src: [
    {
      path: '../../src/assets/font/iransans/ultralight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../src/assets/font/iransans/light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../src/assets/font/iransans/medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../src/assets/font/iransans/bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default async function RootLayout({ children }) {
  const lang = CONFIG.isStaticExport ? 'en' : await detectLanguage();

  const settings = CONFIG.isStaticExport ? defaultSettings : await detectSettings();

  return (
    <html lang={lang ?? 'en'} suppressHydrationWarning>
      <body className={`${Iransans.className}`}>
        {getInitColorSchemeScript}

        <I18nProvider lang={CONFIG.isStaticExport ? undefined : lang}>
          <LocalizationProvider>
            <AuthProvider>
              <SettingsProvider
                settings={settings}
                caches={CONFIG.isStaticExport ? 'localStorage' : 'cookie'}
              >
                <ThemeProvider theme={theme}>
                  <MotionLazy>
                    <CheckoutProvider>
                      <Snackbar />
                      <ProgressBar />
                      <SettingsDrawer />
                      {children}
                    </CheckoutProvider>
                  </MotionLazy>
                </ThemeProvider>
              </SettingsProvider>
            </AuthProvider>
          </LocalizationProvider>
        </I18nProvider>
      </body>
    </html>
  );
}

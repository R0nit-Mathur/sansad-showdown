import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sansad Showdown — Political Satire Fighter",
  description: "A 3D political satire fighting game. All characters are caricatures.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Sansad Showdown",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#120a06",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="sansad-sync"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var saves = {};
                try {
                  for (var i = 0; i < localStorage.length; i++) {
                    var key = localStorage.key(i);
                    if (key && key.indexOf('sansad-showdown:') === 0) saves[key] = localStorage.getItem(key);
                  }
                } catch (e) {}
                if (location.hostname === 'www.fightkaro.com') {
                  location.replace(location.protocol + '//' + location.host.slice(4) + location.pathname + location.search + '#carry=' + encodeURIComponent(JSON.stringify(saves)));
                } else if (saves['sansad-showdown:legal-v1'] === '1') {
                  document.documentElement.className += ' legal-accepted';
                }
              })();
            `,
          }}
        />
        <link rel="modulepreload" href="/assets/rooms-CRfnBsqC.js" />
        <link rel="modulepreload" href="/assets/three-CJyKo-TQ.js" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

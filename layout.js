import { Inter } from "next/font/google";

import GoogleAnalytics from "./analytics";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const GA_TRACKING_ID = "G-XXXXXX";
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={GA_TRACKING_ID} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

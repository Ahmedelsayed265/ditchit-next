import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { getProfile } from "@/features/auth/actions";
import AuthProvider from "@/providers/AuthProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ditchit.com/"),
  title: "DitchIt",
  description:
    "Buy, Sell, Ditchit - The Win-Win Marketplace. Ditchit offers a thrilling experience: list in 30 seconds, explore new arrivals daily, and connect with buyers and sellers in a secure community. Build your reputation, find hidden gems, and join millions of users shopping locally!",
  keywords: [
    "Ditchit",
    "Marketplace",
    "Buy and Sell",
    "Local Shopping",
    "Online Deals",
    "List Fast",
    "Community Marketplace",
  ],
  authors: [{ name: "DitchIt", url: "https://ditchit.com" }],
  robots: "index, follow",
  openGraph: {
    title: "DitchIt",
    description:
      "Buy, Sell, Ditchit - The Win-Win Marketplace. Ditchit offers a thrilling experience: list in 30 seconds, explore new arrivals daily, and connect with buyers and sellers in a secure community. Build your reputation, find hidden gems, and join millions of users shopping locally!",
    url: "https://ditchit.com/",
    type: "website",
    images: [
      {
        url: "/branding/store.png",
        width: 800,
        height: 600,
        alt: "DitchIt Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DitchIt",
    description:
      "Buy, Sell, Ditchit - The Win-Win Marketplace. Ditchit offers a thrilling experience: list in 30 seconds, explore new arrivals daily, and connect with buyers and sellers in a secure community.",
    images: ["/branding/store.png"],
  },
  icons: {
    icon: "/branding/fav.svg",
    apple: "/branding/fav.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getProfile();

  return (
    <html lang="en">
      <body>
        <AuthProvider user={data?.user ?? null} token={data?.token ?? null}>
          <ReactQueryProvider>
            <Toaster
              expand={false}
              richColors
              position="bottom-right"
              theme="light"
            />
            <Header />
            <main className="min-h-[calc(100vh-316px)]">{children}</main>
            <Footer />
          </ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

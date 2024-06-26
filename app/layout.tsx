import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://meikopoulos.com"),
  alternates: {
    canonical: "https://meikopoulos.com",
  },
  title: "Sean Lyons",
  description:
    "Sean Lyons is a Full Stack Software Engineer, Team Lead, and Unity Expert.",
  keywords:
    "Sean Lyons, Full Stack Engineer, Team Lead, Web Development, VR/AR, 3D Game Development, Software Engineering, Unity",
  openGraph: {
    locale: "en_US",
    siteName: "Sean Lyons",
    type: "website",
    title: "Sean Lyons",
    description:
      "Sean Lyons is a Full Stack Software Engineer, Team Lead, and Unity Expert.",
    url: "https://meikopoulos.com",
    images: [
      {
        url: "./og-large-meik.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sean Lyons",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

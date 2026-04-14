import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saunish Pal | Freelance Developer Portfolio",
  description:
    "Freelance portfolio showcasing premium websites, AI product ideas, modern UI, and business-focused digital experiences.",
  keywords: [
    "Saunish Pal",
    "freelance developer",
    "Next.js developer",
    "portfolio website developer",
    "AI MVP developer",
    "web designer",
  ],
  openGraph: {
    title: "Saunish Pal | Freelance Developer Portfolio",
    description:
      "Premium websites, AI concepts, and modern digital experiences for businesses and personal brands.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
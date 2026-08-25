import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "RoboGyaan — Robotics & STEM Education for Indian Classrooms",
  description:
    "RoboGyaan (रोबो ज्ञान) brings hands-on robotics, coding and 3D design programs to K-12 schools across India. Micro:bit, Arduino, Avishkaar kits, Scratch and more — delivered inside your school.",
  metadataBase: new URL("https://robogyaan.in"),
  openGraph: {
    title: "RoboGyaan — Robotics & STEM Education for Indian Classrooms",
    description:
      "Hands-on robotics, coding and 3D design programs for K-12 schools. From first puzzle to a working Arduino robot, grade by grade.",
    url: "https://robogyaan.in",
    siteName: "RoboGyaan",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "RoboGyaan — Kids build robots, not just use them",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoboGyaan — Robotics & STEM for Indian Schools",
    description:
      "Hands-on robotics, coding and 3D design programs delivered inside your school.",
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
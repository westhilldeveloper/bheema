import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bheema group",
  description: "Building Trust, Delivering Excellence Across Industries",
  icons: {
    icon: [
      { url: "/lg64.png", sizes: "32x32", type: "image/png" },
      { url: "/lg32.png", sizes: "64x64", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full  flex flex-col">{children}</body>
    </html>
  );
}

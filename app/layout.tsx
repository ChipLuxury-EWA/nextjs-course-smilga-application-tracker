import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApliTrack",
  description: "Enjoy tracking your applications, jobs and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

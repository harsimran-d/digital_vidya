import AuthNavBar from "@/features/authentication/AuthNavBar";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Vidya",
  description: "Next generation course selling platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-green-50">
        <AuthNavBar />
        {children}
      </body>
    </html>
  );
}

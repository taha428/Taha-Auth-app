import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "NextAuth App",
  description: "Authentication app with OAuth providers",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

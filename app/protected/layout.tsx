import { auth } from "@/lib/auth";
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  return (
    <div>
      <Navbar session={session} />
      <main>{children}</main>
    </div>
  );
}

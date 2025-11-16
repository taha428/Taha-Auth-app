"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";

interface NavbarProps {
  session: Session | null;
}

export default function Navbar({ session }: NavbarProps) {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link href="/" style={{ color: "white", textDecoration: "none", fontSize: "1.5rem" }}>
        NextAuth App
      </Link>

      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <Link href="/main" style={{ color: "white", textDecoration: "none" }}>
          Main Page
        </Link>
        <Link href="/user/1" style={{ color: "white", textDecoration: "none" }}>
          User 1
        </Link>

        {session?.user ? (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {session.user.image && (
              <Image
                src={session.user.image}
                alt={session.user.name || "Profile"}
                width={40}
                height={40}
                style={{
                  borderRadius: "50%",
                }}
              />
            )}
            <span>{session.user.name}</span>
            <button
              onClick={() => signOut({ redirect: true, callbackUrl: "/signin" })}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/signin"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#3498db",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

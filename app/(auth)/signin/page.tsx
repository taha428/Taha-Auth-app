"use client";

import { signIn } from "next-auth/react";

export default function SigninPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Sign In</h1>
      <p>You are not logged in. Please sign in to continue.</p>

      <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <button 
          onClick={() => signIn("google", { callbackUrl: "/" })}
          style={{
            padding: "0.75rem 1rem",
            backgroundColor: "#DB4437",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            textAlign: "center",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Sign in with Google
        </button>

        <button 
          onClick={() => signIn("github", { callbackUrl: "/" })}
          style={{
            padding: "0.75rem 1rem",
            backgroundColor: "#24292E",
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            textAlign: "center",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}

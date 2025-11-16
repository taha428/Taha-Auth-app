import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function HomePage() {
  const session = await auth();

  if (!session) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>You are not logged in</h1>
        <p>Please login first.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {session.user?.name}!</h1>
      <p>You are successfully logged in.</p>

      {session.user?.image && (
        <Image
          src={session.user.image}
          alt={session.user.name || "Profile"}
          width={100}
          height={100}
          style={{
            borderRadius: "50%",
            marginTop: "1rem",
          }}
        />
      )}
    </div>
  );
}

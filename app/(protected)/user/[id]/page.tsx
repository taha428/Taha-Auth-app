import { auth } from "../../../../lib/auth";

// Dynamic server page - fetches data based on dynamic segment
async function fetchUserData(userId: string) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!response.ok) throw new Error("User not found");
    return response.json();
  } catch (error) {
    console.error("API fetch error:", error);
    return null;
  }
}

interface PageParams {
  params: {
    id: string;
  };
}

export default async function UserPage({ params }: PageParams) {
  const session = await auth();
  const user = await fetchUserData(params.id);

  if (!user) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>User Not Found</h1>
        <p>The user with ID {params.id} does not exist.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>User Details</h1>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "1.5rem",
          borderRadius: "4px",
          marginTop: "1rem",
        }}
      >
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Company:</strong> {user.company?.name}
        </p>
      </div>
    </div>
  );
}

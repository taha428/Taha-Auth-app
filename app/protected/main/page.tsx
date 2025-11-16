import { auth } from "../../../lib/auth";

// Static server page - fetches data on server
async function fetchPublicAPI() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    if (!response.ok) throw new Error("Failed to fetch");
    return response.json();
  } catch (error) {
    console.error("API fetch error:", error);
    return null;
  }
}

export default async function MainPage() {
  const session = await auth();
  const data = await fetchPublicAPI();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Main Static Server Page</h1>
      <p>This page fetches data from a public API on the server.</p>

      {data ? (
        <div style={{
          backgroundColor: "#f5f5f5",
          padding: "1rem",
          borderRadius: "4px",
          marginTop: "1rem",
        }}>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <small>Post ID: {data.id}</small>
        </div>
      ) : (
        <p style={{ color: "red" }}>Failed to fetch data from API</p>
      )}
    </div>
  );
}

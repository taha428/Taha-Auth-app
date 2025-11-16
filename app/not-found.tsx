export default function NotFound() {
  return (
    <div style={{
      padding: "2rem",
      textAlign: "center",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <h1 style={{ fontSize: "3rem", margin: "0" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", margin: "0.5rem 0" }}>Page Not Found</h2>
      <p style={{ marginTop: "1rem", color: "#666" }}>
        The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#3498db",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
        }}
      >
        Go Home
      </a>
    </div>
  );
}

export default function Unavailable() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center",
        background: "var(--cream)",
      }}
    >
      <h1
        className="font-serif"
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: 400,
          color: "var(--text-dark)",
          marginBottom: 16,
        }}
      >
        Not available in your region
      </h1>
      <p
        style={{
          fontSize: 16,
          fontWeight: 300,
          color: "var(--text-mid)",
          maxWidth: 400,
          lineHeight: 1.7,
        }}
      >
        Blossom.inc currently ships to Europe and the United States only.
        We hope to expand to more regions soon.
      </p>
    </div>
  );
}

export default function AuthLayout({children}: { children: React.ReactNode }) {
  return (
    <div style={{ padding: 20, background: "#fabfbfff" }}>
      <h2>Login Page</h2>
      {children}
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: 20, background: "#e0ffff" }}>
      <h2>Client Area</h2>
      {children}
    </div>
  );
}

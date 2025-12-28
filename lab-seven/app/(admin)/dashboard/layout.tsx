export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: 20, background: "#7a30faff" }}>
      <h2>Admin Panel</h2>
      {children}
    </div>
  );
}

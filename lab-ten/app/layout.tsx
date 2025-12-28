import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next.js Route Groups Demo",
  description: "Demonstration of auth, admin, and client route groups",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        <header className="p-3 bg-primary">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">Navbar</Link>

              <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" href="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" href="/students">Students</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" href="/users">Users</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" href="/about">About</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}

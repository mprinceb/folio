import "./globals.css";

export const metadata = {
  title: "Prince Baghel — Full Stack Engineer",
  description:
    "Full-stack engineer building production systems end to end — backend services, automation pipelines, and the React interfaces on top.",
  metadataBase: new URL("https://princebaghel.vercel.app"),
  openGraph: {
    title: "Prince Baghel — Full Stack Engineer",
    description:
      "Backend services, automation pipelines, and the React interfaces on top.",
    type: "website",
  },
};

function Nav() {
  return (
    <nav>
      <div className="wrap">
        <a className="logo" href="/">
          prince<span>@</span>baghel
        </a>
        <ul>
          <li><a href="/work">work</a></li>
          <li><a href="/#experience">experience</a></li>
          <li><a href="/#skills">skills</a></li>
          <li><a href="/#contact">contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} Prince Baghel · Bengaluru, India</span>
        <span>
          <a href="https://github.com/mprinceb" target="_blank" rel="noreferrer">github</a>
          {" · "}
          <a href="https://linkedin.com/in/mprincebaghel" target="_blank" rel="noreferrer">linkedin</a>
          {" · "}
          <a href="mailto:pkbghl2@gmail.com">email</a>
        </span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

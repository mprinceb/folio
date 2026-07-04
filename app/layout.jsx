import "./globals.css";
import Clock from "./components/Clock";

export const metadata = {
  title: "Prince Baghel — Full Stack Engineer",
  description:
    "Full-stack engineer in Bengaluru building production systems end to end — distributed pipelines, clinical desktop software, ERP automation, and the React interfaces on top.",
  metadataBase: new URL("https://princebaghel.vercel.app"),
  openGraph: {
    title: "Prince Baghel — Full Stack Engineer",
    description:
      "Distributed pipelines, clinical desktop software, ERP automation, and the React interfaces on top.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="topbar">
          <span className="loc">Bengaluru, India</span>
          <nav className="pillnav">
            <a href="/">home</a>
            <span className="sep" />
            <a href="/work">work</a>
            <a href="/#experience">experience</a>
            <a href="/#contact">contact</a>
          </nav>
          <span className="clock"><Clock /></span>
        </div>
        {children}
        <footer>
          <div className="inner">
            <span>© {new Date().getFullYear()} / Prince Baghel</span>
            <span>
              <a href="https://github.com/mprinceb" target="_blank" rel="noreferrer">github</a>
              {"  ·  "}
              <a href="https://linkedin.com/in/mprincebaghel" target="_blank" rel="noreferrer">linkedin</a>
              {"  ·  "}
              <a href="mailto:pkbghl2@gmail.com">pkbghl2@gmail.com</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}

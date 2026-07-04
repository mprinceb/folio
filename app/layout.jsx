import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import Clock from "./components/Clock";
import Nav from "./components/Nav";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./components/Icons";

export const metadata = {
  title: "Prince Baghel — Full Stack Engineer",
  description:
    "Full-stack engineer in Bengaluru building production systems end to end — distributed pipelines, clinical desktop software, ERP automation, and the React interfaces on top.",
  metadataBase: new URL("https://mprinceb.vercel.app"),
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
          <Nav />
          <span className="clock"><Clock /></span>
        </div>
        {children}
        <footer>
          <div className="inner">
            <span>© {new Date().getFullYear()} / Prince Baghel</span>
            <span className="flinks">
              <a href="https://github.com/mprinceb" target="_blank" rel="noreferrer"><GitHubIcon size={16} /></a>
              <a href="https://linkedin.com/in/mprincebaghel" target="_blank" rel="noreferrer"><LinkedInIcon size={16} /></a>
              <a href="mailto:pkbghl2@gmail.com"><MailIcon size={16} /></a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}

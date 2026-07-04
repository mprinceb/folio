"use client";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();
  const onWork = path.startsWith("/work");
  return (
    <nav className="pillnav">
      <a href="/" className={!onWork ? "active" : ""}>home</a>
      <span className="sep" />
      <a href="/work" className={onWork ? "active" : ""}>work</a>
      <a href="/#experience">experience</a>
      <a href="/#contact">contact</a>
    </nav>
  );
}

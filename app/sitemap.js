import { projects } from "./projects";

export default function sitemap() {
  return ["", "/work", ...projects.map((p) => `/work/${p.slug}`)].map((path) => ({
    url: `https://mprinceb.vercel.app${path}`,
  }));
}

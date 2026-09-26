import Link from "next/link";
export default function NotFound() {
  return (
    <section className="shell not-found">
      <span className="eyebrow">404 / COMMAND NOT FOUND</span>
      <h1>This page is off the map.</h1>
      <p>The page you’re looking for isn’t in MAX’s command map.</p>
      <Link className="button primary" href="/">
        Return home
      </Link>
    </section>
  );
}

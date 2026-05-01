import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl space-y-4 text-center">
      <h1 className="font-serif text-5xl">Page not found</h1>
      <p className="text-muted">This page is taking the scenic route.</p>
      <Link className="focus-ring inline-flex rounded-full border border-border bg-card px-4 py-2 text-sm hover:text-accent" href="/">
        Go home
      </Link>
    </div>
  );
}

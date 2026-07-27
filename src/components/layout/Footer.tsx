import Link from "next/link";
import { NAV_LINKS, WORDMARK } from "@/lib/site";

/** Footer — links, legal, contact. All copy is PLACEHOLDER. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <div className="page-shell grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-mono text-sm tracking-[0.32em] text-fg">
            {WORDMARK}
          </p>
          <p className="mt-4 max-w-xs text-step--1 text-fg-muted">
            {/* DRAFT — one-line product descriptor. */}
            Automatic IN/OUT line-calling for padel — from the corner, in real
            time.
          </p>
        </div>

        <FooterColumn title="Product" links={NAV_LINKS} />

        <FooterColumn
          title="Company"
          links={[
            { label: "Contact", href: "#contact" },
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
          ]}
        />
      </div>

      <div className="page-shell flex flex-col gap-2 border-t border-hairline py-6 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-fg-faint sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} LineGuard — PLACEHOLDER</span>
        <span>Built for preview · not final content</span>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-fg-faint">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-step--1 text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

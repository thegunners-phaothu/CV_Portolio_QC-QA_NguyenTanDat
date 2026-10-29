import type { Profile } from "@/types";

export default function ContactSection({ profile }: { profile: Profile }) {
  const items = [
    {
      id: "contact-email",
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: "M4 4h16v16H4zM4 6l8 7 8-7",
    },
    {
      id: "contact-phone",
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      icon: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z",
    },
    ...(profile.linkedInUrl
      ? [
          {
            id: "contact-linkedin",
            label: "LinkedIn",
            value: profile.linkedInUrl.replace(/^https?:\/\/(www\.)?/, ""),
            href: profile.linkedInUrl,
            icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
          },
        ]
      : []),
    {
      id: "contact-location",
      label: "Location",
      value: profile.location,
      href: undefined,
      icon: "M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    },
  ];

  return (
          <section id="contact" aria-labelledby="contact-title" className="section bg-[#C0C0C0]">
      <div className="container-page">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl" aria-hidden="true" />
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="section-title">
            Let&apos;s work together
          </h2>
          <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-300">
            Open to QA/QC opportunities. Reach out by email, phone, or LinkedIn.
          </p>
          <address className="mt-10 grid gap-4 not-italic sm:grid-cols-2">
            {items.map((it) => {
              const content = (
                <>
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-gradient-to-br from-amber-500/15 to-slate-200/15 text-amber-600 dark:text-amber-300">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
                      <path d={it.icon} />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">{it.label}</span>
                    <span className="block break-words font-medium text-zinc-900 dark:text-white">{it.value}</span>
                  </span>
                </>
              );
              const cls = "flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition dark:border-white/10";
              const external = it.href?.startsWith("http");
              return it.href ? (
                <a
                  key={it.id}
                  id={it.id}
                  href={it.href}
                  className={`${cls} hover:border-gold-500/60`}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {content}
                </a>
              ) : (
                <div key={it.id} id={it.id} className={cls}>
                  {content}
                </div>
              );
            })}
          </address>
        </div>
      </div>
    </section>
  );
}

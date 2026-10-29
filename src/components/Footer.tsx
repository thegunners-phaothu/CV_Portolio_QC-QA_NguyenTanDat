import type { Profile } from "@/types";

export default function Footer({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 py-8 dark:border-white/10">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-zinc-500 sm:flex-row dark:text-zinc-400">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>
          {profile.role} · {profile.location}
        </p>
      </div>
    </footer>
  );
}

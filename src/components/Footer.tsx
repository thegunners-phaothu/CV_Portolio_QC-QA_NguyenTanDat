import type { Profile } from "@/types";

export default function Footer({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-teal-500/15 py-8 bg-transparent">
      <div className="container-page flex flex-col items-center justify-between gap-2 text-sm text-slate-400 sm:flex-row">
        <p className="font-mono text-xs">
          &copy; {year} <span className="text-white font-medium">{profile.name}</span>. All rights reserved.
        </p>
        <p className="font-mono text-xs text-teal-400/80">
          {profile.role} &middot; {profile.location}
        </p>
      </div>
    </footer>
  );
}

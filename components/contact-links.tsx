import { Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONTACT } from "@/lib/site-contact";

type ContactLinksProps = {
  className?: string;
  layout?: "row" | "stack";
};

export function ContactLinks({ className, layout = "row" }: ContactLinksProps) {
  return (
    <div
      className={cn(
        "grid gap-3",
        layout === "row" ? "sm:grid-cols-2" : "grid-cols-1",
        className,
      )}
    >
      <a
        href={SITE_CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
          <MessageCircle className="size-5" aria-hidden />
        </span>
        <span className="min-w-0 text-left">
          <span className="block text-xs text-zinc-500">WhatsApp</span>
          <span className="block truncate text-sm font-medium text-zinc-100 group-hover:text-white">
            {SITE_CONTACT.whatsappDisplay}
          </span>
        </span>
      </a>
      <a
        href={SITE_CONTACT.emailHref}
        className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
      >
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
          <Mail className="size-5" aria-hidden />
        </span>
        <span className="min-w-0 text-left">
          <span className="block text-xs text-zinc-500">Email</span>
          <span className="block truncate text-sm font-medium text-zinc-100 group-hover:text-white">
            {SITE_CONTACT.email}
          </span>
        </span>
      </a>
    </div>
  );
}

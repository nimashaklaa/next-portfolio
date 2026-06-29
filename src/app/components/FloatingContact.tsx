"use client";

import { useState } from "react";
import { useAccentColor } from "@/app/hooks/useAccentColor";
import { CONTACTS } from "@/app/constants/contacts";
import { AtSignIcon } from "@/app/components/Icons";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const { accentColor, textOnAccent } = useAccentColor();

  return (
    <div
      className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Contact options — slide up when open */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-200 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {CONTACTS.map((contact) => {
          const IconComponent = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-700 shadow-md transition-transform hover:scale-105 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
            >
              <span style={{ color: accentColor }}>
                <IconComponent className="h-4 w-4" />
              </span>
              {contact.label}
            </a>
          );
        })}
      </div>

      {/* Main FAB */}
      <button
        aria-label="Contact me"
        className="flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: accentColor, color: textOnAccent }}
      >
        <AtSignIcon />
      </button>
    </div>
  );
}

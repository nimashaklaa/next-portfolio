"use client";

import { drawerTokens } from "@/app/constants/theme-tokens";
import useCommonStore from "@/app/store/use-common-store";

export default function Footer() {
  const { isDark } = useCommonStore();
  const t = isDark ? drawerTokens.dark : drawerTokens.light;

  return (
    <footer
      className="z-20 flex h-14 w-full items-center justify-center py-4 font-sans"
      style={{ backgroundColor: t.bg, borderTop: `1px solid ${t.border}` }}
    >
      <p className="text-sm" style={{ color: t.textSecondary }}>
        &copy; {new Date().getFullYear()} Amandi Nimasha. All rights reserved.
      </p>
    </footer>
  );
}

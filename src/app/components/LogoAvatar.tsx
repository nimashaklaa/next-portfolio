"use client";

import useUiStore from "@/app/store/use-ui-store";

export default function LogoAvatar() {
  const isLogoHovered = useUiStore((state) => state.isLogoHovered);

  return (
    <div
      className="pointer-events-none fixed bottom-14 left-8 z-20 origin-bottom transition-all duration-500"
      style={{
        transform: isLogoHovered ? "scale(1)" : "scale(0)",
        opacity: isLogoHovered ? 1 : 0,
      }}
    >
      <img src="/images/me.png" alt="Amandi Nimasha" className="h-150 w-auto drop-shadow-2xl" />
    </div>
  );
}

"use client";

export default function Footer() {
  return (
    <footer className="z-20 flex h-14 w-full items-center justify-center border-t border-[#e5e7eb] bg-white py-4 font-sans dark:border-[#1C1C1C] dark:bg-[#0F0F13]">
      <p className="text-sm text-[#6b7280] dark:text-[#999999]">
        &copy; {new Date().getFullYear()} Amandi Nimasha. All rights reserved.
      </p>
    </footer>
  );
}

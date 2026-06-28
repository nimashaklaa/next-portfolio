export default function Footer() {
  return (
    <footer className="z-20 flex h-14 w-full items-center justify-center bg-[#0d0d0d] py-4 font-sans text-white">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} Amandi Nimasha. All rights reserved.
      </p>
    </footer>
  );
}

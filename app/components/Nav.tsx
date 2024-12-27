import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex sticky top-0 left-0 z-10 justify-center p-4 bg-slate-900/50 w-full">
      <ul className="text-white flex flex-row gap-5">
        <Link className="hover:text-[#adadad]" href="/">
          Главная
        </Link>
        <Link className="hover:text-[#adadad]" href="/animes">
          Аниме
        </Link>
      </ul>
    </nav>
  );
}

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex sticky top-0 left-0 z-50 justify-center p-4 shadow-sm bg-white/75 backdrop-blur-lg w-full">
      <ul className=" flex flex-row gap-5 text-black">
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

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-center p-4 bg-[#343434] w-full">
      <ul className="text-white flex flex-row gap-5">
        <Link className="hover:text-[#adadad]" href="/">
          Главная
        </Link>
        <Link className="hover:text-[#adadad]" href="/animes">
          Аниме
        </Link>
        {/*<Link className="hover:text-[#adadad]" href="/mangas">Manga</Link>
                <Link className="hover:text-[#adadad]" href="/ranobes">Ranobe</Link>*/}
      </ul>
    </nav>
  );
}

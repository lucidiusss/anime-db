import Link from "next/link";

export default function Nav() {
    return (
        <nav
            className="z-50 fixed left-1/2 flex justify-center -translate-x-1/2 p-4 bg-black/50 backdrop-blur-sm rounded-full top-5 w-1/4">

            <ul className="text-white flex flex-row gap-5">
                <Link className="hover:text-[#adadad]" href="/animes">Anime</Link>
                <Link className="hover:text-[#adadad]" href="/mangas">Manga</Link>
                <Link className="hover:text-[#adadad]" href="/ranobes">Ranobe</Link>
            </ul>

        </nav>
    );
}

import Filter from "@/app/components/Animes/Filter";
import { getAnimes } from "@/actions/actions";
import { AnimeProps } from "@/types";
import Link from "next/link";
import AnimeCard from "@/app/components/AnimeCard";

export default async function Animes() {
  const { data } = await getAnimes();

  return (
    <main className=" min-h-screen p-[0.8rem] mx-[7rem]">
      <h1 className="text-3xl font-bold mt-10 text-[#111]">Аниме</h1>
      <p className="text-[#a1a1a1]">
        На данной странице отображены лучшие аниме, отсортированные по рейтингу
      </p>
      <section className="flex mt-10 flex-row gap-10">
        <div className="w-3/4 flex flex-wrap flex-1 gap-10">
          {data.animes.map((anime: AnimeProps, index: number) => (
            <Link
              className="h-fit"
              key={anime.id}
              href={anime.url.slice(22, anime.url.length - 1)}
            >
              <AnimeCard index={index} anime={anime} />
            </Link>
          ))}
        </div>
        <Filter />
      </section>
    </main>
  );
}

import { getOngoingAnimes } from "@/actions/actions";
import Link from "next/link";
import AnimeCard from "@/app/components/AnimeCard";

export default async function Explore() {
  const data = await getOngoingAnimes();

  console.log(data.data.animes);

  return (
    <section
      id="explore"
      className=" shadow-xl flex flex-col min-h-screen p-10 mx-[7rem] rounded-xl relative z-20 bg-white text-[#afafaf]"
    >
      <h1 className="text-[2rem] text-[#111] font-bold mt-5">
        Сейчас на экранах
      </h1>
      <div className="w-full h-full flex flex-wrap gap-8 mt-14">
        {data.data.animes.map((anime, index: number) => (
          <Link className="h-fit" key={anime.id} href={anime.url}>
            <AnimeCard index={index} anime={anime} />
          </Link>
        ))}
      </div>
    </section>
  );
}

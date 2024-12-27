import { AnimeProps } from "@/types";

import AnimeCard from "../AnimeCard";
import Link from "next/link";

const Animes = ({ animes }: { animes: AnimeProps[] }) => {
  return (
    <div className="bg-white h-full flex-1 flex flex-wrap gap-8 mt-14">
      {animes &&
        animes.map((anime: AnimeProps, index: number) => (
          <Link
            className="h-fit"
            key={anime.id}
            href={anime.url.slice(22, anime.url.length - 1)}
          >
            <AnimeCard index={index} anime={anime} />
          </Link>
        ))}
    </div>
  );
};
export default Animes;

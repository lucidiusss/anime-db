"use client";
import { AnimeProps } from "@/types";
import AnimeCard from "../AnimeCard";
import Link from "next/link";
import { useAnimeStore } from "@/store/store";
import { useEffect } from "react";

const Animes = ({ passedAnimes }: { passedAnimes: AnimeProps[] }) => {
  const animes = useAnimeStore((state) => state.animes);
  const filteredAnimes = useAnimeStore((state) => state.filteredAnimes);
  const filterAnimes = useAnimeStore((state) => state.filterAnimes);
  const updateAnimes = useAnimeStore((state) => state.updateAnimes);

  useEffect(() => {
    updateAnimes(passedAnimes);
    return () => {
      filterAnimes([]);
    };
  }, []);

  return (
    <div className="bg-white h-full flex-1 flex flex-wrap gap-8 mt-14">
      {animes &&
        filteredAnimes.length === 0 &&
        animes.map((anime: AnimeProps, index: number) => (
          <Link
            className="h-fit"
            key={anime.id}
            href={anime.url.slice(22, anime.url.length - 1)}
          >
            <AnimeCard index={index} anime={anime} />
          </Link>
        ))}
      {filteredAnimes.length > 0 &&
        filteredAnimes.map((anime: AnimeProps, index: number) => (
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

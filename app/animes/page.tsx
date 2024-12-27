"use client";

import { getAnimes } from "@/actions/actions";
import AnimeCard from "@/app/components/AnimeCard";
import Filter from "@/app/components/Animes/Filter";
import { useAnimeStore } from "@/store/store";
import { AnimeProps } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";

export default function Animes() {
  const animes = useAnimeStore((state) => state.animes);
  const updateAnimes = useAnimeStore((state) => state.updateAnimes);

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["animes"],
    queryFn: getAnimes,
  });

  useEffect(() => {
    if (!isPending && data) {
      updateAnimes(data.data.animes);
    } else if (isError) {
      console.log(error);
    }
  }, [isPending]);

  return (
    <main className="min-h-screen p-[0.8rem] mx-[7rem]">
      <h1 className="text-3xl font-bold mt-10 text-[#111]">Аниме</h1>
      <p className="text-[#a1a1a1] mb-10">
        На данной странице отображены лучшие аниме, отсортированные по рейтингу
      </p>
      <Filter />
      <section className="shadow-xl mt-10 p-4 rounded-lg bg-white">
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
      </section>
    </main>
  );
}

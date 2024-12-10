"use client";
import Filter from "@/app/components/Animes/Filter";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useAnimeStore } from "@/store/store";

export default function Animes() {
  const setAnimePage = useAnimeStore((state) => state.setAnimePage);
  /*const animePage = useAnimeStore((state) => state.animePage)*/
  const { data, error, isLoading } = useQuery({
    queryKey: ["animes"],
    queryFn: () =>
      axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}animes?order=ranked&limit=25`,
      ),
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (!isLoading && data?.data) {
      setAnimePage(data.data);
    }
    if (error) {
      console.log(error);
    }
  }, [isLoading, data?.data]);

  return (
    <main className=" min-h-screen p-[0.8rem] mx-[7rem]">
      <h1 className="text-3xl font-bold mt-10 text-[#111]">Аниме</h1>
      <p className="text-[#a1a1a1]">
        На данной странице отображены лучшие аниме, отсортированные по рейтингу
      </p>
      <section className="flex mt-10 flex-row gap-10">
        <div className="w-3/4 flex flex-wrap flex-1 gap-10">
          {/*{!isFetching &&
            animePage.map((anime: AnimeBasic, index: number) => (
              <Link className="h-fit" key={anime.id} href={anime.url}>
                <AnimeCard index={index} anime={anime} />
              </Link>
            ))}*/}
        </div>
        <Filter />
      </section>
    </main>
  );
}

"use client";

import {useAnimeStore} from "@/store/store";
import {useQuery} from "@tanstack/react-query";
import {useEffect} from "react";
import AnimeCard from "@/app/components/AnimeCard";
import {PiSpinner} from "react-icons/pi";
import axios from "axios";
import {AnimeBasic} from "node-shikimori";
import Link from "next/link";

export default function Explore() {

    const animeList = useAnimeStore(state => state.animeList);
    const setAnimeList = useAnimeStore(state => state.setAnimeList);
    /*const [page, setPage] = useState<number>(2);
    const [limit, setLimit] = useState<number>(10);*/


    const {
        data,
        error,
        isFetching,
    } = useQuery({
        queryKey: ['animeList'],
        queryFn: () => axios.get(`${process.env.NEXT_PUBLIC_API_URL}animes?limit=25&page=1&order=popularity&status=ongoing`),
        refetchOnWindowFocus: false
    })

    /*const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['projects'],
        queryFn: getNextPage,
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    })
*/

    useEffect(() => {

        if (!isFetching && data?.data) {
            setAnimeList(data.data);
        }
        if (error) {
            console.log(error);
        }
    }, [isFetching, data?.data]);


    return (
        <section
            id="explore"
            className="m-[3.5rem] shadow-xl flex flex-col min-h-screen p-10 rounded-xl relative z-20 bg-white text-[#afafaf]">

            <h1 className="text-[2rem] text-[#111] font-bold mt-5">Сейчас на экранах</h1>
            <div className="w-full h-full flex justify-center flex-wrap gap-10 mt-14">
                {isFetching && <PiSpinner className="text-white animate-spin"
                                          size={100}/>}
                {!isFetching
                    && animeList.map((anime: AnimeBasic, index: number) =>
                        <Link className="h-fit" key={anime.id} href={anime.url}>
                            <AnimeCard index={index} anime={anime}/>
                        </Link>
                    )}
            </div>
        </section>
    );
}

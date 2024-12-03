"use client";
import MainBg from "../components/MainBg";
import Explore from "@/app/components/Explore";


export default function Home() {


    return (
        <>
            <MainBg/>
            <main className="min-h-screen flex flex-col justify-center relative p-[3.5rem]">
                <article className="relative z-20">
                    <h1 className="lg:text-[4rem] font-bold text-[#fbfbfb]">
                        Аниме Хаб
                    </h1>
                    <h3 className="lg:text-[2rem] font-semibold text-[#e8e8e8]">
                        Вся информация о ваших любимых аниме тайтлах
                    </h3>
                </article>
            </main>

            <Explore/>
        </>
    );
}

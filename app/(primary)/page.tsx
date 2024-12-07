import Explore from "@/app/components/Explore";

export default function Home() {
  return (
    <>
      <main className="min-h-[50vh] flex flex-col justify-center relative p-[0.8rem] mx-[7rem]">
        <article className="relative z-20">
          <h1 className="lg:text-[4rem] font-bold text-[#111]">Аниме Хаб</h1>
          <h3 className="lg:text-[2rem] font-semibold text-[#131313]">
            Вся информация о ваших любимых тайтлах
          </h3>
        </article>
      </main>
      <Explore />
    </>
  );
}

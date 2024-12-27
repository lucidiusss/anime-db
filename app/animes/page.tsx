import { getAnimes } from "@/actions/actions";
import Filter from "@/app/components/Animes/Filter";
import Animes from "../components/Animes/Animes";

export default async function Page() {
  const { data } = await getAnimes();

  return (
    <main className="min-h-screen p-[0.8rem] mx-[7rem]">
      <h1 className="text-3xl font-bold mt-10 text-[#111]">Аниме</h1>
      <p className="text-[#a1a1a1] mb-10">
        На данной странице отображены лучшие аниме, отсортированные по рейтингу
      </p>
      <Filter />
      <section className="shadow-xl mt-10 p-4 rounded-lg bg-white">
        <Animes animes={data.animes} />
      </section>
    </main>
  );
}

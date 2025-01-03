import { getAnime } from "@/actions/actions";
import { AnimeProps } from "@/types";
import InfoSection from "@/components/AnimePage/InfoSection";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug: string = (await params).slug;

  const id: string = slug.startsWith("z")
    ? slug.slice(1, slug.indexOf("-"))
    : slug.startsWith("y")
    ? slug.slice(1, slug.indexOf("-"))
    : slug.slice(0, slug.indexOf("-"));

  const { data } = await getAnime(id);

  const anime: AnimeProps = data.animes[0];

  console.log(anime);

  return (
    <section className="min-h-screen p-[0.8rem] mx-[7rem] flex flex-col">
      <h1 className="text-[#111] text-[1.8rem] mt-5 font-medium">
        {anime.russian}
        <span className="text-[#b0b0b0] mx-2">/</span>
        {anime.name}
      </h1>
      <div>
        <h1 className="text-[#d1d1d1]">TODO: genre links</h1>
      </div>
      <InfoSection {...anime} />
    </section>
  );
}

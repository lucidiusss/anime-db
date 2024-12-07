import { getAnime } from "@/actions/actions";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug: string = (await params).slug;

  const anime = await getAnime(slug.slice(0, slug.indexOf("-")));

  console.log(anime);

  return (
    <section className="min-h-screen p-[0.8rem] mx-[7rem] flex flex-col">
      {/*<h1 className="text-[#111] text-[1.8rem] mt-5 font-medium">
        {anime.russian}
        <span className="text-[#b0b0b0] mx-2">/</span>
        {anime.name}
      </h1>
      <div>
        <h1 className="text-[#d1d1d1]">TODO: genre links</h1>
      </div>
      <InfoSection {...anime} />*/}
    </section>
  );
}

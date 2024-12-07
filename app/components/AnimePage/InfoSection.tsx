import { Anime } from "node-shikimori";
import Image from "next/image";

export default function InfoSection(anime: Anime) {
  console.log(anime);

  return (
    <section className="mt-4 flex flex-col">
      <div>
        <Image
          src={`https://shikimori.one/${anime.image.original}`}
          className="w-[225px] h-[320px] rounded-xl object-cover"
          width={225}
          height={320}
          alt={anime.name}
        />
      </div>
    </section>
  );
}

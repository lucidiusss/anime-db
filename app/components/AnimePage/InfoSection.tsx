import { AnimeProps } from "@/types";
import Image from "next/image";
import InfoItem from "@/app/components/AnimePage/InfoItem";

export default function InfoSection(anime: AnimeProps) {
  return (
    <section className="mt-4 flex w-full flex-row gap-10">
      <div>
        <Image
          src={anime.poster.mainUrl}
          className="w-[225px] h-[320px] rounded-xl object-cover"
          width={225}
          height={320}
          alt={anime.name}
          priority={true}
        />
      </div>
      <div className="w-1/4">
        <h1 className="uppercase font-medium text-[1rem] text-[#111] py-1 px-2 text-center bg-[#b0b0b0]">
          Информация
        </h1>
        <div>
          <InfoItem
            name="Тип"
            value={`${anime.kind === "tv" ? "TV Сериал" : anime.kind === "ova" ? "OVA" : anime.kind === "ona" ? "ONA" : anime.kind}`}
          />
        </div>
      </div>
    </section>
  );
}

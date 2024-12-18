import { AnimeProps } from "@/types";
import Image from "next/image";

export default function InfoSection(anime: AnimeProps) {
  const releaseDate = `${anime.airedOn.year}-${anime.releasedOn.year} гг.`;
  const airedOn = `${anime.airedOn.year} г.`;

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
        <div className="mt-5">
          <div className="flex flex-row items-center gap-1">
            <h3 className="text-[#b0b0b0]">Тип:</h3>
            <p className="text-[#111]">
              {anime.kind === "tv"
                ? "TV Сериал"
                : anime.kind === "ova"
                  ? "OVA"
                  : anime.kind === "ona"
                    ? "ONA"
                    : anime.kind === "special"
                      ? "TV Спецвыпуск"
                      : anime.kind}
            </p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <h3 className="text-[#b0b0b0]">Эпизоды:</h3>
            <p className="text-[#111]">{anime.episodesAired}</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <h3 className="text-[#b0b0b0]">Длительность эпизода:</h3>
            <p className="text-[#111]">{anime.duration} мин.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <h3 className="text-[#b0b0b0]">Статус:</h3>
            <p className="text-[#111]">
              <span
                className={`text-[#f4f4f4] px-1 ${anime.status === "anons" ? "bg-[#ca4a2c]" : anime.status === "ongoing" ? "bg-[#1d78b7]" : "bg-[#449444]"}`}
              >
                {anime.status === "anons"
                  ? "анонс"
                  : anime.status === "ongoing"
                    ? "онгоинг"
                    : "вышло"}
              </span>{" "}
              {anime.status === "released"
                ? `вышел в ${anime.releasedOn.year == null ? airedOn : releaseDate}`
                : anime.status === "ongoing"
                  ? `c ${anime.airedOn.year} г.`
                  : ""}
            </p>
          </div>
          <div>
            <h3 className="text-[#b0b0b0]">
              Жанры:{" "}
              <span className="text-[#111]">
                {/*{anime.genres.filter((g) => g.kind === "genre")}*/}
              </span>
            </h3>
          </div>
          <div>
            <h3 className="text-[#b0b0b0]">
              Темы:{" "}
              <span className="text-[#111]">
                {/*{themes.map((t) => t.russian).join(", ")}*/}
              </span>
            </h3>
          </div>
          <div>
            <h3 className="text-[#b0b0b0]">
              Рейтинг:{" "}
              <span className="text-[#111]">{anime.rating.toUpperCase()}</span>
            </h3>
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <h1 className="uppercase font-medium text-[1rem] text-[#111] py-1 px-2 text-center bg-[#b0b0b0]">
          Рейтинг
        </h1>
      </div>
    </section>
  );
}

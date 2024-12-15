"use client";

import FilterItem from "@/app/components/Animes/FilterItem";

const FILTER_ITEMS = [
  {
    title: "статус",
    options: [
      {
        value: "anons",
        name: "Анонсировано",
      },
      {
        value: "ongoing",
        name: "Сейчас выходит",
      },
      {
        value: "released",
        name: "Вышедшее",
      },
      {
        value: "latest",
        name: "Недавно вышедшее",
      },
    ],
  },
  {
    title: "тип",
    options: [
      {
        value: "tv",
        name: "TV Сериал",
      },
      {
        value: "movie",
        name: "Фильм",
      },
      {
        value: "ova",
        name: "OVA",
      },
      {
        value: "ona",
        name: "ONA",
      },
      {
        value: "special",
        name: "Спецвыпуск",
      },
      {
        value: "tv_special",
        name: "TV Спецвыпуск",
      },
    ],
  },
  {
    title: "сортировка",
    options: [
      {
        value: "ranked",
        name: "По рейтингу",
      },
      {
        value: "popularit",
        name: "По популярности",
      },
      {
        value: "name",
        name: "По алфавиту",
      },
      {
        value: "aired_on",
        name: "По дате выхода",
      },
      {
        value: "ranked_random",
        name: "Случайно",
      },
      {
        value: "id_desc",
        name: "По ID",
      },
    ],
  },
];

export default function Filter() {
  return (
    <div className="w-full flex flex-col gap-5 relative bg-white shadow-xl rounded-xl p-4">
      {FILTER_ITEMS.map((item) => (
        <FilterItem key={item.title} {...item} />
      ))}
    </div>
  );
}

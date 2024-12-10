"use client";
import { FaStar } from "react-icons/fa6";
import { TbMovie } from "react-icons/tb";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimeProps } from "@/types";

interface AnimeProp {
  index: number;
  anime: AnimeProps;
}

export default function AnimeCard({ anime, index }: AnimeProp) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  console.log(anime);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{
        delay: index * 0.05,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="group hover:cursor-pointer flex flex-col max-w-[200px] h-fit"
    >
      <Image
        src={anime.poster.mainUrl}
        className="w-[200px] h-[250px] rounded-xl object-cover"
        width={500}
        height={400}
        alt={anime.name}
      />

      <div className="flex w-full mt-5 flex-row items-center">
        <h1 className="group-hover:text-[#f2bf38] text-[#111] group-hover:underline lg:text-[17px] truncate">
          {anime.russian}{" "}
        </h1>
        <span className="bg-[#242424] ml-auto text-[#fafafa] font-bold  px-3 py-1 rounded-lg">
          {anime.kind}
        </span>
      </div>

      <div className="flex flex-row items-center gap-5 mt-3">
        <p className="flex flex-row gap-1 items-center">
          <TbMovie className="text-red-500 text-[20px]" />
          {anime.episodesAired}{" "}
        </p>
        <p className="flex flex-row gap-1 items-center text-[#ffd700]">
          <FaStar className="drop-shadow-[0_0_5px_rgba(255,215,0,0.7)] text-[20px]" />
          {anime.score}
        </p>
        <span className="ml-auto">
          {anime.aired_on && anime.aired_on.slice(0, 4)}
        </span>
      </div>
    </motion.div>
  );
}

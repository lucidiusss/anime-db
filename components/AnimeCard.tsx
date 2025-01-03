"use client";
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

  const studio = anime?.studios[0];

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
        src={anime?.poster.mainUrl}
        className="w-[200px] h-[250px] rounded-xl object-cover"
        width={500}
        height={400}
        alt={anime?.name}
      />

      <div className="flex w-full mt-5 flex-row items-center">
        <h1 className="group-hover:text-[#f2bf38] text-[#111] w-full group-hover:underline lg:text-[17px] truncate">
          {anime?.russian}{" "}
        </h1>
      </div>
      <div>
        <p className="text-[#afafaf]">{studio?.name}</p>
      </div>
    </motion.div>
  );
}

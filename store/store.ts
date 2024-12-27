import { AnimeProps } from "@/types";
import { create } from "zustand";

interface AnimeState {
  animes: AnimeProps[];
  updateAnimes: (newAnimes: AnimeProps[]) => void;
}

export const useAnimeStore = create<AnimeState>((set) => ({
  animes: [],
  updateAnimes: (newAnimes) => set({ animes: newAnimes }),
}));

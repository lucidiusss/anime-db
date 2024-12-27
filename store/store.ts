import { AnimeProps } from "@/types";
import { create } from "zustand";

interface AnimeState {
  animes: AnimeProps[];
  filteredAnimes: AnimeProps[];
  updateAnimes: (newAnimes: AnimeProps[]) => void;
  filterAnimes: (newAnimes: AnimeProps[]) => void;
}

export const useAnimeStore = create<AnimeState>((set) => ({
  animes: [],
  filteredAnimes: [],
  updateAnimes: (newAnimes) => set({ animes: newAnimes }),
  filterAnimes: (newAnimes) => set({ filteredAnimes: newAnimes }),
}));

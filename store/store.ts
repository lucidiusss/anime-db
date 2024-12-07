import { create } from "zustand";
import { Anime, AnimeBasic } from "node-shikimori";

interface AnimeState {
  animeList: AnimeBasic[];
  singleAnime: Anime;
  animePage: AnimeBasic[];
  setAnimeList: (res: AnimeBasic[]) => void;
  setSingleAnime: (res: Anime) => void;
  setAnimePage: (res: AnimeBasic[]) => void;
}

export const useAnimeStore = create<AnimeState>((set) => ({
  animeList: <AnimeBasic[]>[],
  singleAnime: <Anime>{},
  animePage: <AnimeBasic[]>[],
  setAnimeList: (res: AnimeBasic[]) => set(() => ({ animeList: res })),
  setAnimePage: (res: AnimeBasic[]) => set(() => ({ animePage: res })),
  setSingleAnime: (res: Anime) => set(() => ({ singleAnime: res })),
}));

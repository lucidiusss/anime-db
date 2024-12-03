import {create} from 'zustand';
import {AnimeBasic} from "node-shikimori";

interface AnimeState {
    animeList: AnimeBasic[];
    setAnimeList: (res: AnimeBasic[]) => void;
}

export const useAnimeStore = create<AnimeState>((set) => ({
    animeList: [],
    setAnimeList: (res: AnimeBasic[]) => set(() => ({animeList: res}))
}))
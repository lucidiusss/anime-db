import { Anime } from "node-shikimori";

export interface AnimeProps extends Anime {
  poster: {
    id: string;
    originalUrl: string;
    mainUrl: string;
  };
  airedOn: {
    date: string;
    day: number;
    year: number;
    month: number;
  };
  releasedOn: {
    date: string;
    day: number;
    year: number;
    month: number;
  };
  episodesAired: number;
}

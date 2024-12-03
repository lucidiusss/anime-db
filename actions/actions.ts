"use server";
import axios from "axios";


/*export const getOngoings = async (search: string): Promise<AnimeBasic[]> => {
    return await shikimori.animes.list({
        search: search
    })
};*/

export const searchAnime = async (search: string) => {
    const {data} = await axios.get(`${process.env.API_URL}animes?limit=14&page=1`);
};





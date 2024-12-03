"use client";


import {InputText} from "primereact/inputtext";
import {useEffect, useState} from "react";
import {searchAnime} from "@/actions/actions";

export default function Input() {

    const [value, setValue] = useState<string>("");
    /*const setAnimeList = useAnimeStore(state => state.setAnimeList);*/


    useEffect(() => {
        if (value.length > 0) {
            searchAnime(value).then((r) => console.log(r))
        }
    }, [value])


    return <InputText
        className="bg-[#1a1a1a] text-white self-center w-1/4 shadow-xl px-4 py-2 rounded-xl"
        placeholder="search anime"
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
}
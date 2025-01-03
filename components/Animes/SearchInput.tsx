import { searchAnimes } from "@/actions/actions";
import { Input } from "@/components/ui/input";
import { useAnimeStore } from "@/store/store";
import { useEffect, useState } from "react";

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const SearchInput = ({}) => {
  const [search, setSearch] = useState<string>("");
  const debouncedSearchTerm = useDebounce(search, 500);

  const filterAnimes = useAnimeStore((state) => state.filterAnimes);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchAnimes(debouncedSearchTerm).then((res) =>
        filterAnimes(res.data.animes)
      );
    }
    if (search === "") {
      filterAnimes([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <Input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="ring-1 ring-[#d8d8d8] focus-visible:ring-[#000000] !border-[black] w-1/2 mx-auto !outline-none"
    />
  );
};
export default SearchInput;

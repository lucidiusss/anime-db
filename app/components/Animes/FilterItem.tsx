import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface FilterProps {
  title: string;
  options: Array<{ name: string; value: string }>;
}

export default function FilterItem(item: FilterProps) {
  return (
    <div>
      <h1 className="uppercase font-bold">{item.title}</h1>
      <Tabs>
        <TabsList className="flex items-center gap-3 justify-start w-fit">
          {item.options.map((option: { name: string; value: string }) => (
            <TabsTrigger
              key={option.value}
              value={option.name}
              className="hover:bg-white"
            >
              <Link href={`/animes?${option.value}`}>{option.name}</Link>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}

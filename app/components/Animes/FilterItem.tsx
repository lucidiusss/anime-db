import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FilterProps {
  title: string;
  options: Array<{ name: string; value: string }>;
}

export default function FilterItem(item: FilterProps) {
  console.log(item);
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
              {option.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}

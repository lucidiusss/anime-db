interface InfoItemProps {
  name: string;
  value: string | number;
  classname?: string;
}

export default function InfoItem({ name, value }: InfoItemProps) {
  return (
    <div className="flex flex-row items-center gap-1">
      <h1 className="text-[#b0b0b0]">{name}:</h1>
      <p className="text-[#111]">{value}</p>
    </div>
  );
}

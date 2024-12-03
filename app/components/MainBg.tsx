import Image from "next/image";
import bgImage from "../../assets/aot-fury-titan.jpg";

export default function MainBg() {
    return (
        <>
            <Image
                className="object-cover z-10 pointer-events-none select-none w-full h-full absolute top-0 left-0"
                unselectable="on"
                placeholder="blur"
                src={bgImage}
                loader={({src}) => src}
                alt="background"
                width={10}
                height={10}
                priority={true}
            />
            <div className="w-full h-full absolute top-0 left-0 z-20 bg-black/20"/>
        </>
    );
}

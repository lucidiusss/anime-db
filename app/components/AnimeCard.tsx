

    return (

        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
                delay: index * 0.25,
                ease: "easeInOut",
                duration: 0.5,
            }}
            viewport={{amount: 0}} className="group hover:cursor-pointer flex flex-col max-w-[200px] h-fit">

            <Image src={`https://shikimori.one/${anime.image.original}`}
                   className='w-[200px] h-[250px] rounded-xl object-cover'
                   width={500}
                   height={400}
                   alt={anime.name}
            />

            <div className="flex w-full mt-5 flex-row items-center">
                <h1 className="group-hover:text-[#f2bf38] group-hover:underline lg:text-[17px] truncate">{anime.russian} </h1>
                <span
                    className="bg-[#242424] ml-auto text-[#adadad] font-bold  px-3 py-1 rounded-lg">
                {anime.kind}
            </span>
            </div>

            <div className="flex flex-row items-center gap-5">
                <p className="flex flex-row gap-1 items-center">
                    <TbMovie
                        className="text-red-500 text-[20px]"/>{anime.episodes_aired} </p>
                <p className="flex flex-row gap-1 items-center text-[#ffd700]"
                >
                    <FaStar
                        className="drop-shadow-[0_0_5px_rgba(255,215,0,0.7)] text-[20px]"/>
                    {anime.score == "0.0" ? "⠀" : anime.score}

                </p>
            </div>

        </motion.div>
    )
}
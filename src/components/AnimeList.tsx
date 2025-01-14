import { Link } from "react-router-dom";
import { IAnimeData } from "../types/animeList.types";

type TypeProps = {
  animeList: IAnimeData[];
  isLoading: boolean;
};

export default function AnimeList({ animeList, isLoading }: TypeProps) {
  //
  if (isLoading)
    return (
      <section className="flex flex-wrap gap-4">
        {[...new Array(15)].map((_, i) => (
          <div key={i} className="animate-pulse w-[200px] h-[400px]">
            <div className="w-full h-[300px] mb-2 rounded bg-[#121820]"></div>
            <div className="w-full *:flex *:h-6 *:rounded *:bg-[#121820]">
              <div className="mb-1"></div>
              <div></div>
            </div>
          </div>
        ))}
      </section>
    );

  return (
    <section className="flex flex-wrap gap-4 justify-start">
      {animeList.map((anime, i) => (
        <Link
          to={`/anime/${anime.mal_id}`}
          key={anime.mal_id + "_" + i}
          className="relative w-[200px] h-[400px] transition-transform hover:-translate-y-1 rounded overflow-hidden"
        >
          <div className="absolute top-0 left-0 flex justify-center items-center w-16 h-6 bg-[#ffbb00] text-black font-semibold rounded-br">
            {anime.score}
          </div>
          <img
            title={anime.title}
            className="w-full h-[300px] mb-2 rounded object-cover"
            src={anime.images.webp.image_url}
          />
          <div className="text-base *:text-ellipsis *:whitespace-nowrap *:overflow-hidden">
            <p>{anime.title}</p>
            <p className="mt-1 opacity-30">{anime.title_japanese}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}

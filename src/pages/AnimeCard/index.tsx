import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { IAnimeFullData } from "../../types/anime.types";
import AnimePictures from "./AnimePictures/";
import AnimeRelations from "./AnimeRelations/";

export default function AnimeCard() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [animeCardInfo, setAnimeCardInfo] = useState<IAnimeFullData | null>(
    null
  );

  function formatDateRange(startDate: string, endDate: string | null): string {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB", options);
    };

    if (endDate == null) {
      return `from ${formatDate(startDate)}`;
    }

    return `from ${formatDate(startDate)} to ${formatDate(endDate)}`;
  }

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
      .then((data) => data.json())
      .then((obj: { data: IAnimeFullData }) => {
        setAnimeCardInfo(obj.data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!animeCardInfo || !id) {
    return <div>Error loading anime data.</div>;
  }

  return (
    <section className="flex flex-col gap-y-7">
      <div className="flex gap-x-6">
        <img
          className="w-[28%] h-[470px] rounded object-cover"
          src={animeCardInfo.images.jpg.large_image_url}
          alt={animeCardInfo.title}
        />

        <div className="w-[70%]">
          <h1 className="text-4xl font-bold mb-2">{animeCardInfo.title}</h1>
          <div className="flex items-center mb-6">
            <Star color="yellow" size={"25px"} fill="yellow" />
            <p className="ml-2 text-xl font-bold">
              {animeCardInfo.score}
              <span className="ml-1 text-sm font-semibold opacity-80">
                / 10
              </span>
            </p>
          </div>

          <div className="flex flex-col *:flex [&>div>p:first-child]:min-w-48 [&>div>p:first-child]:font-thin gap-x-36 gap-y-1 w-full text-lg text-wrap">
            <div>
              <p>Type:</p>
              <p>{animeCardInfo.type}</p>
            </div>
            <div>
              <p>Episodes:</p> <p>{animeCardInfo.episodes}</p>
            </div>
            <div>
              <p>Status:</p>
              <p>{animeCardInfo.status}</p>
            </div>
            <div>
              <p>Genres:</p>

              {animeCardInfo.genres.map((genre) => (
                <span className="mr-2" key={genre.mal_id}>
                  {genre.name},
                </span>
              ))}
            </div>
            <div>
              <p>Source:</p>
              <p>{animeCardInfo.source}</p>
            </div>
            <div>
              <p>Aired:</p>
              <p>
                {formatDateRange(
                  animeCardInfo.aired.from,
                  animeCardInfo.aired.to
                )}
              </p>
            </div>
            <div>
              <p>Rating:</p>
              <p>{animeCardInfo.rating}</p>
            </div>
            <div>
              <p>Duration:</p>
              <p>{animeCardInfo.duration}.</p>
            </div>
            <div>
              <p>Studio:</p>

              {animeCardInfo.studios?.map((studio) => (
                <div key={studio.mal_id}>{studio.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>{animeCardInfo.synopsis}</p>
      </div>
      <AnimePictures id={id} />
      <AnimeRelations animeCardInfo={animeCardInfo} />
    </section>
  );
}

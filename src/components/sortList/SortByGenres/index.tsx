import { useState, useEffect, useContext } from "react";
import { TypeGenre } from "../../../types/genres.types";
import { SortContext, TypeSort } from "../../../pages/Home";

export default function SortByGenres() {
  const [genres, setGenres] = useState<TypeGenre[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { sort, setSort } = useContext(SortContext);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then((data) => data.json())
      .then((obj) => {
        setIsLoading(false);
        setGenres(obj.data);
      });
  }, []);

  const handleCheckboxChange = (genreId: string) => {
    setIsLoading(false);
    setSort((prevSort: TypeSort) => {
      const updatedGenres = prevSort.genres.includes(genreId)
        ? prevSort.genres.filter((id: string) => id !== genreId)
        : [...prevSort.genres, genreId];

      return { ...prevSort, genres: updatedGenres };
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="flex flex-wrap justify-between gap-y-1">
      {genres.map((genre) => (
        <div
          key={genre.mal_id}
          className="flex w-[48%] text-sm gap-x-2 justify-between"
        >
          <div className="flex gap-x-1">
            <label>
              <input
                type="checkbox"
                checked={sort.genres.includes(genre.mal_id.toString())}
                onChange={() => handleCheckboxChange(genre.mal_id.toString())}
              />
            </label>
            <p className="break-all">{genre.name}</p>
          </div>
          <p>{genre.count}</p>
        </div>
      ))}
    </section>
  );
}

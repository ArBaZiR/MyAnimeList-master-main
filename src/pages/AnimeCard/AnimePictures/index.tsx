import { useEffect, useState } from "react";
import { IImages } from "../../../types/animeList.types";

type TypeProps = {
  id: string;
};

export default function AnimePictures({ id }: TypeProps) {
  const [picture, setPicture] = useState<IImages[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://api.jikan.moe/v4/anime/${id}/pictures`)
      .then((data) => data.json())
      .then((obj: { data: IImages[] }) => {
        setPicture(obj.data);
        setIsLoading(false);
      });
  }, []);

  console.log(picture);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (picture === undefined || picture?.length === 0) {
    return "";
  }

  return (
    <section className="flex flex-col">
      <p className="text-2xl pb-3 border-b-[1px]">Pictures</p>
      <div className="flex gap-x-6 h-72 overflow-x-auto py-3">
        {picture.map((img, index) => (
          <img
            key={index}
            src={img.webp.large_image_url}
            className="object-cover"
            alt="Anime picture"
          />
        ))}
      </div>
    </section>
  );
}

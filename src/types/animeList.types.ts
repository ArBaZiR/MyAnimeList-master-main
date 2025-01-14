import { TypeGenre } from "./genres.types";

type TypeImageSet = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

interface IImages {
  jpg: TypeImageSet;
  webp: TypeImageSet;
}

type TypeProducer = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
  };
}

type TypeTitle = {
  type: string;
  title: string;
};

interface IAired {
  from: string;
  to: string | null;
  prop: {
    from: {
      day: number;
      month: number;
      year: number;
    };
    to: {
      day: number;
      month: number;
      year: number;
    };
  };
  string: string;
}

interface IAnimeData {
  mal_id: number;
  url: string;
  images: IImages;
  trailer: Trailer;
  approved: boolean;
  titles: TypeTitle[];
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: IAired;
  duration: string;
  rating: string;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };
  producers: TypeProducer[];
  licensors: TypeProducer[];
  studios: TypeProducer[];
  genres: TypeGenre[];
  explicit_genres: TypeGenre[];
  themes: TypeGenre[];
  demographics: TypeGenre[];
}

export type { IAnimeData, IImages };

import { IAnimeData } from "./animeList.types";

interface IRelation {
  relation: string;
  entry: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
}

interface ITheme {
  openings: string[];
  endings: string[];
}

interface IExternalLink {
  name: string;
  url: string;
}

interface IStreamingService {
  name: string;
  url: string;
}

interface IAnimeFullData extends IAnimeData {
  relations: IRelation[];
  theme: ITheme;
  external: IExternalLink[];
  streaming: IStreamingService[];
}

export type { IAnimeFullData, IRelation };

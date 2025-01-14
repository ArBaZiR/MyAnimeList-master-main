import { IAnimeData } from "./animeList.types";
import { IPagination } from "./pagination.types";

interface IApiResponse {
  pagination: IPagination;
  data: IAnimeData[];
}

export type { IApiResponse };

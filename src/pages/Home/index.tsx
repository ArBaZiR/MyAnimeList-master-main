import { useEffect, useState, createContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Search from "../../components/Search";
import AnimeList from "../../components/AnimeList";
import Pagination from "../../components/Pagination";
import { IAnimeData } from "../../types/animeList.types";
import SortList from "../../components/sortList";

export type TypeSort = {
  search: string;
  type: string;
  rating: string;
  status: string;
  date: number[];
  genres: string[];
};

export interface ISortContext {
  sort: TypeSort;
  setSort: (sort: any) => void;
}

export const SortContext = createContext<ISortContext>({
  sort: {
    search: "",
    type: "",
    rating: "",
    status: "",
    date: [],
    genres: [],
  },
  setSort: () => {},
});

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [animeList, setAnimeList] = useState<IAnimeData[]>([]);
  const [filterBtn, setFilterBtn] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [sort, setSort] = useState<TypeSort>({
    search: "",
    type: "",
    rating: "",
    status: "",
    date: [],
    genres: [],
  });

  const location = useLocation();
  const isAnimeCardRoute = location.pathname.includes("/anime/");

  const queryParams = [
    sort.search ? `q=${sort.search}` : "",
    sort.type ? `type=${sort.type}` : "",
    sort.rating ? `rating=${sort.rating}` : "",
    sort.status ? `status=${sort.status}` : "",
    sort.genres.length ? `genres=${sort.genres.join(",")}` : "",
    sort.date[0] ? `start_date=${sort.date[0]}-01-01` : "",
    sort.date[1] ? `end_date=${sort.date[1]}-01-01` : "",
  ]
    .filter(Boolean)
    .join("&");

  // Фильтрация
  useEffect(() => {
    fetch(
      `https://api.jikan.moe/v4/anime?page=${currentPage}&limit=20&${
        filterBtn ? queryParams : sort.search && `q=${sort.search}`
      }`
    )
      .then((data) => data.json())
      .then((obj) => {
        setAnimeList(obj.data);
        setTotalPage(obj.pagination.last_visible_page);
        setCurrentPage(obj.pagination.current_page);
        setIsLoading(false);
      });
  }, [currentPage, filterBtn, sort.search]);

  return (
    <SortContext.Provider value={{ sort, setSort }}>
      <div className="flex bg-[#18202a] justify-center flex-col p-[30px] max-w-[1600px] m-auto">
        <div className="flex justify-between items-center gap-x-5 mb-7">
          <Link to={"/"} className="text-5xl text-white">
            Anime List
          </Link>
          <div className="flex justify-center w-3/4">
            <Search sort={sort} setSort={setSort} />
          </div>
        </div>
        <div className="flex gap-x-8">
          <SortList filterBtn={filterBtn} setFilterBtn={setFilterBtn} />
          <div className="w-3/4">
            {!isAnimeCardRoute ? (
              <>
                <AnimeList animeList={animeList} isLoading={isLoading} />
                <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPage={totalPage}
                />
              </>
            ) : (
              <Outlet />
            )}
          </div>
        </div>
      </div>
    </SortContext.Provider>
  );
}

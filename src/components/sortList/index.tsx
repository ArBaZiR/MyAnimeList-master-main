import { X } from "lucide-react";
import SortByDate from "./SortByDate";
import SortByStatus from "./SortByStatus";
import SortByTypes from "./SortByType";
import SortByRating from "./SortByRating";
import SortByGenres from "./SortByGenres";

type TypeProps = {
  filterBtn: boolean;
  setFilterBtn: (filterBtn: boolean) => void;
};

export default function SortList({ filterBtn, setFilterBtn }: TypeProps) {
  return (
    <section className="flex flex-col gap-y-6 w-[400px]">
      <SortByDate />
      <SortByStatus />
      <SortByTypes />
      <SortByRating />
      <SortByGenres />
      <div className="flex gap-x-3 justify-center items-center w-full h-20 bg-[#18202a]/90 sticky bottom-0 font-semibold text-sm *:py-2  *:bg-[#193364] *:rounded">
        <button
          onClick={() => setFilterBtn(true)}
          className="w-[150px] h-[40px]"
        >
          Apply Filter
        </button>
        {filterBtn && (
          <button
            onClick={() => setFilterBtn(false)}
            className="flex justify-center w-[50px]"
          >
            <X />
          </button>
        )}
      </div>
    </section>
  );
}

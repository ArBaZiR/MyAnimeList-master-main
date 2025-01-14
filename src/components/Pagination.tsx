import { ChevronsRight, ChevronsLeft } from "lucide-react";

type TypeProps = {
  currentPage: number;
  totalPage: number;
  setCurrentPage: Function;
};

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPage,
}: TypeProps) {
  const startPage: number = Math.max(currentPage - 3, 1);
  const endPage: number = Math.min(startPage + 6, totalPage);

  return (
    <div>
      <div className="flex justify-center mt-5 gap-x-2 *:flex *:justify-center *:items-center *:w-12 *:h-12 *:bg-[#121820] *:p-[10px] *:rounded">
        <button onClick={() => setCurrentPage(1)}>
          <ChevronsLeft />
        </button>
        {[...new Array(endPage - startPage + 1)].map((_, index) => (
          <button
            key={startPage + index}
            className={`${
              currentPage === startPage + index && "!bg-[#2c69b7]"
            } hover:translate-y-[-2px]`}
            onClick={() => setCurrentPage(startPage + index)}
          >
            {startPage + index}
          </button>
        ))}
        <button onClick={() => setCurrentPage(totalPage)}>
          <ChevronsRight />
        </button>
      </div>
    </div>
  );
}

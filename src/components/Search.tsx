import { Search } from "lucide-react";
//
import { TypeSort } from "../pages/Home";

type TypeProps = {
  sort: TypeSort;
  setSort: (sort: TypeSort) => void;
};

export default function SearchBlock({ sort, setSort }: TypeProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem(
      "searchInput"
    ) as HTMLInputElement;
    setSort({ ...sort, search: input.value });
  };

  return (
    <div>
      <form
        className="flex justify-center overflow-hidden rounded"
        onSubmit={handleSubmit}
      >
        <input
          name="searchInput"
          className="bg-[#303f52] w-[600px] pl-3 py-2 outline-none text-white"
          type="text"
          placeholder="Поиск по сайту..."
        />
        <button className="bg-[#193364] px-3 py-2 transition-colors hover:bg-[#193364]/60">
          <Search color="white" />
        </button>
      </form>
    </div>
  );
}

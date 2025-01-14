//
import { useContext } from "react";
import { SortContext } from "../../../pages/Home";
//

export default function SortByTypes() {
  const { sort, setSort } = useContext(SortContext);

  const typesArray = [
    { title: "TV", value: "tv" },
    { title: "Movie", value: "movie" },
    { title: "OVA", value: "ova" },
    { title: "Special", value: "special" },
    { title: "ONA", value: "ona" },
    { title: "Music", value: "music" },
    { title: "CM", value: "cm" },
    { title: "PV", value: "pv" },
    { title: "TV Special", value: "tv_special" },
  ];

  return (
    <section>
      <label className="block text-sm font-medium mb-2">Type</label>
      <select
        onChange={(e) => setSort({ ...sort, type: e.target.value })}
        className="w-full border rounded px-2 py-1 text-black"
      >
        <option value="">Select a type</option>
        {typesArray.map((type) => (
          <option key={type.title} value={type.value}>
            {type.title}
          </option>
        ))}
      </select>
    </section>
  );
}

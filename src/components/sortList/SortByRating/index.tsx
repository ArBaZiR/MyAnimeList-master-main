//
import { useContext } from "react";
import { SortContext } from "../../../pages/Home";
//

export default function SortByRating() {
  const ratingArray = ["g", "pg", "pg13", "r17", "r", "rx"];
  const { sort, setSort } = useContext(SortContext);

  return (
    <section>
      <label className="block text-sm font-medium mb-2">Age limit</label>
      <select
        onChange={(e) => setSort({ ...sort, rating: e.target.value })}
        className="w-full border rounded px-2 py-1 text-black"
      >
        <option value="">Select a rating</option>
        {ratingArray.map((rating) => (
          <option key={rating} value={rating}>
            {rating.charAt(0).toUpperCase() + rating.slice(1)}
          </option>
        ))}
      </select>
    </section>
  );
}

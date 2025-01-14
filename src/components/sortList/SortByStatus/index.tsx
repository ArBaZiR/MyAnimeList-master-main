import { useContext } from "react";
import { SortContext } from "../../../pages/Home";

export default function SortByStatus() {
  const statusArray = ["airing", "complete", "upcoming"];
  const { sort, setSort } = useContext(SortContext);

  return (
    <section>
      <label className="block text-sm font-medium mb-2">Status</label>
      <select
        onChange={(e) => setSort({ ...sort, status: e.target.value })}
        className="w-full border rounded px-2 py-1 text-black"
      >
        <option value="">Select a status</option>
        {statusArray.map((status) => (
          <option key={status} value={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </option>
        ))}
      </select>
    </section>
  );
}

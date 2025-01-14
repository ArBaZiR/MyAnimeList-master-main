import { useContext, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { SortContext } from "../../../pages/Home";

export default function SortByDate({}: {}) {
  const { sort, setSort } = useContext(SortContext);

  const minYear = 1950;
  const maxYear = new Date().getFullYear();

  const [yearRange, setYearRange] = useState<[number, number]>([
    minYear,
    maxYear,
  ]);

  return (
    <div className="flex flex-col gap-4">
      <label>
        Годы: {yearRange[0]} - {yearRange[1]}
      </label>
      <div className="flex justify-center">
        <Slider
          range
          min={minYear}
          max={maxYear}
          defaultValue={yearRange}
          onChange={(value) => (
            setSort({ ...sort, date: value as [number, number] }),
            setYearRange(value as [number, number])
          )}
          className="max-w-[95%]"
          styles={{
            rail: { backgroundColor: "white", height: "10px" },
            track: { backgroundColor: "#2c69b7", height: "10px" },
            handle: {
              backgroundColor: "#2c69b7",
              opacity: "100%",
              height: "20px",
              width: "20px",
            },
          }}
        />
      </div>
    </div>
  );
}

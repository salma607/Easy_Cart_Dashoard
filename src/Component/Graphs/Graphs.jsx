import { useState } from "react";
import Bar from "./GraphsComponent/Bar";
import Line from "./GraphsComponent/line";
import Piechart from "./GraphsComponent/Piechart";
import Scatter from "./GraphsComponent/scatter";

export default function Graphs() {
  const graphs = [
    { id: 1, component: <Line />, title: "Product Sales by Category/day" },
    { id: 2, component: <Scatter />, title: "Electronics Product Analysis" },
    { id: 3, component: <Piechart />, title: "Product Category Pie Chart" },
    { id: 4, component: <Bar />, title: "Category Data Visualization/month" },
  ];

  const [currentGraphIndex, setCurrentGraphIndex] = useState(0);

  const handleNext = () => {
    setCurrentGraphIndex((prevIndex) =>
      (prevIndex + 2) % graphs.length
    );
  };

  const handlePrevious = () => {
    setCurrentGraphIndex((prevIndex) =>
      (prevIndex - 2 + graphs.length) % graphs.length
    );
  };

  return (
    <div className="m-5 p-6 border-2 border-stone-200 rounded-md shadow-xl bg-white">
      {/* Display the current graphs */}
      <div className="mb-4 text-center">
        {/* Display two graphs at a time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-center">
            <h2 className="text-lg md:text-xl mb-4 font-bold text-center">
              {graphs[currentGraphIndex].title}
            </h2>
            <div className="w-full max-w-xs md:max-w-md">{graphs[currentGraphIndex].component}</div>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-lg md:text-xl mb-4 font-bold text-center">
              {graphs[(currentGraphIndex + 1) % graphs.length].title}
            </h2>
            <div className="w-full max-w-xs md:max-w-md">{graphs[(currentGraphIndex + 1) % graphs.length].component}</div>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-gray-200 rounded-md shadow hover:bg-gray-300 text-sm md:text-base"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-200 rounded-md shadow hover:bg-gray-300 text-sm md:text-base"
        >
          Next
        </button>
      </div>
    </div>
  );
}
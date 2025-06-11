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

  // State to track window width (for responsive rendering)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [currentPage, setCurrentPage] = useState(0);

  // Listen for window resize (no useEffect; set handler directly)
  if (typeof window !== "undefined") {
    window.onresize = () => {
      setWindowWidth(window.innerWidth);
      setCurrentPage(0); // Optionally reset to first page when switching layout
    };
  }

  const isMobile = windowWidth < 768;
  const pageSize = isMobile ? 1 : 2;
  const totalPages = Math.ceil(graphs.length / pageSize);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIdx = currentPage * pageSize;
  const currentGraphs = graphs.slice(startIdx, startIdx + pageSize);

  return (
    <div className="m-5 p-6 border-2 border-stone-200 rounded-md shadow-xl bg-white">
      {/* Display the current graphs */}
      <div className="mb-4 text-center">
        <div
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-6`}
        >
          {currentGraphs.map((graph) => (
            <div key={graph.id} className="flex flex-col items-center">
              <h2 className="text-lg md:text-xl mb-4 font-bold text-center">
                {graph.title}
              </h2>
              <div className="w-full max-w-xs md:max-w-md">
                {graph.component}
              </div>
            </div>
          ))}
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
        <div className="flex items-center justify-center text-sm md:text-base">
          Page {currentPage + 1} of {totalPages}
        </div>
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
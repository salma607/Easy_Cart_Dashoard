import { useEffect, useState } from "react";
import Bar from "./GraphsComponent/Bar";
import Line from "./GraphsComponent/line";
import Radar from "./GraphsComponent/Radar/Radar";
import Scatter from "./GraphsComponent/scatter";

export default function Graphs() {
  // Standard chart sizes
  const chartWidth = 350;
  const chartHeight = 300;

  const graphs = [
    { id: 1, component: <Line width={chartWidth} height={chartHeight} />, title: "Product Sales by Category/day", name: "Line Chart" },
    { id: 2, component: <Scatter width={chartWidth} height={chartHeight} />, title: "Electronics Product Analysis", name: "Scatter Plot" },
    { id: 3, component: <Radar width={chartWidth} height={chartHeight} />, title: "Branch Sales Analysis", name: "Radar Chart" },
    { id: 4, component: <Bar width={chartWidth} height={chartHeight} />, title: "Category Data Visualization/month", name: "Bar Chart" },
  ];

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1000
  );
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setCurrentPage(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              {/* Small name at the bottom of each chart */}
              <div className="mt-2 text-xs text-gray-500 font-medium">
                {graph.name}
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
import  { useState } from "react";
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
    <div className="m-5 p-6 border-2 border-stone-200 rounded-md shadow-xl">
      {/* Display the current graphs */}
      <div className="mb-4 text-center">
        {/* Display two graphs at a time */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl mb-2 font-bold">
              {graphs[currentGraphIndex].title}
            </h2>
            {graphs[currentGraphIndex].component}
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">
              {graphs[(currentGraphIndex + 1) % graphs.length].title}
            </h2>
            {graphs[(currentGraphIndex + 1) % graphs.length].component}
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrevious}
          className="px-4 py-2 bg-gray-200 rounded-md shadow hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-200 rounded-md shadow hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
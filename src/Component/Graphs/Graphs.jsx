import { LineChart } from "@mui/x-charts";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { ScatterChart } from "@mui/x-charts/ScatterChart";

const data = [
  {
    id: "data-0",
    x1: 329.39,
    x2: 391.29,
    y1: 443.28,
    y2: 153.9,
  },
  {
    id: "data-1",
    x1: 96.94,
    x2: 139.6,
    y1: 110.5,
    y2: 217.8,
  },
  {
    id: "data-2",
    x1: 336.35,
    x2: 282.34,
    y1: 175.23,
    y2: 286.32,
  },
  {
    id: "data-3",
    x1: 159.44,
    x2: 384.85,
    y1: 195.97,
    y2: 325.12,
  },
  {
    id: "data-4",
    x1: 188.86,
    x2: 182.27,
    y1: 351.77,
    y2: 144.58,
  },
  {
    id: "data-5",
    x1: 143.86,
    x2: 360.22,
    y1: 43.253,
    y2: 146.51,
  },
  {
    id: "data-6",
    x1: 202.02,
    x2: 209.5,
    y1: 376.34,
    y2: 309.69,
  },
  {
    id: "data-7",
    x1: 384.41,
    x2: 258.93,
    y1: 31.514,
    y2: 236.38,
  },
  {
    id: "data-8",
    x1: 256.76,
    x2: 70.571,
    y1: 231.31,
    y2: 440.72,
  },
  {
    id: "data-9",
    x1: 143.79,
    x2: 419.02,
    y1: 108.04,
    y2: 20.29,
  },
];

export default function Graphs() {
  return (
    <div className=" m-5 p-6 grid lg:grid-cols-2 grid-cols-1 gap-40 border-2 border-stone-200 rounded-md shadow-xl ">
      <div className="grid grid-cols-1">
        {/* Line Chart */}
        <LineChart
          xAxis={[{ data: [0, 2, 4, 6, 8, 10] }]}
          series={[
            {
              color: "#22c55e",
              data: [2, 4, 4, 6, 1.5, 5],
            },
          ]}
          width={500}
          height={300}
        />
        <p className="text-center text-lg font-semibold mt-2">
          Line Chart
        </p>

        {/* Scatter Chart */}
        <ScatterChart
          width={500}
          height={250}
          series={[
            {
              color: "#7fb833",
              label: "Dairy",
              data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
            },
            {
              color: "#FF0000",
              label: "Fruits&veg",
              data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
            },
            {
              color: "#F7CFD8",
              label: "Bakery",
              data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
            },
          ]}
          grid={{ vertical: true, horizontal: true }}
        />
        <p className="text-center text-lg font-semibold mt-2">
          Scatter Chart
        </p>
      </div>

      <div className="grid grid-cols-1">
        {/* Pie Chart */}
        <PieChart
          series={[
            {
              data: [
                { id: 10, value: 40, label: "fruits", color: "#FF0000" },
                { id: 2, value: 35, label: "dairy", color: "#008000" },
                { id: 0, value: 15, label: "beverages", color: "#FFFF00" },
                { id: 5, value: 20, label: "bakery", color: "#FFA500" },
              ],
            },
          ]}
          width={450}
          height={250}
        />
        <p className="text-center text-lg font-semibold mt-2">
          Pie Chart
        </p>

        {/* Bar Chart */}
        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[
            {
              colorMap: {
                type: "ordinal",
                colors: ["#056b39", "#7fb833", "#16a34a", "#22c55e"],
              },
              data: ["veg", "fruits", "beverages", "Dairy"],
              scaleType: "band",
            },
          ]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
        <p className="text-center text-lg font-semibold mt-2">
          Bar Chart
        </p>
      </div>
    </div>
  );
}
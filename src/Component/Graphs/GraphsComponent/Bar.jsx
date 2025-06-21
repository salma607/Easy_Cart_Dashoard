import { BarChart } from "@mui/x-charts/BarChart";

export default function Bar() {
  // Define months for the X axis
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

  // Categories to display sales for (e.g., Fruits, Vegetables, Dairy, Beverages)
  const categories = [
    { key: "fruits", label: "Fruits", color: "#e53935" },     // Red
    { key: "vegetables", label: "Vegetables", color: "#43a047" }, // Green
    { key: "dairy", label: "Dairy", color: "#fbc02d" },        // Yellow
    { key: "beverages", label: "Beverages", color: "#1e88e5" } // Blue
  ];

  const exampleDataset = [
    { month: "Jan", fruits: 80, vegetables: 50, dairy: 60, beverages: 70 },
    { month: "Feb", fruits: 20, vegetables: 100, dairy: 88, beverages: 50 },
    { month: "Mar", fruits: 100, vegetables: 60, dairy: 40, beverages: 90 },
    { month: "Apr", fruits: 66, vegetables: 53, dairy: 80, beverages: 102 },
    { month: "May", fruits: 10, vegetables: 120, dairy: 30, beverages: 60 },
    { month: "Jun", fruits: 60, vegetables: 100, dairy: 25, beverages: 110 },
    { month: "Jul", fruits: 90, vegetables: 105, dairy: 80, beverages: 20 },
    { month: "Aug", fruits: 100, vegetables: 95, dairy: 70, beverages: 92 },
  ];

  // X axis config for months (categorical)
  const barChartXAxis = [
    {
      id: "months",
      data: months,
      scaleType: "band",
      label: "Month",
    },
  ];

  // Series config: one per category
  const barChartSeries = categories.map(cat => ({
    dataKey: cat.key,
    label: cat.label,
    color: cat.color,
  }));

  return (
    <div className="m-5 p-4">
      <BarChart
        xAxis={barChartXAxis}
        series={barChartSeries}
        dataset={exampleDataset}
        height={Math.min(window.innerWidth * 0.7, 350)}
        width={Math.min(window.innerWidth - 20, 500)}
        margin={{
          top: 40,
          bottom: 40,
          left: 40,
          right: 10,
        }}
      />
    </div>
  );
}
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function Piechart() {
  const [pieChartData, setPieChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPieChartData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No authentication token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://shehab123.pythonanywhere.com/product/statistics/pie_chart/",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          setError("Failed to fetch data. Please try again later.");
          setLoading(false);
          return;
        }

        const data = await response.json();

        setPieChartData(
          data.map((item, index) => ({
            id: item.id,
            value: item.value,
            label: item.label,
            color: getColor(index), // Assign a color based on the index
          }))
        );
        setError(null);
      } catch {
        setError("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPieChartData();
  }, []);

  // Define a function to return colors for the chart
  const getColor = (index) => {
    const colors = [
      "#4CAF50", // Medium Green
      "#81C784", // Light Green
      "#388E3C", // Dark Green
      "#2E7D32", // Rich Green
      "#A5D6A7", // Soft Green
      "#66BB6A", // Vibrant Green
      "#8BC34A", // Lime Green
      "#C8E6C9", // Pale Green
      "#6FBF73", // Mint Green
      "#33691E", // Olive Green
    ];
    return colors[index % colors.length]; // Cycle through the colors
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : pieChartData.length > 0 ? (
        <>
          <PieChart
            series={[
              {
                data: pieChartData,
                colorField: "color", // Use the color field for the slices
              },
            ]}
            width={Math.min(window.innerWidth - 80, 300)} // Adjust width for mobile (max 300px)
            height={Math.min(window.innerWidth - 80, 300)} // Adjust height for mobile (max 300px)
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }} // Reduced margins for compact display
          />
          <p className="text-sm text-center mt-3">
            Product Category Pie Chart
          </p>
        </>
      ) : (
        <p className="text-center text-lg mt-2">No data available</p>
      )}
    </div>
  );
}
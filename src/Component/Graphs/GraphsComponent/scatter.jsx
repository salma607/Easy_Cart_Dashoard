import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { useEffect, useState } from "react";

export default function Scatter() {
  const [chartDimensions, setChartDimensions] = useState({
    height: 300, // Match the height of the Line chart
    width: 380, // Adjusted width for better balance
  });

  useEffect(() => {
    const updateChartDimensions = () => {
      if (window.innerWidth < 600) {
        setChartDimensions({
          height: 300, // Consistent height with Line chart for mobile
          width: Math.min(window.innerWidth - 40, 380), // Adjust width for mobile, with a max of 380px
        });
      } else {
        setChartDimensions({
          height: 300, // Consistent height with Line chart
          width: 380, // Adjusted width for desktop
        });
      }
    };

    // Update dimensions on initial render and window resize
    updateChartDimensions();
    window.addEventListener("resize", updateChartDimensions);

    return () => {
      window.removeEventListener("resize", updateChartDimensions);
    };
  }, []);

  const chartSetting = {
    yAxis: [
      {
        label: "Rating",
        width: 50, // Reduced width for the y-axis to match Line chart
        min: 0,
        max: 5,
        labelFontSize: "12px", // Match the font size of Line chart
        tickFontSize: "10px", // Match the tick font size of Line chart
      },
    ],
    xAxis: [
      {
        label: "Price / Reviews",
        labelFontSize: "12px", // Match the font size of Line chart
        tickFontSize: "10px", // Match the tick font size of Line chart
      },
    ],
    ...chartDimensions, // Dynamically set height and width
    margin: {
      top: 10,
      right: 10,
      bottom: 50, // Match the bottom margin of Line chart
      left: 50, // Match the left margin of Line chart
    },
    legend: {
      position: "bottom", // Position legend at the bottom to match visual balance
      fontSize: "12px", // Match the font size of Line chart
      spacing: 5, // Adjust spacing between legend items
    },
  };

  return (
    <ScatterChart
      dataset={dataset}
      series={[
        {
          datasetKeys: { id: "product", x: "price", y: "rating" },
          label: "Product Ratings",
          color: "#4CAF50", // Medium Green
        },
        {
          datasetKeys: { id: "product", x: "reviews", y: "rating" },
          label: "Product Reviews",
          color: "#FF5722", // Vibrant Red
        },
      ]}
      {...chartSetting}
    />
  );
}

const dataset = [
  { product: "Laptop", price: 1200, rating: 4.5, reviews: 250 },
  { product: "Smartphone", price: 800, rating: 2.8, reviews: 400 },
  { product: "Tablet", price: 600, rating: 3.3, reviews: 150 },
  { product: "Headphones", price: 150, rating: 4.7, reviews: 500 },
  { product: "Smartwatch", price: 1200, rating: 1.6, reviews: 350 },
  { product: "Camera", price: 700, rating: 2.4, reviews: 120 },
  { product: "Gaming Console", price: 500, rating: 3.8, reviews: 300 },
  { product: "Monitor", price: 250, rating: 2.6, reviews: 200 },
  { product: "Keyboard", price: 100, rating: 1.5, reviews: 300 },
  { product: "Mouse", price: 50, rating: 2.7, reviews: 400 },
  { product: "Speaker", price: 1200, rating: 3.4, reviews: 180 },
  { product: "Router", price: 120, rating: 1.2, reviews: 80 },
  { product: "Charger", price: 30, rating: 4.3, reviews: 70 },
  { product: "Power Bank", price: 1000, rating: 5, reviews: 90 },
  { product: "External Drive", price: 100, rating: 2.6, reviews: 110 },
  { product: "Webcam", price: 80, rating: 1.5, reviews: 60 },
  { product: "Docking Station", price: 150, rating: 2.7, reviews: 95 },
  { product: "Microphone", price: 1000, rating: 3.8, reviews: 130 },
  { product: "VR Headset", price: 400, rating: 4, reviews: 220 },
];
import { useState, useEffect } from "react";
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

const dataset = [
  { product: "Laptop", price: 1200, rating: 4.5 },
  { product: "Smartphone", price: 800, rating: 2.8 },
  { product: "Tablet", price: 600, rating: 3.3 },
  { product: "Headphones", price: 150, rating: 4.7 },
  { product: "Smartwatch", price: 1200, rating: 1.6 },
  { product: "Camera", price: 700, rating: 2.4 },
  { product: "Gaming Console", price: 500, rating: 3.8 },
  { product: "Monitor", price: 250, rating: 2.6 },
  { product: "Keyboard", price: 100, rating: 1.5 },
  { product: "Mouse", price: 50, rating: 2.7 },
  { product: "Speaker", price: 1200, rating: 3.4 },
  { product: "Router", price: 120, rating: 1.2 },
  { product: "Charger", price: 30, rating: 4.3 },
  { product: "Power Bank", price: 1000, rating: 5 },
  { product: "External Drive", price: 100, rating: 2.6 },
  { product: "Webcam", price: 80, rating: 1.5 },
  { product: "Docking Station", price: 150, rating: 2.7 },
  { product: "Microphone", price: 1000, rating: 3.8 },
  { product: "VR Headset", price: 400, rating: 4 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const p = payload[0].payload;
    return (
      <div style={{ background: "white", border: "1px solid #ccc", padding: 8 }}>
        <strong>{p.product}</strong> ({p.price}, {p.rating})
      </div>
    );
  }
  return null;
};

export default function ScatterResponsive() {
  const [chartSize, setChartSize] = useState({
    width: typeof window !== "undefined" && window.innerWidth < 760 ? 280 : 400,
    height: typeof window !== "undefined" && window.innerWidth < 760 ? 200 : 300,
  });

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 760;
      setChartSize({
        width: isMobile ? 300 : 400,
        height: isMobile ? 220 : 300,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScatterChart
      width={chartSize.width}
      height={chartSize.height}
      margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
    >
      <CartesianGrid />
      <XAxis type="number" dataKey="price" name="Price" label={{ value: "Price ($)", position: "bottom", fontSize: 12 }} />
      <YAxis type="number" dataKey="rating" name="Rating" label={{ value: "Rating", angle: -90, position: "left", fontSize: 12 }} domain={[0, 5]} />
      <Tooltip content={<CustomTooltip />} />
      <Legend verticalAlign="top" />
      <Scatter name="Price vs Rating" data={dataset} fill="#76ab2f" />
    </ScatterChart>
  );
}
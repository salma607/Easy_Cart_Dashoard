import { LineChart } from '@mui/x-charts/LineChart';

export default function Line() {
  return (
    <LineChart
      xAxis={[
        {
          data: [
            'Dairy', 'Bakery', 'Meat & Chicken', 'Beverages','Fruits', 'Vegetables','Healthcare', 'Electronics',
          ],
          scaleType: 'band', // Use categorical (band) scale for categories
        },
      ]}
      series={[
        {
          data: [15, 30, 50, 20, 40, 10,25,80], // Data for each category
          color: '#76ab2f', // Set the color for the graph
        },
      ]}
      height={300}
      margin={{ bottom: 50 }}
    />
  );
}
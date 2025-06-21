import { RadarChart } from '@mui/x-charts/RadarChart';

// Example data for supermarket branches
function valueFormatter(v) {
  if (v === null) {
    return 'NaN';
  }
  return `${v.toLocaleString()} sales`;
}

export default function Radar() {
  return (
    <RadarChart
      width="420"
      height="380"
      series={[
        { label: 'Nasr City', data: [134, 67, 112, 83, 97, 56], valueFormatter },
        { label: 'Heliopolis', data: [89, 123, 58, 104, 77, 115], valueFormatter },
        { label: 'Shoubra', data: [102, 95, 120, 62, 95, 91], valueFormatter },
        { label: 'New Cairo', data: [76, 109, 102, 99, 112, 72], valueFormatter },
        { label: 'El Rehab', data: [128, 78, 86, 127, 60, 101], valueFormatter },
      ]}
      radar={{
        metrics: [
          'Fruits',
          'Vegetables',
          'Dairy',
          'Bakery',
          'Meat',
          'Beverages'
        ],
      }}
    />
  );
}
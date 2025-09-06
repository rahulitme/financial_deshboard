import React from 'react';
import { Chart as ChartJS, BarElement, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

ChartJS.register(BarElement, LineElement, CategoryScale, LinearScale, PointElement);

export default function SIPBusinessChart({ data, loading }) {
  if (loading) return <div className="h-48 flex items-center justify-center">Loading...</div>;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 my-4">
      <div className="font-bold mb-2">SIP Business</div>
      <Bar data={data.bar} />
      <Line data={data.line} />
    </div>
  );
}

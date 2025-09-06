import React from 'react';
import { Line } from 'react-chartjs-2';

export default function MonthlyMISChart({ data, loading }) {
  if (loading) return <div className="h-48 flex items-center justify-center">Loading...</div>;
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 my-4">
      <div className="font-bold mb-2">Monthly MIS</div>
      <Line data={data} />
    </div>
  );
}

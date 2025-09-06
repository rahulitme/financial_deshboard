import React from 'react';

const stats = [
  { label: 'Purchases', key: 'purchases' },
  { label: 'Redemptions', key: 'redemptions' },
  { label: 'Rejected Transactions', key: 'rejected' },
  { label: 'SIP Rejections', key: 'sipRejected' },
  { label: 'New SIP', key: 'newSip' },
];

export default function StatCards({ data }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-4">
      {stats.map(stat => (
        <div key={stat.key} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center">
          <div className="text-sm font-medium">{stat.label}</div>
          <div className="text-xl font-bold">{data[stat.key]}</div>
        </div>
      ))}
    </div>
  );
}

import React from 'react';

export default function MainCards({ aum, sip, onViewReport }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
        <div className="text-lg font-bold">AUM</div>
        <div className="text-2xl font-semibold">{aum.value}</div>
        <div className="text-sm text-green-600">MoM: {aum.mom}%</div>
        <button onClick={() => onViewReport('aum')} className="mt-4 px-3 py-1 bg-blue-600 text-white rounded">View Report</button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col">
        <div className="text-lg font-bold">SIP</div>
        <div className="text-2xl font-semibold">{sip.value}</div>
        <div className="text-sm text-green-600">MoM: {sip.mom}%</div>
        <button onClick={() => onViewReport('sip')} className="mt-4 px-3 py-1 bg-blue-600 text-white rounded">View Report</button>
      </div>
    </div>
  );
}

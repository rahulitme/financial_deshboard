import React from 'react';

const ranges = [3, 7, 10, 30];

export default function FilterBar({ selected, onSelect }) {
  return (
    <div className="flex gap-2 my-4">
      {ranges.map(range => (
        <button
          key={range}
          onClick={() => onSelect(range)}
          className={`px-3 py-1 rounded ${selected === range ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
        >
          {range} Days
        </button>
      ))}
    </div>
  );
}

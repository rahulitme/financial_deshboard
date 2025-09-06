import React from 'react';

export default function PDFButton({ onClick }) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-green-600 text-white rounded shadow mt-4">Download PDF</button>
  );
}

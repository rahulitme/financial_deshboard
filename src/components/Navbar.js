import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const menuItems = [
  'HOME', 'CRM', 'UTILITIES', 'INSURANCE *', 'ASSETS *', 'MUTUAL', 'RESEARCH', 'TRANSACT ONLINE', 'GOAL GPS', 'FINANCIAL PLANNING', 'WEALTH REPORT', 'OTHER *'
];

function TopHeader() {
  return (
    <div className="w-full flex items-center justify-between px-8 py-2 bg-white border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2 min-w-[160px]">
        <img src="/logo.svg" alt="Wealth Elite" className="h-8 w-auto" />
        <span className="font-bold text-lg text-green-700">Wealth Elite</span>
        <span className="text-xs text-gray-500 ml-1">INVESTMENT MADE SIMPLE</span>
      </div>
      {/* Search Bar */}
      <div className="flex-1 flex justify-center">
        <input type="text" placeholder="ex.Live portfolio" className="w-80 px-3 py-1 border rounded" />
        <button className="ml-2 px-2 py-1 bg-gray-200 rounded">🔍</button>
      </div>
      {/* Icons and Logout */}
      <div className="flex items-center gap-3">
        {/* Replace with SVGs for production */}
        <span title="Cart">🛒</span>
        <span title="Idea">💡</span>
        <span title="Notification">🔔</span>
        <span title="Star">⭐</span>
        <span title="Users">👥</span>
        <span title="Search">🔍</span>
        <span title="Lock">🔒</span>
        <span title="Folder">📁</span>
        <span title="Chat">💬</span>
        <span title="Chart">📊</span>
        <span title="Clipboard">📋</span>
        <span className="ml-2 font-semibold text-gray-700 cursor-pointer">LOGOUT</span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div>
      <TopHeader />
      <nav className="w-full flex items-center px-0 py-0 bg-red-600">
        <div className="flex gap-4 px-8 py-2 w-full overflow-x-auto">
          {menuItems.map(item => (
            <span key={item} className="text-sm font-semibold text-white cursor-pointer hover:underline whitespace-nowrap">{item}</span>
          ))}
          <button onClick={() => setDarkMode(!darkMode)} className="ml-auto px-2 py-1 rounded bg-white text-red-600 text-xs">
            {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </nav>
    </div>
  );
}

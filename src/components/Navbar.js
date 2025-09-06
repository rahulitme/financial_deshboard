import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';

const menuItems = [
  'HOME', 'CRM', 'UTILITIES', 'INSURANCE *', 'ASSETS *', 'MUTUAL',
  'RESEARCH', 'TRANSACT ONLINE', 'GOAL GPS', 'FINANCIAL PLANNING',
  'WEALTH REPORT', 'OTHER *'
];

export function TopHeader() {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center gap-2 min-w-[180px]">
        <img src="image.png" alt="Wealth Elite" className="h-10 w-auto" />
        <div className="flex flex-col ml-2">
          <span className="font-bold text-lg text-green-700 leading-tight">Wealth Elite</span>
          <span className="text-xs text-gray-500">INVESTMENT MADE SIMPLE</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center w-full max-w-lg bg-gray-50 border border-gray-300 rounded-lg px-3 py-1 shadow">
          <input
            type="text"
            placeholder="ex.Live portfolio"
            className="flex-1 px-2 py-2 bg-transparent outline-none text-gray-800 text-sm"
          />
          <button className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700">🔍</button>
        </div>
      </div>

      {/* Icons + Logout */}
      <div className="flex items-center gap-3 text-lg">
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

export function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <nav className="w-full flex items-center bg-red-600">
      <div className="flex gap-6 px-6 py-3 w-full overflow-x-auto">
        {menuItems.map(item => (
          <span
            key={item}
            className="text-xs sm:text-sm font-semibold text-white cursor-pointer hover:underline whitespace-nowrap"
          >
            {item}
          </span>
        ))}
        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-auto px-3 py-1 rounded bg-white text-red-600 text-xs shadow"
        >
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </nav>
  );
}



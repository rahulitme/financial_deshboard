"use client"

import { useContext, useState } from "react"
import { DarkModeContext } from "../context/DarkModeContext"

const menuItems = [
  "HOME",
  "CRM",
  "UTILITIES",
  "INSURANCE *",
  "ASSETS *",
  "MUTUAL",
  "RESEARCH",
  "TRANSACT ONLINE",
  "GOAL GPS",
  "FINANCIAL PLANNING",
  "WEALTH REPORT",
  "OTHER *",
]

export function TopHeader() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-3 bg-white border-b border-gray-200 shadow-sm gap-3 sm:gap-0">
      {/* Logo Section */}
      <div className="flex items-center gap-2 min-w-0 sm:min-w-[180px]">
        <img src="image.png" alt="Wealth Elite" className="h-8 sm:h-10 w-auto flex-shrink-0" />
        <div className="flex flex-col ml-2 min-w-0">
          <span className="font-bold text-base sm:text-lg text-green-700 leading-tight truncate">Wealth Elite</span>
          <span className="text-xs text-gray-500 hidden sm:block">INVESTMENT MADE SIMPLE</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full sm:flex-1 sm:flex sm:justify-center order-3 sm:order-2">
        <div className="flex items-center w-full sm:max-w-lg bg-gray-50 border border-gray-300 rounded-lg px-3 py-1 shadow">
          <input
            type="text"
            placeholder="ex.Live portfolio"
            className="flex-1 px-2 py-2 bg-transparent outline-none text-gray-800 text-sm"
          />
          <button className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-700">🔍</button>
        </div>
      </div>

      {/* Icons + Logout - Mobile: Show only essential icons */}
      <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg order-2 sm:order-3">
        <span title="Notification" className="cursor-pointer">
          🔔
        </span>
        <span title="Chat" className="cursor-pointer">
          💬
        </span>
        <span title="Users" className="cursor-pointer">
          👥
        </span>

        {/* Hidden on mobile, visible on larger screens */}
        <span title="Cart" className="cursor-pointer hidden sm:inline">
          🛒
        </span>
        <span title="Idea" className="cursor-pointer hidden sm:inline">
          💡
        </span>
        <span title="Star" className="cursor-pointer hidden sm:inline">
          ⭐
        </span>
        <span title="Search" className="cursor-pointer hidden sm:inline">
          🔍
        </span>
        <span title="Lock" className="cursor-pointer hidden sm:inline">
          🔒
        </span>
        <span title="Folder" className="cursor-pointer hidden sm:inline">
          📁
        </span>
        <span title="Chart" className="cursor-pointer hidden sm:inline">
          📊
        </span>
        <span title="Clipboard" className="cursor-pointer hidden sm:inline">
          📋
        </span>

        <span className="ml-2 font-semibold text-gray-700 cursor-pointer text-sm sm:text-base">LOGOUT</span>
      </div>
    </div>
  )
}

export function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-red-600">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Mobile hamburger button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="sm:hidden text-white text-xl">
          ☰
        </button>

        {/* Desktop navigation */}
        <div className="hidden sm:flex gap-6 flex-1 overflow-x-auto">
          {menuItems.map((item) => (
            <span
              key={item}
              className="text-xs sm:text-sm font-semibold text-white cursor-pointer hover:underline whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded bg-white text-red-600 text-xs shadow ml-auto sm:ml-0"
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-red-700 border-t border-red-500">
          <div className="flex flex-col px-4 py-2 max-h-60 overflow-y-auto">
            {menuItems.map((item) => (
              <span
                key={item}
                className="text-sm font-semibold text-white cursor-pointer hover:bg-red-600 py-2 px-2 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

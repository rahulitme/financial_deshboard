"use client"

import { useState, useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext"
import ClientsBubbleChart from "../../charts/ClientsBubbleChart"
import SIPBusinessChart from "../../charts/SIPBusinessChart"
import MonthlyMISChart from "../../charts/MonthlyMISChart"

// Dummy icons and logo
const Logo = () => (
  <div className="flex items-center gap-2">
    <span className="font-bold text-sm md:text-lg text-green-700">Wealth Elite</span>
    <span className="text-xs text-gray-500 hidden sm:block">INVESTMENT MADE SIMPLE</span>
  </div>
)

const navItems = [
  "HOME",
  "CRM",
  "UTILITIES",
  "INSURANCE",
  "ASSETS",
  "MUTUAL",
  "RESEARCH",
  "TRANSACT ONLINE",
  "GOAL GPS",
  "FINANCIAL PLANNING",
  "WEALTH REPORT",
  "OTHER",
]

export default function Dashboard() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)
  const [range, setRange] = useState(3)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({})
  const [aum, setAum] = useState({ value: "12.19", mom: 0.77 })
  const [sip, setSip] = useState({ value: "1.39", mom: 0 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Chart sample data
  const clientsBubbleData = {
    datasets: [
      {
        label: "Clients",
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 10, r: 10 },
          { x: 20, y: 30, r: 20 },
        ],
        backgroundColor: ["rgba(54, 162, 235, 0.5)", "rgba(255, 99, 132, 0.5)", "rgba(255, 206, 86, 0.5)"],
      },
    ],
  }

  const sipBusinessData = {
    bar: {
      labels: ["Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "SIP Bar",
          data: [2.4, 1.8, 2.1, 2.0],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    },
    line: {
      labels: ["Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "SIP Line",
          data: [2.0, 2.2, 2.3, 2.1],
          borderColor: "rgba(54, 162, 235, 1)",
          fill: false,
        },
      ],
    },
  }

  const monthlyMISData = {
    labels: ["Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "MIS 1",
        data: [0.2, 0.4, 0.6, 0.5],
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
      {
        label: "MIS 2",
        data: [0.3, 0.2, 0.5, 0.4],
        borderColor: "rgba(54, 162, 235, 1)",
        fill: false,
      },
      {
        label: "MIS 3",
        data: [0.1, 0.3, 0.4, 0.6],
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  }

  // Dummy stat data
  const statCards = [
    { label: "Purchases", value: 0, amount: "0.00 INR", icon: "💳" },
    { label: "Redemptions", value: 0, amount: "0.00 INR", icon: "🧾" },
    { label: "Rej. Transactions", value: 0, amount: "0.00 INR", icon: "❌" },
    { label: "SIP Rejections", value: 0, amount: "0.00 INR", icon: "🚫" },
    { label: "New SIP", value: 0, amount: "0.00 INR", icon: "📈" },
  ]

  return (
    <div className={darkMode ? "min-h-screen bg-gray-900 dark" : "min-h-screen bg-white"}>
      {/* Top Nav */}
      <header className="w-full bg-red-600 text-white px-4 md:px-6 py-2">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-2 xl:gap-4 overflow-x-auto">
            {navItems.map((item) => (
              <span key={item} className="font-semibold text-xs cursor-pointer hover:underline whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span className="text-xl">☰</span>
          </button>

          {/* User Actions */}
          <div className="flex items-center gap-1 md:gap-2">
            <span className="hidden sm:inline">🔍</span>
            <span className="hidden sm:inline">🔔</span>
            <span>👤</span>
            <button
              className="ml-1 md:ml-2 px-2 py-1 rounded bg-white text-red-600 text-xs"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light" : "Dark"}
            </button>
            <span className="ml-1 md:ml-2 text-xs hidden sm:inline">LOGOUT</span>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 pb-2 border-t border-red-500">
            <div className="grid grid-cols-2 gap-2 mt-2">
              {navItems.map((item) => (
                <span key={item} className="font-semibold text-xs cursor-pointer hover:underline p-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 px-4 md:px-6 mt-4 md:mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6 flex flex-col border border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Current</span>
            <button className="bg-red-500 text-white px-2 md:px-3 py-1 rounded text-xs">View Report</button>
          </div>
          <div className="text-2xl md:text-3xl font-bold mt-2">
            AUM {aum.value} <span className="text-base font-normal text-gray-500">Cr</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
            <span className="text-green-600 font-semibold text-sm">▲ +{aum.mom}% MoM</span>
            <button className="text-blue-600 text-xs">View Trend {">"}</button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6 flex flex-col border border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Current</span>
            <button className="bg-red-500 text-white px-2 md:px-3 py-1 rounded text-xs">View Report</button>
          </div>
          <div className="text-2xl md:text-3xl font-bold mt-2">
            SIP {sip.value} <span className="text-base font-normal text-gray-500">Lakh</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
            <span className="text-green-600 font-semibold text-sm">▲ +{sip.mom}% MoM</span>
            <button className="text-blue-600 text-xs">View Trend {">"}</button>
          </div>
        </div>
      </div>

      {/* Filter Bar & Stat Cards */}
      <div className="px-4 md:px-6 mt-4 md:mt-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {[3, 7, 10, 30].map((day) => (
            <button
              key={day}
              onClick={() => setRange(day)}
              className={`px-3 md:px-4 py-1 rounded font-semibold text-xs border ${range === day ? "bg-red-500 text-white" : "bg-white text-red-500 border-red-500"}`}
            >
              {day} Days
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-3 md:p-4 flex flex-col items-center border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl md:text-2xl">{card.icon}</span>
                <span className="text-xs text-gray-500 text-center">{card.label}</span>
              </div>
              <div className="text-lg md:text-xl font-bold">{card.value}</div>
              <div className="text-xs text-gray-500 text-center">{card.amount}</div>
              <button className="mt-2 bg-red-500 text-white px-2 py-1 rounded text-xs">View Report</button>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6 mt-4 md:mt-6 mb-6 md:mb-10">
        {/* Clients Bubble Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-3 md:p-4 border border-gray-200 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
            <span className="font-bold text-sm md:text-base">CLIENTS</span>
            <button className="bg-red-500 text-white px-2 md:px-3 py-1 rounded text-xs self-start sm:self-auto">
              Download Report
            </button>
          </div>
          <div className="flex justify-center items-center h-32 md:h-40">
            <div className="w-full h-full">
              <ClientsBubbleChart data={clientsBubbleData} loading={false} />
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2 text-xs flex-wrap">
            <span className="text-green-500">Online</span>
            <span className="text-red-500">New</span>
            <span className="text-orange-500">Active</span>
            <span className="text-gray-400">InActive</span>
          </div>
        </div>

        {/* SIP Business Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-3 md:p-4 border border-gray-200 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
            <span className="font-bold text-sm md:text-base">SIP BUSINESS CHART</span>
            <button className="bg-red-500 text-white px-2 md:px-3 py-1 rounded text-xs self-start sm:self-auto">
              View Report
            </button>
          </div>
          <div className="flex justify-center items-center h-32 md:h-40">
            <div className="w-full h-full">
              <SIPBusinessChart data={sipBusinessData} loading={false} />
            </div>
          </div>
        </div>

        {/* Monthly MIS Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-3 md:p-4 border border-gray-200 flex flex-col lg:col-span-2 xl:col-span-1">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-2">
            <span className="font-bold text-sm md:text-base">MONTHLY MIS</span>
            <button className="bg-red-500 text-white px-2 md:px-3 py-1 rounded text-xs self-start sm:self-auto">
              View Report
            </button>
          </div>
          <div className="flex justify-center items-center h-32 md:h-40">
            <div className="w-full h-full">
              <MonthlyMISChart data={monthlyMISData} loading={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

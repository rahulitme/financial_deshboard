import React, { useState, useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import ClientsBubbleChart from '../../charts/ClientsBubbleChart';
import SIPBusinessChart from '../../charts/SIPBusinessChart';
import MonthlyMISChart from '../../charts/MonthlyMISChart';

// Dummy icons and logo
const Logo = () => (
  <div className="flex items-center gap-2">
    <span className="font-bold text-lg text-green-700">Wealth Elite</span>
    <span className="text-xs text-gray-500">INVESTMENT MADE SIMPLE</span>
  </div>
);

const navItems = [
  'HOME', 'CRM', 'UTILITIES', 'INSURANCE', 'ASSETS', 'MUTUAL', 'RESEARCH', 'TRANSACT ONLINE', 'GOAL GPS', 'FINANCIAL PLANNING', 'WEALTH REPORT', 'OTHER'
];

export default function Dashboard() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [range, setRange] = useState(3);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [aum, setAum] = useState({ value: '12.19', mom: 0.77 });
  const [sip, setSip] = useState({ value: '1.39', mom: 0 });
  // Chart sample data
  const clientsBubbleData = {
    datasets: [
      {
        label: 'Clients',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 10, r: 10 },
          { x: 20, y: 30, r: 20 },
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 99, 132, 0.5)',
          'rgba(255, 206, 86, 0.5)'
        ],
      },
    ],
  };

  const sipBusinessData = {
    bar: {
      labels: ['Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'SIP Bar',
          data: [2.4, 1.8, 2.1, 2.0],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
    line: {
      labels: ['Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'SIP Line',
          data: [2.0, 2.2, 2.3, 2.1],
          borderColor: 'rgba(54, 162, 235, 1)',
          fill: false,
        },
      ],
    },
  };

  const monthlyMISData = {
    labels: ['Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'MIS 1',
        data: [0.2, 0.4, 0.6, 0.5],
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
      {
        label: 'MIS 2',
        data: [0.3, 0.2, 0.5, 0.4],
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
      {
        label: 'MIS 3',
        data: [0.1, 0.3, 0.4, 0.6],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  // Removed local darkMode effect, now handled globally

  // Dummy stat data
  const statCards = [
    { label: 'Purchases', value: 0, amount: '0.00 INR', icon: '💳' },
    { label: 'Redemptions', value: 0, amount: '0.00 INR', icon: '🧾' },
    { label: 'Rej. Transactions', value: 0, amount: '0.00 INR', icon: '❌' },
    { label: 'SIP Rejections', value: 0, amount: '0.00 INR', icon: '🚫' },
    { label: 'New SIP', value: 0, amount: '0.00 INR', icon: '📈' },
  ];

  return (
    <div className={darkMode ? 'min-h-screen bg-gray-900 dark' : 'min-h-screen bg-white'}>
      {/* Top Nav */}
      <header className="w-full bg-red-600 text-white flex items-center px-6 py-2 justify-between">
        <Logo />
        <div className="flex gap-4">
          {navItems.map(item => (
            <span key={item} className="font-semibold text-xs cursor-pointer hover:underline">{item}</span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {/* Dummy icons */}
          <span>🔍</span>
          <span>🔔</span>
          <span>👤</span>
          <button className="ml-2 px-2 py-1 rounded bg-white text-red-600 text-xs" onClick={() => setDarkMode(!darkMode)}>{darkMode ? 'Light' : 'Dark'} Mode</button>
          <span className="ml-2">LOGOUT</span>
        </div>
      </header>

      {/* Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 mt-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col border border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Current</span>
            <button className="bg-red-500 text-white px-3 py-1 rounded text-xs">View Report</button>
          </div>
          <div className="text-3xl font-bold mt-2">AUM {aum.value} <span className="text-base font-normal text-gray-500">Cr</span></div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-600 font-semibold">▲ +{aum.mom}% MoM</span>
            <button className="text-blue-600 text-xs ml-2">View Trend {'>'}</button>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col border border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Current</span>
            <button className="bg-red-500 text-white px-3 py-1 rounded text-xs">View Report</button>
          </div>
          <div className="text-3xl font-bold mt-2">SIP {sip.value} <span className="text-base font-normal text-gray-500">Lakh</span></div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-green-600 font-semibold">▲ +{sip.mom}% MoM</span>
            <button className="text-blue-600 text-xs ml-2">View Trend {'>'}</button>
          </div>
        </div>
      </div>

      {/* Filter Bar & Stat Cards */}
      <div className="px-6 mt-6">
        <div className="flex gap-2 mb-4">
          {[3,7,10,30].map(day => (
            <button key={day} onClick={()=>setRange(day)} className={`px-4 py-1 rounded font-semibold text-xs border ${range===day?'bg-red-500 text-white':'bg-white text-red-500 border-red-500'}`}>{day} Days</button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {statCards.map(card => (
            <div key={card.label} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{card.icon}</span>
                <span className="text-xs text-gray-500">{card.label}</span>
              </div>
              <div className="text-xl font-bold">{card.value}</div>
              <div className="text-xs text-gray-500">{card.amount}</div>
              <button className="mt-2 bg-red-500 text-white px-2 py-1 rounded text-xs">View Report</button>
            </div>
          ))}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-6 mb-10">
        {/* Clients Bubble Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-200 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">CLIENTS</span>
            <button className="bg-red-500 text-white px-3 py-1 rounded text-xs">Download Report</button>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="w-full h-full">
              <ClientsBubbleChart data={clientsBubbleData} loading={false} />
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2 text-xs">
            <span className="text-green-500">Online</span>
            <span className="text-red-500">New</span>
            <span className="text-orange-500">Active</span>
            <span className="text-gray-400">InActive</span>
          </div>
        </div>

        {/* SIP Business Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-200 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">SIP BUSINESS CHART</span>
            <button className="bg-red-500 text-white px-3 py-1 rounded text-xs">View Report</button>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="w-full h-full">
              <SIPBusinessChart data={sipBusinessData} loading={false} />
            </div>
          </div>
        </div>

        {/* Monthly MIS Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-200 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold">MONTHLY MIS</span>
            <button className="bg-red-500 text-white px-3 py-1 rounded text-xs">View Report</button>
          </div>
          <div className="flex justify-center items-center h-40">
            <div className="w-full h-full">
              <MonthlyMISChart data={monthlyMISData} loading={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

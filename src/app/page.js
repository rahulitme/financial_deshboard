"use client";
import React from 'react';
import Dashboard from "./dashboard/page";
import { DarkModeProvider } from "../context/DarkModeContext";
import { TopHeader } from '@/components/Navbar';

export default function Home() {
  return (
    <DarkModeProvider>
      <TopHeader/>
      <Dashboard />
    </DarkModeProvider>
  );
}


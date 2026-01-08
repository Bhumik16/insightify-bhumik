import React from 'react';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="w-64 bg-white border-r">
        <div className="p-4 font-bold text-xl">Insightify</div>
        <nav className="mt-4 p-2 space-y-2">
          <div className="p-2 hover:bg-gray-100 rounded">Dashboard</div>
          {/* Sidebar items would go here */}
        </nav>
      </div>
      <div className="flex-1 overflow-auto">
        <header className="bg-white p-4 border-b flex justify-between">
          <h2 className="font-semibold">Dashboard</h2>
          <div>User Menu</div>
        </header>
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

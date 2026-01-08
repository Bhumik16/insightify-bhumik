import React, { useState } from 'react';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'trends', label: 'Ratings & Trends' },
        { id: 'sentiment', label: 'Sentiment' },
        { id: 'uninstall', label: 'Why Uninstall?' },
        { id: 'features', label: 'Feature Mining' },
        { id: 'alerts', label: 'Alerts' },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar - Simplified */}
            <div className="w-64 bg-white border-r p-4">
                <h1 className="text-xl font-bold mb-8 text-blue-600">Insightify</h1>
                <nav className="space-y-2">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full text-left px-4 py-2 rounded-lg transition ${activeTab === tab.id ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                    <div className="h-px bg-gray-200 my-4" />
                    <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Voice Mentor</button>
                    <button className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Settings</button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto p-8">
                <header className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold capitalize">{activeTab}</h2>
                    <div className="bg-white px-4 py-2 rounded-lg shadow-sm border text-sm">
                        App: <strong>Insightify Demo</strong> (v2.1.0)
                    </div>
                </header>

                {/* Dynamic Content Area */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 min-h-[500px]">
                    {activeTab === 'overview' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="text-gray-500 text-sm mb-2">Total Reviews</h3>
                                <p className="text-3xl font-bold text-blue-900">12,450</p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h3 className="text-gray-500 text-sm mb-2">Avg Rating</h3>
                                <p className="text-3xl font-bold text-green-900">4.2 ★</p>
                            </div>
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                                <h3 className="text-gray-500 text-sm mb-2">Critical Alerts</h3>
                                <p className="text-3xl font-bold text-red-900">3 New</p>
                            </div>
                        </div>
                    )}

                    {activeTab !== 'overview' && (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            Placeholder for {tabs.find(t => t.id === activeTab)?.label}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

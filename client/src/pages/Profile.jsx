import React, { useState } from 'react';

export default function Profile() {
    const [user, setUser] = useState({
        name: "Demo User",
        email: "demo@insightify.com",
        role: "Admin"
    });

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 w-full max-w-2xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">User Profile</h2>

                <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {user.name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                        <p className="text-gray-500">{user.email}</p>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2 inline-block">
                            {user.role}
                        </span>
                    </div>
                </div>

                <div className="border-t pt-6">
                    <h4 className="text-lg font-semibold mb-4">Saved Analyses</h4>
                    <div className="space-y-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer">
                                <div>
                                    <p className="font-medium text-gray-900">Angry Birds Review Analysis</p>
                                    <p className="text-sm text-gray-500">Jan {10 + i}, 2026</p>
                                </div>
                                <button className="text-blue-600 hover:underline text-sm">View Report</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

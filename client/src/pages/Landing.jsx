import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white p-8">
            <header className="flex justify-between items-center mb-20">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600">
                    Insightify
                </h1>
                <button onClick={() => navigate('/login')} className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-full backdrop-blur-sm transition">
                    Login
                </button>
            </header>

            <main className="max-w-4xl mx-auto text-center">
                <h2 className="text-6xl font-extrabold mb-6 leading-tight">
                    Transform Reviews into <br />
                    <span className="text-blue-400">Actionable Growth</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    AI-powered analytics for your Play Store apps. Detect uninstall reasons, chat with your data, and get retention insights.
                </p>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/30 transition transform hover:scale-105"
                    >
                        Analyze My App
                    </button>
                    <button className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition">
                        View Live Demo
                    </button>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {[
                        { title: 'Why Uninstall?', desc: 'Detect exact reasons like Battery Drain or Login fail.' },
                        { title: 'Voice Mentor', desc: 'Talk to an AI expert about your growth strategy.' },
                        { title: 'Competitor Intel', desc: 'Compare your app vs others and find gaps.' }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition">
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

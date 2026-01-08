import React, { useState } from 'react';

export default function VoiceAgent() {
    const [isListening, setIsListening] = useState(false);

    return (
        <div className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black animate-pulse" />

            <div className="z-10 text-center max-w-2xl px-4">
                <h2 className="text-2xl font-light mb-8 opacity-80">Insightify Voice Mentor</h2>

                {/* Visualizer Placeholder */}
                <div className="h-32 flex items-center justify-center gap-2 mb-12">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`w-2 bg-blue-500 rounded-full transition-all duration-300 ${isListening ? 'h-16 animate-bounce' : 'h-2'}`} />
                    ))}
                </div>

                <button
                    onClick={() => setIsListening(!isListening)}
                    className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${isListening ? 'bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.5)]' : 'bg-blue-600 hover:bg-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.5)]'}`}
                >
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                </button>

                <p className="mt-8 text-lg font-mono text-blue-300">
                    {isListening ? "Listening..." : "Tap to speak with your Growth Mentor"}
                </p>
            </div>
        </div>
    );
}

// client/src/pages/OnBoarding/OnBoarding3.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Target, 
  BarChart3, 
  Bug, 
  MessageSquare,
  ArrowRight,
  ArrowLeft,
  Layout
} from "lucide-react";

const OnBoarding3 = () => {
  const navigate = useNavigate();
  const [workspaceName, setWorkspaceName] = useState("");
  // Multi-select state: Array of selected IDs
  const [selectedGoals, setSelectedGoals] = useState([]);

  const goals = [
    {
      id: "sentiment",
      title: "Track Sentiment",
      desc: "Monitor user happiness & trends.",
      icon: <Target size={28} />,
    },
    {
      id: "bugs",
      title: "Fix Bugs Faster",
      desc: "Prioritize crash reports & issues.",
      icon: <Bug size={28} />,
    },
    {
      id: "reviews",
      title: "Manage Reviews",
      desc: "Reply to user feedback instantly.",
      icon: <MessageSquare size={28} />,
    },
    {
      id: "growth",
      title: "Analyze Growth",
      desc: "Track downloads & retention.",
      icon: <BarChart3 size={28} />,
    },
  ];

  const toggleGoal = (id) => {
    if (selectedGoals.includes(id)) {
      setSelectedGoals(selectedGoals.filter((item) => item !== id));
    } else {
      setSelectedGoals([...selectedGoals, id]);
    }
  };

  const handleFinish = () => {
    // Here you would save the data to your backend
    console.log("Workspace:", workspaceName);
    console.log("Goals:", selectedGoals);
    
    // Navigate to the main app
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Ambience - Green/Blue mix for "Success/Growth" vibe */}
      <div className="absolute top-0 right-0 w-full h-1/2 bg-emerald-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-3xl z-10">
        
        {/* Progress Bar: Step 3 of 3 */}
        <div className="mb-10 max-w-xl mx-auto">
            <div className="flex justify-between items-end text-xs font-medium text-zinc-500 mb-3">
                <span className="text-zinc-300">Step 3 of 3</span>
                <span>Final Setup</span>
            </div>
            <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                {/* 100% Filled */}
                <div className="h-full bg-gradient-to-r from-blue-600 to-emerald-500 w-full rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]"></div>
            </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                One last thing...
            </h1>
            <p className="text-zinc-400 text-lg">
                Name your workspace and tell us what matters most.
            </p>
        </div>

        {/* Form Area */}
        <div className="space-y-8 mb-12">
            
            {/* Input Field for Workspace Name */}
            <div className="max-w-md mx-auto">
                <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2.5 ml-1">
                    Workspace Name
                </label>
                <div className="relative group">
                    <Layout className="absolute left-4 top-3.5 text-zinc-500 group-focus-within:text-blue-500 transition-colors" size={20} />
                    <input 
                        type="text" 
                        value={workspaceName}
                        onChange={(e) => setWorkspaceName(e.target.value)}
                        placeholder="e.g. Acme Corp, Project X"
                        className="w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-zinc-600"
                    />
                </div>
            </div>

            {/* Grid for Goals Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {goals.map((goal) => {
                    const isSelected = selectedGoals.includes(goal.id);
                    return (
                        <div 
                            key={goal.id}
                            onClick={() => toggleGoal(goal.id)}
                            className={`
                                cursor-pointer p-5 rounded-xl border transition-all duration-200 flex items-start gap-4 select-none
                                ${isSelected 
                                    ? "bg-blue-900/20 border-blue-500/50 ring-1 ring-blue-500/50" 
                                    : "bg-zinc-900/30 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700"
                                }
                            `}
                        >
                            <div className={`shrink-0 p-2 rounded-lg ${isSelected ? "bg-blue-500 text-white" : "bg-zinc-800 text-zinc-400"}`}>
                                {goal.icon}
                            </div>
                            <div>
                                <h3 className={`font-semibold text-sm ${isSelected ? "text-white" : "text-zinc-300"}`}>{goal.title}</h3>
                                <p className="text-xs text-zinc-500 mt-1">{goal.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between max-w-xl mx-auto">
            <button 
                onClick={() => navigate("/onboarding/step-2")}
                className="px-6 py-3 rounded-xl text-zinc-500 hover:text-white hover:bg-zinc-900 transition-all text-sm font-medium flex items-center gap-2"
            >
                <ArrowLeft size={16} />
                Back
            </button>

            <button 
                onClick={handleFinish}
                // Button is disabled if no workspace name is entered
                disabled={!workspaceName.trim()}
                className={`
                    group px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2
                    ${workspaceName.trim() 
                        ? "bg-white text-black hover:bg-emerald-400 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                        : "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    }
                `}
            >
                Launch Dashboard
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </div>
    </div>
  );
};

export default OnBoarding3;
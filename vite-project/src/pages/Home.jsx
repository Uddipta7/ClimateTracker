<h1 style={{ color: "red", textAlign: "center" }}>Climate Dashboard Loaded ✅</h1>

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-90"></div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-green-400 mb-4">
          🌍 Climate Tracker
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Join us in the fight against climate change. Our AI-powered platform provides real-time insights and trends to help you understand and take action for a sustainable future.
        </p>
        
        <button 
          onClick={() => navigate("/dashboard")} 
          className="px-6 py-3 bg-green-500 text-gray-900 font-semibold rounded-lg hover:bg-green-400 transition"
        >
          Start Tracking Now →
        </button>
      </motion.div>

      {/* Climate Awareness Section */}
      <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <motion.div 
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-green-300">🔬 Data-Driven Insights</h3>
          <p className="text-gray-300 text-sm mt-2">
            Get AI-powered analysis of climate patterns, emission levels, and environmental impacts.
          </p>
        </motion.div>
        <motion.div 
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-green-300">🌱 Sustainability Actions</h3>
          <p className="text-gray-300 text-sm mt-2">
            Learn how small lifestyle changes can contribute to a greener future.
          </p>
        </motion.div>
        <motion.div 
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-green-300">🤝 Community Collaboration</h3>
          <p className="text-gray-300 text-sm mt-2">
            Connect with researchers, policymakers, and environmentalists worldwide.
          </p>
        </motion.div>
      </div>

      {/* Climate Research & Policy Reports */}
      <div className="relative z-10 mt-12 text-center max-w-3xl">
        <h2 className="text-3xl font-bold text-green-400 mb-4">📑 Climate Research & Policy Reports</h2>
        <ul className="text-gray-300">
          <li><a href="https://wmo.int/publication-series/state-of-global-climate-2024" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">State of Global Climate 2024</a></li>
          <li><a href="https://www.dcceew.gov.au/climate-change/international-climate-action#:~:text=The%20Paris%20Agreement%20aims%20to,increase%20to%201.5%C2%B0C." target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Paris Agreement & Climate Action</a></li>
          <li><a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Sustainable Development Goals (SDGs)</a></li>
        </ul>
      </div>

      {/* Wave Background Effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-[calc(100%+1.3px)] h-[90px]" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,100 C300,50 600,150 1200,100 L1200,120 L0,120 Z" 
            fill="#1a202c"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;

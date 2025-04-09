import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-90"></div>

      {/* About Us Content */}
      <motion.div 
        className="relative z-10 text-center max-w-3xl px-6"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-green-400 mb-4">
          🌍 About Climate Tracker
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          We are committed to empowering individuals and organizations with accurate climate data and insights. Our goal is to make climate awareness accessible and actionable for everyone.
        </p>
      </motion.div>

      {/* Our Mission, Vision, Values */}
      <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <motion.div 
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-green-300">🎯 Our Mission</h3>
          <p className="text-gray-300 text-sm mt-2">
            To provide real-time climate insights and foster global awareness for a sustainable future.
          </p>
        </motion.div>
        <motion.div 
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-green-300">🔭 Our Vision</h3>
          <p className="text-gray-300 text-sm mt-2">
            A world where data-driven solutions inspire climate action at all levels.
          </p>
        </motion.div>
        <motion.div 
          className="p-6 bg-gray-800 rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-xl font-semibold text-green-300">💡 Core Values</h3>
          <p className="text-gray-300 text-sm mt-2">
            Transparency, sustainability, and collaboration are at the heart of what we do.
          </p>
        </motion.div>
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

export default About;

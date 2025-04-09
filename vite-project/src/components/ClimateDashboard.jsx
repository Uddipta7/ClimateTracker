// import React, { useState } from "react";
// import { fetchClimateData } from "../api/ClimateAPI.js";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer ,Legend } from "recharts";
// import { FaSearch } from "react-icons/fa";

// const Dashboard = () => {
//   const [location, setLocation] = useState("");
//   const [climateData, setClimateData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleFetchData = async () => {
//     if (!location.trim()) {
//       setError("❌ Please enter a valid location.");
//       return;
//     }
  
//     setLoading(true);
//     setError("");
  
//     try {
//       const data = await fetchClimateData(location);
//       console.log("Fetched Data:", data);
  
//       // Ensure data has required keys and values
//       if (!data || !data.temperature || !data.humidity) {
//         setError("⚠ No valid climate data found. Try another location.");
//         setClimateData(null);
//       } else {
//         // Convert response into array of objects
//         const formattedData = [
//           {
//             time: "Now",
//             temperature: data.temperature || 0,
//             humidity: data.humidity || 0,
//             co2: data.co2_levels || 0,
//             // sea_level: data.sea_levels || 0,
//             // forest_loss: data.forest_loss || 0,
//             sea_level: data.sea_levels !== undefined ? data.sea_levels : 0,
//     forest_loss: data.forest_loss !== undefined ? data.forest_loss : 0,
//           },
//         ];
  
//         setClimateData(formattedData);
//       }
//     } catch (err) {
//       setError(`❌ ${err.message}`);
//       setClimateData(null);
//     }
  
//     setLoading(false);
//   };
  

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-6">
//       <h1 className="text-4xl font-bold text-green-400 text-center">📊 Climate Data Dashboard</h1>

//       {/* Location Input */}
//       <div className="flex justify-center items-center my-6">
//         <div className="relative">
//           <FaSearch className="absolute left-3 top-3 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Enter city or coordinates (lat, lon)"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="p-3 pl-10 w-80 text-white bg-gray-700 border border-gray-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>
//         <button
//           onClick={handleFetchData}
//           className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
//         >
//           Get Data
//         </button>
//       </div>

//       {/* Error Message */}
//       {error && <p className="text-red-400 text-center mb-4">{error}</p>}

//       {/* Loading Indicator */}
//       {loading && <p className="text-green-400 text-center">🔄 Fetching data...</p>}

//       {/* Climate Trends */}
//       {!loading && climateData.length > 0 ? (
//         <div className="bg-gray-800 p-6 rounded-lg">
//           <h2 className="text-2xl font-bold text-green-400 mb-4">📊 Climate Trends</h2>
//           <ResponsiveContainer width="100%" height={350}>
//   <LineChart data={climateData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
//     {/* Background Grid */}
//     <CartesianGrid strokeDasharray="4 4" stroke="rgba(255, 255, 255, 0.2)" />

//     {/* X and Y Axis Styling */}
//     <XAxis
//       dataKey="time"
//       tick={{ fill: "#9CA3AF", fontSize: 12 }}
//       tickLine={false}
//       axisLine={{ stroke: "rgba(255, 255, 255, 0.4)" }}
//     />
//     <YAxis
//       tick={{ fill: "#9CA3AF", fontSize: 12 }}
//       tickLine={false}
//       axisLine={{ stroke: "rgba(255, 255, 255, 0.4)" }}
//       label={{ value: "Values", angle: -90, position: "insideLeft", fill: "#9CA3AF" }}
//     />

//     {/* Custom Tooltip */}
//     <Tooltip
//       content={({ active, payload }) => {
//         if (active && payload && payload.length) {
//           return (
//             <div className="bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-600">
//               <p className="text-green-400 font-bold">{`Time: ${payload[0].payload.time}`}</p>
//               <p className="text-white">{`🌡 Temperature: ${payload[0].payload.temperature}°C`}</p>
//               <p className="text-yellow-400">{`💧 Humidity: ${payload[0].payload.humidity}%`}</p>
//               <p className="text-red-400">{`🌿 CO₂ Levels: ${payload[0].payload.co2} ppm`}</p>

//             </div>
//           );
//         }
//         return null;
//       }}
//       cursor={{ strokeDasharray: "3 3", stroke: "#ffffff" }}
//     />

//     {/* Line Graphs with Shadow & Gradient */}
//     <defs>
//       <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor="#34D399" stopOpacity={0.8} />
//         <stop offset="100%" stopColor="#34D399" stopOpacity={0.2} />
//       </linearGradient>
//       <linearGradient id="humidityGradient" x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.8} />
//         <stop offset="100%" stopColor="#F59E0B" stopOpacity={0.2} />
//       </linearGradient>
//     </defs>

//     <Line type="monotone" dataKey="temperature" stroke="url(#tempGradient)" strokeWidth={3} dot={{ r: 5, fill: "#34D399" }} />
//     <Line type="monotone" dataKey="humidity" stroke="url(#humidityGradient)" strokeWidth={3} dot={{ r: 5, fill: "#F59E0B" }} />
//     <Line type="monotone" dataKey="co2" stroke="#FF4C4C" strokeWidth={3} dot={{ r: 5, fill: "#FF4C4C" }} />
//     {/* Legend for better clarity */}
//     <Legend wrapperStyle={{ color: "white", paddingTop: 10 }} />
//   </LineChart>
// </ResponsiveContainer>

//         </div>
//       ) : (
//         !loading && <p className="text-gray-400 text-center">📍 Enter a location to get climate data.</p>
//       )}
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { fetchClimateData } from "../api/ClimateAPI.js";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { FaSearch } from "react-icons/fa";

const Dashboard = () => {
  const [location, setLocation] = useState("");
  const [climateData, setClimateData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchData = async () => {
    if (!location.trim()) {
      setError("❌ Please enter a valid location.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const data = await fetchClimateData(location);
      console.log("Fetched Data:", data);

      if (!data || !data.temperature || !data.humidity) {
        setError("⚠ No valid climate data found. Try another location.");
        setClimateData(null);
      } else {
        const formattedData = [
          {
            time: "Now",
            temperature: data.temperature || 0,
            humidity: data.humidity || 0,
            co2: data.co2_levels || 0,
            sea_level: data.sea_levels !== undefined ? data.sea_levels : 0,
            forest_loss: data.forest_loss !== undefined ? data.forest_loss : 0,
          },
        ];
        setClimateData(formattedData);
      }
    } catch (err) {
      setError(`❌ ${err.message}`);
      setClimateData(null);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold text-green-400 text-center">📊 Climate Data Dashboard</h1>
      <div className="flex justify-center items-center my-6">
        <div className="relative">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Enter city or coordinates (lat, lon)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-3 pl-10 w-80 text-white bg-gray-700 border border-gray-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <button
          onClick={handleFetchData}
          className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Get Data
        </button>
      </div>
      {error && <p className="text-red-400 text-center mb-4">{error}</p>}
      {loading && <p className="text-green-400 text-center">🔄 Fetching data...</p>}
      {!loading && climateData.length > 0 ? (
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-400 mb-4">📊 Climate Trends</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={climateData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.3)" />
              <XAxis
                dataKey="time"
                tick={{ fill: "#FBBF24", fontSize: 14, fontWeight: "bold" }}
                tickLine={false}
                axisLine={{ stroke: "rgba(255, 255, 255, 0.5)" }}
              />
              <YAxis
                tick={{ fill: "#FBBF24", fontSize: 14, fontWeight: "bold" }}
                tickLine={false}
                axisLine={{ stroke: "rgba(255, 255, 255, 0.5)" }}
                label={{ value: "Values", angle: -90, position: "insideLeft", fill: "#FBBF24" }}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-black p-4 rounded-lg border border-yellow-400 shadow-md">
                        <p className="text-yellow-400 font-bold">{`Time: ${payload[0].payload.time}`}</p>
                        <p className="text-green-400">🌡 Temperature: {payload[0].payload.temperature}°C</p>
                        <p className="text-blue-400">💧 Humidity: {payload[0].payload.humidity}%</p>
                        <p className="text-red-400">🌿 CO₂ Levels: {payload[0].payload.co2} ppm</p>
                      </div>
                    );
                  }
                  return null;
                }}
                cursor={{ strokeDasharray: "3 3", stroke: "#FBBF24" }}
              />
              <Legend wrapperStyle={{ color: "white", paddingTop: 10 }} />
              <Line type="monotone" dataKey="temperature" stroke="#F59E0B" strokeWidth={3} dot={{ r: 6, fill: "#F59E0B" }} />
              <Line type="monotone" dataKey="humidity" stroke="#3B82F6" strokeWidth={3} dot={{ r: 6, fill: "#3B82F6" }} />
              <Line type="monotone" dataKey="co2" stroke="#EF4444" strokeWidth={3} dot={{ r: 6, fill: "#EF4444" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        !loading && <p className="text-gray-400 text-center">📍 Enter a location to get climate data.</p>
      )}
    </div>
  );
};

export default Dashboard;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ClimateReport = () => {
  const { reportId } = useParams(); // Get report type from URL
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch(`https://api.example.com/climate/${reportId}`); // Replace with real API
        const data = await response.json();
        setReportData(data);
      } catch (error) {
        console.error("Error fetching report:", error);
      }
    };

    fetchReport();
  }, [reportId]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-4">{reportId.replace(/-/g, " ")}</h1>

      {reportData ? (
        <div className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg text-gray-300 mb-4">{reportData.summary}</p>

          {/* Interactive Chart */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={reportData.trends}>
              <XAxis dataKey="year" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4caf50" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-gray-400">Loading report...</p>
      )}
    </div>
  );
};

export default ClimateReport;

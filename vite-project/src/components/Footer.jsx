import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* 🌿 Climate Tracker - Branding */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">Climate Tracker</h2>
          <p className="text-gray-400 mt-2">
            AI-powered insights for a greener tomorrow.
          </p>
        </div>

        {/* 🔗 Useful Links - Unique & Minimal */}
        <div>
          <h3 className="text-xl font-semibold text-green-400">Useful Links</h3>
          <ul className="mt-3 space-y-2">
            <li><Link to="/climate-insights" className="hover:text-green-400">Climate Insights</Link></li>
            <li><Link to="/sustainability-tips" className="hover:text-green-400">Sustainability Tips</Link></li>
            <li><Link to="/reports" className="hover:text-green-400">Reports & Data</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-green-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* 📞 Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold text-green-400">Contact Us</h3>
          <p className="text-gray-400 mt-2">support@climatetracker.com</p>
          <p className="text-gray-400">+1 (234) 567-890</p>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-green-400 text-2xl"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-green-400 text-2xl"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-green-400 text-2xl"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

      </div>

      {/* 📌 Copyright */}
      <div className="text-center text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Climate Tracker. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

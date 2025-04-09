const Navbar = () => {
    return (
      <nav className="bg-gray-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Climate Tracker</h1>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-green-400">Home</a></li>
            <li><a href="/about" className="hover:text-green-400">About Us</a></li>
            <li><a href="/dashboard" className="hover:text-green-400">Dashboard</a></li>
            <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar; // Make sure this line is present!
  
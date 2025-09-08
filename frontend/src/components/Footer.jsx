import { Link } from "react-router-dom"
import award from "../assets/award_icon.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                <img 
                src={award} 
                alt="BIIN Logo"
                className="w-8 h-8 object-contain"  
                
                />
              </div>
              <div>
                <div className="text-xl font-bold">
                  Bangladesh ICT and Innovation Awards
                </div>
                <div className="text-sm text-gray-400">
                  Celebrating Innovation, Empowering Digital Transformation
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Bangladesh ICT & Innovation Awards 2025, hosted by Bangladesh ICT
              & Innovation Network (BIIN), is designed to shape the future of
              Bangladesh’s digital landscape by recognizing and empowering
              visionary individuals, startups, and enterprises whose innovations
              drive long-term transformation and global opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/competition"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Competition
                </Link>
              </li>
              <li>
                <Link
                  to="/guidelines"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Guidelines
                </Link>
              </li>
              <li>
                <Link
                  to="/registration"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@biin.org.bd</p>
              <p>Phone: +8809640 123 701-3</p>
              <p>
                Address: SimpleTree Attalika (Level 19), 134 Gulshan Avenue,
                Dhaka 1212
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; Bangladesh ICT & Innovation Network (BIIN).</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer

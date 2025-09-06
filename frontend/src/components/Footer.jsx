import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <div className="text-xl font-bold">BIIN National ICT Awards</div>
                <div className="text-sm text-gray-400">Recognizing Excellence in ICT Innovation</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              The BIIN National ICT Awards is an annual program recognizing outstanding achievements of individuals,
              students, entrepreneurs, SMEs and organizations in the ICT sector.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/competition" className="text-gray-400 hover:text-white transition-colors">
                  Competition
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className="text-gray-400 hover:text-white transition-colors">
                  Guidelines
                </Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-400 hover:text-white transition-colors">
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@biin.org</p>
              <p>Phone: +880-2-XXXXXXX</p>
              <p>Address: Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BIIN National ICT Awards. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

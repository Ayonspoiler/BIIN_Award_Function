import { Link } from "react-router-dom";
import SelectionTimeline from "../components/SelectionTimeline";
import backgroundImage from "../assets/photo_1.jpeg";

const Home = () => {
  const categories = [
    {
      title: "Consumer",
      code: "HC-C",
      color: "from-cyan-500 to-blue-500",
      icon: "🛍️",
      anchor: "consumer", // Add anchor for navigation
    },
    {
      title: "Inclusions & Community Services",
      code: "HC-ICS",
      color: "from-green-500 to-emerald-500",
      icon: "🤝",
      anchor: "inclusions-community", // Add anchor for navigation
    },
    {
      title: "Industrial",
      code: "HC-I",
      color: "from-yellow-500 to-orange-500",
      icon: "🏭",
      anchor: "industrial", // Add anchor for navigation
    },
    {
      title: "Business Services",
      code: "HC-BS",
      color: "from-purple-500 to-indigo-500",
      icon: "💼",
      anchor: "business-services", // Add anchor for navigation
    },
    {
      title: "Public Sector & Government",
      code: "HC-PSG",
      color: "from-blue-500 to-cyan-500",
      icon: "🏛️",
      anchor: "public-sector", // Add anchor for navigation
    },
    {
      title: "Student",
      code: "HC-S",
      color: "from-red-500 to-pink-500",
      icon: "🎓",
      anchor: "student", // Add anchor for navigation
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Bangladesh ICT and Innovation Awards 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto text-pretty">
              Celebrating Innovation, Empowering Digital Transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/registration"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Register Now
              </Link>
              <Link
                to="/guidelines"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                View Guidelines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Bangladesh ICT & Innovation Awards
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Bangladesh ICT & Innovation Awards 2025, hosted by Bangladesh
                ICT & Innovation Network (BIIN), is designed to shape the future
                of Bangladesh's digital landscape by recognizing and empowering
                visionary individuals, startups, and enterprises whose
                innovations drive long-term transformation and global
                opportunities.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                This year's winners will earn not just national recognition, but
                also the opportunity to represent Bangladesh at the Asia Pacific
                ICT Alliance Awards (APICTA 2025) in Taiwan - the most
                prestigious ICT competition in the region, often hailed as the
                "ICT Oscars of Asia-Pacific."
                <br />
                <br />
                Beyond recognition, the Awards provide a gateway to regional and
                global markets, connecting innovators with investors, partners,
                and industry leaders on the international stage.
              </p>
              <Link
                to="/about"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative w-full h-full">
              <img
                src={backgroundImage}
                alt="ICT Awards"
                className="w-[100%] h-[110%] object-contain rounded-lg ml-4 -mt-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Award Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse categories designed to recognize innovation
              across all sectors of ICT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="card-hover bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div
                  className={`h-32 bg-gradient-to-r ${category.color} flex items-center justify-center`}
                >
                  <span className="text-4xl">{category.icon}</span>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    {category.code}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <Link
                    to={`/competition#${category.anchor}`}
                    className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SelectionTimeline />
        </div>
      </section>
    </div>
  );
};

export default Home;

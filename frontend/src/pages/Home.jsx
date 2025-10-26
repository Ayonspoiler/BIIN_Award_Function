import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SelectionTimeline from "../components/SelectionTimeline";
import chair from "../assets/Home Image/chair 1.jpg"
import image1 from "../assets/Home Image/champ 1.JPG";
import image2 from "../assets/Home Image/champ 2.JPG";
import sp1 from "../assets/Home Image/Home 4.jpg";
import sp2 from "../assets/Home Image/Home 3.jpg";
import image3 from "../assets/Home Image/champ 3.JPG";
import image4 from "../assets/Home Image/champ 4.JPG";
import image5 from "../assets/Home Image/page 2.JPG";
import image6 from "../assets/Home Image/page 5.JPG";
import image7 from "../assets/Home Image/page 7.JPG";
import image8 from "../assets/Home Image/page 8.JPG";
import image9 from "../assets/Home Image/page 9.JPG";
import homepage from "../assets/Home Image/Home 1.jpg";
import chairman from "../assets/Home Image/Chairman 2.JPG"
import moonBhai from "../assets/Home Image/moon bhai.jpg"

const Home = () => {
  const categories = [
    {
      title: "Consumer",
      code: "HC-C",
      color: "from-cyan-500 to-blue-500",
      icon: "🛍️",
      anchor: "consumer",
    },
    {
      title: "Inclusions & Community Services",
      code: "HC-ICS",
      color: "from-green-500 to-emerald-500",
      icon: "🤝",
      anchor: "inclusions-community",
    },
    {
      title: "Industrial",
      code: "HC-I",
      color: "from-yellow-500 to-orange-500",
      icon: "🏭",
      anchor: "industrial",
    },
    {
      title: "Business Services",
      code: "HC-BS",
      color: "from-purple-500 to-indigo-500",
      icon: "💼",
      anchor: "business-services",
    },
    {
      title: "Public Sector & Government",
      code: "HC-PSG",
      color: "from-blue-500 to-cyan-500",
      icon: "🏛️",
      anchor: "public-sector",
    },
    {
      title: "Student",
      code: "HC-S",
      color: "from-red-500 to-pink-500",
      icon: "🎓",
      anchor: "student",
    },
  ];

  // Carousel state and images
  const images = [
    chair,
    chairman,
    moonBhai,
    sp1,
    sp2,
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden min-h-[500px] sm:min-h-[550px] md:min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={homepage}
            alt="ICT Awards Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 drop-shadow-2xl text-white">
              Bangladesh ICT and Innovation Awards 2025
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white max-w-3xl mx-auto drop-shadow-lg">
              Recognition for Innovation, Inspiration for Transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/registration"
                className="bg-white text-secondary-600 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Register Now
              </Link>
              <Link
                to="/guidelines"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-secondary-600 transition-colors shadow-lg"
              >
                View Guidelines
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Section with Image Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Bangladesh ICT & Innovation Awards
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The Bangladesh ICT & Innovation Awards 2025, organized by the
                Bangladesh ICT and Innovation Network (BIIN), marks the
                first-ever national celebration of technological creativity and
                innovation in Bangladesh. This landmark initiative recognizes
                visionary individuals, students, startups, and organizations
                that are transforming lives through technology and shaping the
                nation’s digital future.
              </p>
              <p className="text-lg text-black mb-4">
                <b> A National Celebration of Innovation</b>
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Under the inspiring theme “Recognition for Innovation,
                Inspiration for Transformation,” the Awards honor innovators
                whose groundbreaking ideas are driving change across industries
                and communities. This year’s program drew 255 submissions from
                across the country, reflecting the vibrant and growing ICT
                ecosystem of Bangladesh. After multiple rounds of evaluation and
                pitching, over 90 projects were shortlisted, and 32 finalists
                earned national recognition for their outstanding contributions.
                <br />
                <br />
              </p>
              <Link
                to="/about"
                className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors inline-flex items-center w-fit"
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
            <div className="relative w-full aspect-[16/9] lg:aspect-[4/3]">
              <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg bg-gray-100">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`ICT Awards ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              {/* Indicator dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
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
                    to={`/categories#${category.anchor}`}
                    className="text-secondary-600 hover:text-primary-700 font-medium inline-flex items-center"
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

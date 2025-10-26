import { useEffect, useState } from "react";
import homepage from "../assets/Home Image/Home 1.jpg";

const About = () => {
  const API_URL =
    "https://script.google.com/macros/s/AKfycbx0bbcB-LedQAp20CrnQhPjIUL7nACzFqMWWBVpA5TuxxLvnlF6fYsxSaX7YgveefrJ3A/exec";

  // Show last known value instantly
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem("applications");
    return saved ? Number(saved) : 0;
  });

  const fetchApplications = async () => {
    try {
      const res = await fetch(`${API_URL}?action=count`);
      const data = await res.json();
      if (data.status === "success") {
        setApplications(data.total);
        localStorage.setItem("applications", data.total);
      }
    } catch (err) {
      console.error("Error fetching applications:", err);
    }
  };

  useEffect(() => {
    fetchApplications(); // initial fetch

    const handleUpdate = (e) => setApplications(e.detail);
    window.addEventListener("updateApplications", handleUpdate);

    // Poll every 1-2 seconds for live update (captures deletions too)
    const interval = setInterval(fetchApplications, 2000);

    return () => {
      window.removeEventListener("updateApplications", handleUpdate);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="">
      <div className="">
        {/* Header */}

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
                Bangladesh ICT and Innovation Awards
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white max-w-3xl mx-auto drop-shadow-lg">
                Recognition for Innovation, Inspiration for Transformation
              </p>
              <div className="flex justify-center gap-4">
                <div className="h-1 w-12 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Overview Section */}
          <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Overview
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              The Bangladesh ICT & Innovation Awards 2025, organized by the
              Bangladesh ICT and Innovation Network (BIIN), marks the first-ever
              national celebration of technological creativity and innovation in
              Bangladesh.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              This landmark initiative recognizes visionary individuals,
              students, startups, and organizations that are transforming lives
              through technology and shaping the nation's digital future.
            </p>

            {/* A National Celebration of Innovation */}
            <div className="mt-8 sm:mt-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                A National Celebration of Innovation
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                Under the inspiring theme{" "}
                <span className="font-semibold text-primary-600">
                  "Recognition for Innovation, Inspiration for Transformation,"
                </span>{" "}
                the Awards honor innovators whose groundbreaking ideas are
                driving change across industries and communities.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                This year's program drew{" "}
                <span className="font-bold text-secondary-600">
                  255 submissions
                </span>{" "}
                from across the country, reflecting the vibrant and growing ICT
                ecosystem of Bangladesh. After multiple rounds of evaluation and
                pitching, over{" "}
                <span className="font-bold text-secondary-600">
                  90 projects
                </span>{" "}
                were shortlisted, and{" "}
                <span className="font-bold text-secondary-600">
                  32 finalists
                </span>{" "}
                earned national recognition for their outstanding contributions.
              </p>
            </div>
          </div>

          {/* Program Highlights */}
          <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Program Highlights
            </h2>

            {/* Registration & Submissions */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  1
                </span>
                Registration & Submissions
              </h3>
              <p className="text-base sm:text-lg text-gray-600 ml-11">
                Open to individuals, students, startups, and organizations
                nationwide, encouraging participation from all corners of
                Bangladesh's innovation landscape.
              </p>
            </div>

            {/* Pitching Sessions */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  2
                </span>
                Pitching Sessions
              </h3>
              <p className="text-base sm:text-lg text-gray-600 ml-11">
                Shortlisted participants presented their projects through live
                demonstrations and Q&A sessions before expert judges. The
                interactive pitching rounds ensured transparency, fairness, and
                industry relevance.
              </p>
            </div>

            {/* Judging Panel */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  3
                </span>
                Judging Panel
              </h3>
              <p className="text-base sm:text-lg text-gray-600 ml-11 mb-4">
                The judging committee included distinguished professionals from:
              </p>
              <div className="ml-11 grid grid-cols-1 md:grid-cols-2 gap-3">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      Academia and Research
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      ICT/ITES Industry
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      Finance and Banking
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      Startup Ecosystem
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      Government and ICT Division
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      International ICT Experts
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-base sm:text-lg text-gray-600 ml-11 mt-4">
                Their collective expertise ensured a credible and balanced
                evaluation process.
              </p>
            </div>

            {/* Award Ceremony */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center">
                <span className="bg-primary-100 text-primary-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  4
                </span>
                Award Ceremony
              </h3>
              <p className="text-base sm:text-lg text-gray-600 ml-11">
                The Grand Finale took place on{" "}
                <span className="font-semibold text-secondary-600">
                  October 18, 2025
                </span>
                , at the{" "}
                <span className="font-semibold">
                  Independent University, Bangladesh (IUB)
                </span>
                . The nation's top innovators were celebrated with crests,
                certificates, and prizes, in a vibrant event attended by leaders
                from government, industry, and academia.
              </p>
            </div>
          </div>

          {/* Guests, Sponsors & Partners */}
          <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Guests, Sponsors & Partners
            </h2>

            {/* Esteemed Guests */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Esteemed Guests
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                The event was graced by esteemed guests including:
              </p>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">👤</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Dr. Anisuzzaman Chowdhury
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      Special Assistant to the Chief Adviser of the Government
                      of the People's Republic of Bangladesh (Chief Guest)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">👤</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Mr. Shish Haider Chowdhury, NDC
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      Secretary, ICT Division (Special Guest)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">👤</span>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Major General Md Emdad ul Bari (Retd.), OSP, NDC, psc, te
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      Chairman, Bangladesh Telecommunication Regulatory
                      Commission (BTRC) (Special Guest)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Organizer & Sponsors */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Organizer & Sponsors
              </h3>
              <div className="space-y-4">
                <div className="bg-primary-50 border-l-4 border-primary-600 p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-1">
                    Organized by
                  </p>
                  <p className="text-gray-700">
                    Bangladesh ICT and Innovation Network (BIIN)
                  </p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-1">
                    Title Sponsor
                  </p>
                  <p className="text-gray-700">NCC Bank PLC</p>
                </div>
                <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">
                    Gold Sponsors
                  </p>
                  <p className="text-gray-700">• Mutual Trust Bank PLC</p>
                  <p className="text-gray-700">
                    • American International University–Bangladesh (AIUB)
                  </p>
                </div>
                <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-1">
                    Silver Sponsor
                  </p>
                  <p className="text-gray-700">The City Bank PLC</p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">
                    Knowledge Partners
                  </p>
                  <p className="text-gray-700">
                    • American International University–Bangladesh (AIUB)
                  </p>
                  <p className="text-gray-700">
                    • Independent University, Bangladesh (IUB)
                  </p>
                  <p className="text-gray-700">
                    • University of Liberal Arts Bangladesh (ULAB)
                  </p>
                </div>
                <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">
                    Gift Partners
                  </p>
                  <p className="text-gray-700">• Super Star Group</p>
                  <p className="text-gray-700">• Red Data (Pvt.) Ltd.</p>
                  <p className="text-gray-700">• ShareTrip</p>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-1">
                    Digital Campaign Partner
                  </p>
                  <p className="text-gray-700">Smart-Trend Digital</p>
                </div>
                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-1">
                    Strategic Partner
                  </p>
                  <p className="text-gray-700">JCI Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Objectives & Benefits */}
          <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Objectives & Benefits
            </h2>
            <ul className="space-y-3 sm:space-y-4 text-gray-600">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base">
                  Recognize and honor Bangladesh's leading ICT innovators.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base">
                  Inspire creativity, digital entrepreneurship, and
                  technology-driven problem solving.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base">
                  Establish a national benchmark for ICT excellence.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base">
                  Connect innovators with mentors, investors, and partners.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base">
                  Create opportunities to represent Bangladesh in international
                  competitions.
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm sm:text-base">
                  Strengthen the ecosystem of students, professionals, and
                  enterprises powering Bangladesh.
                </span>
              </li>
            </ul>
          </div>

          {/* Looking Ahead */}
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl text-white p-6 sm:p-8 shadow-2xl mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Looking Ahead
            </h2>
            <p className="text-base sm:text-lg mb-4">
              The Bangladesh ICT & Innovation Awards 2025 is more than a
              competition — it's a platform for transformation. The champions
              from this year's event will be shortlisted to represent Bangladesh
              in an upcoming international competition, showcasing the nation's
              talent and innovation on the global stage.
            </p>
            <p className="text-base sm:text-lg">
              Through this program, Bangladesh ICT and Innovation Network (BIIN)
              continues its mission to build a collaborative innovation
              ecosystem — connecting creators, investors, and policymakers to
              drive sustainable technological progress across Bangladesh.
            </p>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white p-6 sm:p-8 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              Awards by Numbers
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">6</div>
                <div className="text-primary-100 text-sm sm:text-base">
                  Categories
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">255</div>
                <div className="text-primary-100 text-sm sm:text-base">
                  Applications
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">90+</div>
                <div className="text-primary-100 text-sm sm:text-base">
                  Shortlisted
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">32</div>
                <div className="text-primary-100 text-sm sm:text-base">
                  Finalists
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

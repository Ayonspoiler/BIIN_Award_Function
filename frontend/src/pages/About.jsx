import { useEffect, useState } from "react";
import homepage from "../assets/Home Image/Home 1.jpg"

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
        <section className="relative text-white py-20 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={homepage}
              alt="ICT Awards Background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black mb-6 mt-9 drop-shadow-2xl text-white">
                Bangladesh ICT and Innovation Awards
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto drop-shadow-lg">
                Celebrating Innovation, Empowering Digital Transformation
              </p>
              <div className="flex justify-center gap-4">
                <div className="h-1 w-12 bg-white rounded-full"></div>
              </div>
            </div>
            <br />
            <br />
           <br />
      
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* About Awards Section */}
          <div className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              About Bangladesh ICT & Innovation Awards 2025
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Bangladesh ICT & Innovation Awards 2025, hosted by Bangladesh ICT
              & Innovation Network (BIIN), is designed to shape the future of
              Bangladesh's digital landscape by recognizing and empowering
              visionary individuals, startups, and enterprises whose innovations
              drive long-term transformation and global opportunities.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              This year's winners will earn not just national recognition, but
              also the opportunity to represent Bangladesh at the Asia Pacific
              ICT Alliance Awards (APICTA 2025) in Taiwan - the most prestigious
              ICT competition in the region, often hailed as the "ICT Oscars of
              Asia-Pacific."
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
              Beyond recognition, the Awards provide a gateway to regional and
              global markets, connecting innovators with investors, partners,
              and industry leaders on the international stage.
            </p>

            {/* Objectives & Benefits */}
            <div className="mt-8 sm:mt-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Objectives & Benefits of the Program
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0"
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
                    Inspire and accelerate innovation, creativity, and digital
                    entrepreneurship.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0"
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
                    Establish an industry benchmark for ICT excellence in
                    Bangladesh.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0"
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
                    Provide national and global recognition to top ICT
                    achievers.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0"
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
                    Enable winners to represent Bangladesh at APICTA 2025.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0"
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
                    Showcase and promote export-ready ICT products and services.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0"
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
                    Create opportunities for networking, alliances, and
                    collaborations.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0"
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
                    Connect participants with investors, venture capitalists,
                    and policymakers.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0"
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
                    Expand Bangladesh's pool of skilled ICT professionals and
                    innovators.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0"
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
                    Strengthen Digital Bangladesh awareness locally and
                    internationally.
                  </span>
                </li>
              </ul>
            </div>

            {/* Program Plan */}
            <div className="mt-8 sm:mt-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Program Plan
              </h3>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold text-gray-900 sm:min-w-[180px] mb-1 sm:mb-0 text-sm sm:text-base">
                      September 10, 2025
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">
                      Registration Opens - Applications open for project
                      submissions.
                    </span>
                  </li>
                  {/* <li className="flex flex-col sm:flex-row sm:items-start">
                  <span className="font-semibold text-gray-900 sm:min-w-[180px] mb-1 sm:mb-0 text-sm sm:text-base">
                    September 25, 2025
                  </span>
                  <span className="text-gray-600 text-sm sm:text-base">
                    Preliminary Evaluation - Initial review and shortlisting of
                    submitted projects.
                  </span>
                </li> */}
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold text-gray-900 sm:min-w-[180px] mb-1 sm:mb-0 text-sm sm:text-base">
                      September 30, 2025
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">
                      Final Submission - Shortlisted participants invited to
                      submit detailed entries.
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold text-gray-900 sm:min-w-[180px] mb-1 sm:mb-0 text-sm sm:text-base">
                      October 9–11, 2025
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">
                      Pitching & Judging Sessions - Finalists present their
                      projects through pitching, demonstrations, and Q&A before
                      a panel of expert judges. The sessions are planned over
                      several days for careful and transparent evaluation.
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold text-gray-900 sm:min-w-[180px] mb-1 sm:mb-0 text-sm sm:text-base">
                      October 18, 2025
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">
                      Award Ceremony
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold text-gray-900 sm:min-w-[180px] mb-1 sm:mb-0 text-sm sm:text-base">
                      Global Representation
                    </span>
                    <span className="text-gray-600 text-sm sm:text-base">
                      Champion teams will represent Bangladesh at the APICTA
                      Awards 2025 in Taiwan, bringing national innovations to an
                      international platform.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* About Judges */}
            <div className="mt-8 sm:mt-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                About Judges
              </h3>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                The judging process will be led by an esteemed panel of
                professionals from diverse backgrounds, ensuring fair,
                transparent, and industry-aligned evaluation. Judges will be
                drawn from:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      Academia & Research
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
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
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
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      Finance & Banking
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
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
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
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      Government & ICT Division
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
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      International ICT experts
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white p-6 sm:p-8 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              Awards by Numbers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              {/* <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-primary-100">Years Running</div>
            </div> */}

              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">6</div>
                <div className="text-primary-100 text-sm sm:text-base">
                  Categories
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  {/* {applications === null ? "..." : applications} */}
                  255
                </div>
                <div className="text-primary-100 text-sm sm:text-base">
                  Applications
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">?</div>
                <div className="text-primary-100 text-sm sm:text-base">
                  Winners
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

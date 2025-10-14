import { useEffect, useState } from "react";

const About = () => {
  const API_URL =
    "https://script.google.com/macros/s/AKfycbx0bbcB-LedQAp20CrnQhPjIUL7nACzFqMWWBVpA5TuxxLvnlF6fYsxSaX7YgveefrJ3A/exec";

  // Show last known value instantly
  const [applications, setApplications] = useState(0);

  const fetchApplications = async () => {
    try {
      const res = await fetch(`${API_URL}?action=count`);
      const data = await res.json();
      if (data.status === "success") {
        setApplications(data.total);
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
        <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20 w-full ">
          <div className="px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bangladesh ICT & Innovation Awards
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Celebrating Innovation, Empowering Digital Transformation
            </p>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* About Awards Section */}
          <div className="bg-white rounded-xl shadow-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Bangladesh ICT & Innovation Awards 2025
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Bangladesh ICT & Innovation Awards 2025, hosted by Bangladesh ICT
              & Innovation Network (BIIN), is designed to shape the future of
              Bangladesh's digital landscape by recognizing and empowering
              visionary individuals, startups, and enterprises whose innovations
              drive long-term transformation and global opportunities.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              This year's winners will earn not just national recognition, but
              also the opportunity to represent Bangladesh at the Asia Pacific
              ICT Alliance Awards (APICTA 2025) in Taiwan - the most prestigious
              ICT competition in the region, often hailed as the "ICT Oscars of
              Asia-Pacific."
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Beyond recognition, the Awards provide a gateway to regional and
              global markets, connecting innovators with investors, partners,
              and industry leaders on the international stage.
            </p>

            {/* Objectives & Benefits */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Objectives & Benefits of the Program
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Inspire and accelerate innovation, creativity, and digital
                    entrepreneurship.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Establish an industry benchmark for ICT excellence in
                    Bangladesh.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Provide national and global recognition to top ICT
                    achievers.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Enable winners to represent Bangladesh at APICTA 2025.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Showcase and promote export-ready ICT products and services.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Create opportunities for networking, alliances, and
                    collaborations.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Connect participants with investors, venture capitalists,
                    and policymakers.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Expand Bangladesh's pool of skilled ICT professionals and
                    innovators.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Strengthen Digital Bangladesh awareness locally and
                    internationally.
                  </span>
                </li>
              </ul>
            </div>

            {/* Program Plan */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Program Plan
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-4">
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold text-gray-900 mb-1 sm:mb-0 sm:min-w-[180px] sm:flex-shrink-0">
                      September 10, 2025
                    </span>
                    <span className="text-gray-600">
                      Registration Opens - Applications open for project
                      submissions.
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold text-gray-900 mb-1 sm:mb-0 sm:min-w-[180px] sm:flex-shrink-0">
                      September 30, 2025
                    </span>
                    <span className="text-gray-600">
                      Final Submission - Shortlisted participants invited to
                      submit detailed entries.
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold text-gray-900 mb-1 sm:mb-0 sm:min-w-[180px] sm:flex-shrink-0">
                      October 9–11, 2025
                    </span>
                    <span className="text-gray-600">
                      Pitching & Judging Sessions - Finalists present their
                      projects through pitching, demonstrations, and Q&A before
                      a panel of expert judges. The sessions are planned over
                      several days for careful and transparent evaluation.
                    </span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold text-gray-900 mb-1 sm:mb-0 sm:min-w-[180px] sm:flex-shrink-0">
                      October 18, 2025
                    </span>
                    <span className="text-gray-600">Award Ceremony</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold text-gray-900 mb-1 sm:mb-0 sm:min-w-[180px] sm:flex-shrink-0">
                      Global Representation
                    </span>
                    <span className="text-gray-600">
                      Champion teams will represent Bangladesh at the APICTA
                      Awards 2025 in Taiwan, bringing national innovations to an
                      international platform.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* About Judges */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                About Judges
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                The judging process will be led by an esteemed panel of
                professionals from diverse backgrounds, ensuring fair,
                transparent, and industry-aligned evaluation. Judges will be
                drawn from:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Academia & Research
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    ICT/ITES Industry
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Finance & Banking
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Startup Ecosystem
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Government & ICT Division
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-4 h-4 text-primary-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    International ICT experts
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">
              Awards by Numbers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">6</div>
                <div className="text-primary-100">Categories</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">255</div>
                <div className="text-primary-100">Applications</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">?</div>
                <div className="text-primary-100">Winners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

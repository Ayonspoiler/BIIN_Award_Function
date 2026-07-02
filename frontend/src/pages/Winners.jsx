"use client";

import { useState } from "react";
import { Trophy, Award, Medal } from "lucide-react";
import homepage from "../assets/Home Image/Home 1.jpg";

const Winners = () => {
  const [activeYear, setActiveYear] = useState(2026);
  const [activeDivision, setActiveDivision] = useState("student");
  const [activeLevel, setActiveLevel] = useState("champion");

  const winnersData2025 = {
    student: {
      champion: [
        {
          id: 1,
          category: "Industrial",
          solution: "RadSafe",
          organization: "Military Institute of Science and Technology (MIST)",
        },
        {
          id: 2,
          category: "Business Services",
          solution: "Brittoo.xyz",
          organization:
            "Rajshahi University of Engineering & Technology (RUET)",
        },
        {
          id: 3,
          category: "Inclusions & Community Services",
          solution: "C.A.R.E WHEELCHAIR",
          organization: "Adamjee Cantonment College",
        },
        {
          id: 4,
          category: "Consumer",
          solution: "Safe Step",
          organization: "Rajuk Uttara Model College",
        },
      ],
      winner: [
        {
          id: 1,
          category: "Industrial",
          solution: "BRACU Mongol-Tori",
          organization: "BRAC University",
        },
        {
          id: 2,
          category: "Public Sector and Government",
          solution: "Drainsense",
          organization: "Dhaka Government Polytechnic Institute",
        },
        {
          id: 3,
          category: "Business Services",
          solution: "Hybrid Fraud Shield",
          organization: "American International University-Bangladesh (AIUB)",
        },
        {
          id: 4,
          category: "Inclusion & Community Services",
          solution: "Ojogor",
          organization: "Daffodil International University (DIU)",
        },
        {
          id: 5,
          category: "Consumer",
          solution: "Sohopathi Ai",
          organization: "ZNRF University of Management Sciences (ZUMS)",
        },
      ],
      merit: [
        {
          id: 1,
          category: "Business Services",
          solution: "DOKAAN",
          organization: "University of Information Technology and Science",
        },
        {
          id: 2,
          category: "Industrial",
          solution: "SolarShield",
          organization: "ZNRF University of Management Science",
        },
        {
          id: 3,
          category: "Industrial",
          solution: "GluSonic",
          organization: "University of Dhaka",
        },
        {
          id: 4,
          category: "Inclusion and Community Services",
          solution: "BlinkTalk",
          organization: "ZNRF University of Management Science",
        },
        {
          id: 5,
          category: "Inclusion and Community Services",
          solution: "BartaProhori",
          organization: "American International University Bangladesh",
        },
        {
          id: 6,
          category: "Inclusion and Community Services",
          solution: "StylOn",
          organization: "Daffodil International University",
        },
      ],
    },
    organization: {
      champion: [
        {
          id: 1,
          category: "Industrial",
          solution: "1st advance MTBM of Bangladesh",
          organization: "Bored Tunnelers",
        },
        {
          id: 2,
          category: "Public Sector and Government",
          solution: "e-Return system",
          organization: "Synesis IT PLC",
        },
        {
          id: 3,
          category: "Business Services",
          solution: "Commplify",
          organization: "Riseup Labs",
        },
        {
          id: 4,
          category: "Inclusions & Community Services",
          solution: "RoboLife Bionic Arm",
          organization: "Robolife Technologies",
        },
      ],
      winner: [
        {
          id: 1,
          category: "Public Sector and Government",
          solution: "DLRMS Software",
          organization: "SoftBD Limited",
        },
        {
          id: 2,
          category: "Business Services",
          solution: "MobiManager",
          organization: "INovex Idea Solution Limited",
        },
        {
          id: 3,
          category: "Inclusions & Community Services",
          solution: "Nyajjomullo (Fair Price)",
          organization: "iXora Solution Ltd",
        },
      ],
      merit: [
        {
          id: 1,
          category: "Industrial",
          solution: "XenOS Automotive OS",
          organization: "JaduPc",
        },
        {
          id: 2,
          category: "Public Sector and Government",
          solution: "National Job Portal",
          organization: "Synesis IT PLC",
        },
        {
          id: 3,
          category: "Business Services",
          solution: "PayProtect – Smart Device Financing & Security Platform",
          organization: "INovex Idea Solution Limited",
        },
      ],
    },
    individual: {
      champion: [
        {
          id: 1,
          category: "Public Sector and Government",
          solution: "Shebar Janala",
          organization: "ImpactFuse Coalition",
        },
      ],
      winner: [
        {
          id: 1,
          category: "Industrial",
          solution: "Project Pani",
          organization: "Individual/Group",
        },
        {
          id: 2,
          category: "Inclusion & Community Service",
          solution: "QRARG Eye Motion Tracker",
          organization: "Individual/Group",
        },
      ],
      merit: [
        {
          id: 1,
          category: "Consumer",
          solution:
            "Automated Medication management and Assistive Unit (AMMAU) for Elderly Diabetic Patients",
          organization: "Individual (Research Group)",
        },
        {
          id: 2,
          category: "Industrial",
          solution:
            "Anchor Eye: An IoT and AI-based pisciculture monitoring growth prediction robot",
          organization: "Military Institute of Science and Technology (MIST)",
        },
        {
          id: 3,
          category: "Public Sector and Government",
          solution: "E-Vo: A secure Digital Voting application for Bangladesh",
          organization: "Aminul Islam",
        },
        {
          id: 4,
          category: "Inclusion & Community Service",
          solution: "Robot-Assisted Knee Joint Rehabilitation System",
          organization: "Individual (Research Group)",
        },
      ],
    },
  };

  const getCategoryColor = (category) => {
    const colors = {
      Industrial: "bg-primary-100 text-primary-800",
      "Business Services": "bg-primary-100 text-primary-800",
      "Inclusions & Community Services": "bg-primary-100 text-primary-800",
      "Inclusion & Community Services": "bg-primary-100 text-primary-800",
      "Inclusion and Community Services": "bg-primary-100 text-primary-800",
      Consumer: "bg-primary-100 text-primary-800",
      "Public Sector and Government": "bg-primary-100 text-primary-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getAwardIcon = (level) => {
    if (level === "champion")
      return <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />;
    if (level === "winner") return <Award className="w-5 h-5 sm:w-6 sm:h-6" />;
    return <Medal className="w-5 h-5 sm:w-6 sm:h-6" />;
  };

  const getAwardColor = (level) => {
    if (level === "champion") return "bg-primary-700";
    if (level === "winner") return "bg-primary-500";
    return "bg-primary-400";
  };

  const getAwardBgColor = (level) => {
    if (level === "champion")
      return "bg-primary-50 border-primary-200";
    if (level === "winner")
      return "bg-white border-primary-100";
    return "bg-primary-50 border-primary-100";
  };

  const years = [
    { year: 2026, label: "2026", status: "coming-soon" },
    { year: 2025, label: "2025", status: "published" },
  ];

  const handleYearChange = (year) => {
    setActiveYear(year);
    if (year === 2025) {
      setActiveDivision("student");
      setActiveLevel("champion");
    }
  };

  const currentWinners = winnersData2025[activeDivision][activeLevel];

  const renderComingSoon = () => (
    <div className="relative overflow-hidden rounded-2xl border border-primary-100 bg-white p-8 sm:p-12 md:p-16 text-center">
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-100/60 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary-100/60 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary-600 text-white mb-6 shadow-lg">
          <Trophy className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          2026 Award Winners
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-primary-600 mb-4">
          Coming Soon
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          Winners of the Bangladesh ICT & Innovation Awards 2026 will be
          announced here after the award ceremony. Check back in October 2026.
        </p>


      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="relative text-white py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden min-h-[500px] sm:min-h-[550px] md:min-h-[600px] flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={homepage}
            alt="Award Winners Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay + gradient for readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="inline-block mb-3 sm:mb-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-1.5 sm:px-6 sm:py-2 rounded-full">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Meet Our Winners
                </span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
              Award Winners
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-yellow-300 max-w-3xl mx-auto drop-shadow-lg px-4">
              Celebrating excellence across Bangladesh&apos;s ICT innovators
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <div className="h-1 w-12 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Winners by Year
            </h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Browse award recipients from each edition
            </p>
          </div>

          <div className="inline-flex p-1 bg-gray-100 rounded-xl self-start sm:self-auto">
            {years.map(({ year, label, status }) => (
              <button
                key={year}
                type="button"
                onClick={() => handleYearChange(year)}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeYear === year
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {label}
                {status === "coming-soon" && (
                  <span className="ml-1.5 text-[10px] uppercase tracking-wide text-amber-600 font-bold">
                    Soon
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeYear === 2026 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
          {renderComingSoon()}
        </div>
      ) : (
        <>
      {/* Division Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 mt-0">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider">
            2025 Edition
          </span>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 justify-center">
          {[
            { id: "student", label: "Student" },
            { id: "organization", label: "Organization" },
            { id: "individual", label: "Individual or Group" },
          ].map((division) => (
            <button
              key={division.id}
              onClick={() => {
                setActiveDivision(division.id);
                setActiveLevel("champion");
              }}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeDivision === division.id
                  ? "bg-primary-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              {division.label}
            </button>
          ))}
        </div>
      </div>
      {/* Award Level Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 justify-center">
          {[
            { id: "champion", label: "🏆 Champion", icon: Trophy },
            { id: "winner", label: "🥈 Winner", icon: Award },
            { id: "merit", label: "🥉 Merit", icon: Medal },
          ].map((level) => (
            <button
              key={level.id}
              onClick={() => setActiveLevel(level.id)}
              className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                activeLevel === level.id
                  ? `${getAwardColor(level.id)} text-white shadow-lg scale-105`
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              {getAwardIcon(level.id)}
              {level.label}
            </button>
          ))}
        </div>
      </div>
      {/* Winners Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {currentWinners.map((winner) => (
            <div
              key={winner.id}
              className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${getAwardBgColor(
                activeLevel
              )}`}
            >
              {/* Rank Badge */}
              {/* <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${getAwardColor(
                    activeLevel
                  )} flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg`}
                >
                  {index + 1}
                </div>
              </div> */}

              {/* Content */}
              <div className="p-4 sm:p-6 relative z-5">
                {/* Category Badge */}
                <div className="mb-3 sm:mb-4">
                  <span
                    className={`inline-block px-2.5 py-1 sm:px-3 rounded-full text-xs font-semibold ${getCategoryColor(
                      winner.category
                    )}`}
                  >
                    {winner.category}
                  </span>
                </div>

                {/* Solution Name */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                  {winner.solution}
                </h3>

                {/* Organization */}
                <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 line-clamp-2">
                  <span className="font-semibold">Organization:</span>{" "}
                  {winner.organization}
                </p>

                {/* Award Level Indicator */}
                <div className="flex items-center gap-2 pt-3 sm:pt-4 border-t border-gray-300/50">
                  {getAwardIcon(activeLevel)}
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 capitalize">
                    {activeLevel === "champion" && "Champion"}
                    {activeLevel === "winner" && "Winner"}
                    {activeLevel === "merit" && "Merit Award"}
                  </span>
                </div>
              </div>

              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentWinners.length === 0 && (
          <div className="text-center py-12 sm:py-16">
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
            <p className="text-gray-400 text-base sm:text-lg">
              No winners in this category yet.
            </p>
          </div>
        )}
      </div>
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-primary-50 rounded-xl p-6 sm:p-8 border-2 border-primary-200 text-center shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
              {winnersData2025.student.champion.length +
                winnersData2025.organization.champion.length +
                winnersData2025.individual.champion.length}
            </div>
            <p className="text-sm sm:text-base text-gray-700 font-semibold">
              Total Champions
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-primary-100 text-center shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-primary-500 mb-2">
              {winnersData2025.student.winner.length +
                winnersData2025.organization.winner.length +
                winnersData2025.individual.winner.length}
            </div>
            <p className="text-sm sm:text-base text-gray-700 font-semibold">
              Total Winners
            </p>
          </div>
          <div className="bg-primary-50 rounded-xl p-6 sm:p-8 border-2 border-primary-100 text-center shadow-md">
            <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">
              {winnersData2025.student.merit.length +
                winnersData2025.organization.merit.length +
                winnersData2025.individual.merit.length}
            </div>
            <p className="text-sm sm:text-base text-gray-700 font-semibold">
              Merit Awards
            </p>
          </div>
        </div>
      </div>
        </>
      )}
    </div>
  );
};

export default Winners;

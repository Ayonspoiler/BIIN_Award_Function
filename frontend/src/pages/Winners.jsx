"use client";

import { useState } from "react";
import { Trophy, Award, Medal } from "lucide-react";

const Winners = () => {
  const [activeDivision, setActiveDivision] = useState("student");
  const [activeLevel, setActiveLevel] = useState("champion");

  // Winners Data
  const winnersData = {
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
          solution: "(DLRMS) Software",
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
      Industrial: "bg-blue-100 text-blue-800",
      "Business Services": "bg-purple-100 text-purple-800",
      "Inclusions & Community Services": "bg-green-100 text-green-800",
      "Inclusion & Community Services": "bg-green-100 text-green-800",
      "Inclusion and Community Services": "bg-green-100 text-green-800",
      Consumer: "bg-pink-100 text-pink-800",
      "Public Sector and Government": "bg-orange-100 text-orange-800",
      "Public Sector and Government": "bg-orange-100 text-orange-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getAwardIcon = (level) => {
    if (level === "champion") return <Trophy className="w-6 h-6" />;
    if (level === "winner") return <Award className="w-6 h-6" />;
    return <Medal className="w-6 h-6" />;
  };

  const getAwardColor = (level) => {
    if (level === "champion") return "from-yellow-400 to-yellow-600";
    if (level === "winner") return "from-gray-300 to-gray-500";
    return "from-orange-300 to-orange-500";
  };

  const getAwardBgColor = (level) => {
    if (level === "champion")
      return "bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-300";
    if (level === "winner")
      return "bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300";
    return "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300";
  };

  const currentWinners = winnersData[activeDivision][activeLevel];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Meet Our Winners
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Award Winners
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto text-pretty"></p>
          </div>
        </div>
      </section>

      {/* Division Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-12">
        <div className="flex flex-wrap gap-4 justify-center">
          {[
            { id: "student", label: "Student Division" },
            { id: "organization", label: "Organization Division" },
            { id: "individual", label: "Individual or Group" },
          ].map((division) => (
            <button
              key={division.id}
              onClick={() => {
                setActiveDivision(division.id);
                setActiveLevel("champion");
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDivision === division.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              {division.label}
            </button>
          ))}
        </div>
      </div>

      {/* Award Level Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { id: "champion", label: "🏆 Champion", icon: Trophy },
            { id: "winner", label: "🥈 Winner", icon: Award },
            { id: "merit", label: "🥉 Merit", icon: Medal },
          ].map((level) => (
            <button
              key={level.id}
              onClick={() => setActiveLevel(level.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeLevel === level.id
                  ? `bg-gradient-to-r ${getAwardColor(
                      level.id
                    )} text-white shadow-lg scale-105`
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentWinners.map((winner, index) => (
            <div
              key={winner.id}
              className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 ${getAwardBgColor(
                activeLevel
              )}`}
            >
              {/* Rank Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${getAwardColor(
                    activeLevel
                  )} flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                >
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-5">
                {/* Category Badge */}
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
                      winner.category
                    )}`}
                  >
                    {winner.category}
                  </span>
                </div>

                {/* Solution Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {winner.solution}
                </h3>

                {/* Organization */}
                <p className="text-sm text-gray-700 mb-4 line-clamp-2">
                  <span className="font-semibold">Organization:</span>{" "}
                  {winner.organization}
                </p>

                {/* Award Level Indicator */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-300/50">
                  {getAwardIcon(activeLevel)}
                  <span className="text-sm font-semibold text-gray-800 capitalize">
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
          <div className="text-center py-16">
            <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">
              No winners in this category yet.
            </p>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 border-2 border-yellow-200 text-center shadow-md">
            <div className="text-4xl font-bold text-yellow-600 mb-2">
              {winnersData.student.champion.length +
                winnersData.organization.champion.length +
                winnersData.individual.champion.length}
            </div>
            <p className="text-gray-700 font-semibold">Total Champions</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border-2 border-gray-300 text-center shadow-md">
            <div className="text-4xl font-bold text-gray-600 mb-2">
              {winnersData.student.winner.length +
                winnersData.organization.winner.length +
                winnersData.individual.winner.length}
            </div>
            <p className="text-gray-700 font-semibold">Total Winners</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-200 text-center shadow-md">
            <div className="text-4xl font-bold text-orange-600 mb-2">
              {winnersData.student.merit.length +
                winnersData.organization.merit.length +
                winnersData.individual.merit.length}
            </div>
            <p className="text-gray-700 font-semibold">Merit Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;

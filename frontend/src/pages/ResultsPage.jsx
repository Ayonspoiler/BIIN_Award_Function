import React, { useState, useEffect } from "react";
import {
  FileText,
  Printer,
  ChevronDown,
  ChevronUp,
  Users,
  Trophy,
  Award,
  Medal,
} from "lucide-react";

// FIXED: Changed from https to http for local development
const API_BASE = "https://biin-award-function-rssj.onrender.com/api";

const ResultsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("student");
  const [studentLeaderboard, setStudentLeaderboard] = useState([]);
  const [organisationLeaderboard, setOrganisationLeaderboard] = useState([]);
  const [individualGroupLeaderboard, setIndividualGroupLeaderboard] = useState(
    []
  );
  const [expandedProject, setExpandedProject] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const headCategories = {
    "Consumer (HC-C)": {
      type: "market",
      solutions: [
        "Media & Entertainment",
        "Tourism & Hospitality",
        "Retail and Distribution",
        "Banking, Insurance & Finance",
        "Real estate",
        "Digital Marketing / Advertising",
      ],
    },
    "Industrial (HC-I)": {
      type: "market",
      solutions: [
        "Manufacturing",
        "Agriculture",
        "Mining",
        "Construction",
        "Transport and Logistics",
        "Energy and Utilities",
        "Telecommunications",
      ],
    },
    "Business Services (HC-BS)": {
      type: "market",
      solutions: [
        "Finance & Accounting solutions (Fintech)",
        "ICT Services solutions",
        "Security solutions",
        "Marketing solutions",
        "Professional Services (legal, HR etc.) solutions",
      ],
    },
    "Inclusions & Community Services (HC-ICS)": {
      type: "public",
      solutions: [
        "Regional, Rural and Remote Services",
        "Indigenous Services",
        "Health and Well-being",
        "Community Services",
        "Sustainability and Environment",
        "Education",
      ],
    },
    "Public Sector and Government (HC-PSG)": {
      type: "public",
      solutions: ["Government & Citizen Services", "Digital Government"],
    },
  };

  const [filters, setFilters] = useState({
    headCategory: "",
    solutionCategory: "",
  });

  useEffect(() => {
    fetchLeaderboard();
  }, [selectedCategory, filters]);
  // In ResultsPage.jsx - Update the fetchLeaderboard function
  const fetchLeaderboard = async () => {
    setLoading(true);
    setError("");

    try {
      let url = "";
      if (selectedCategory === "student") {
        url = `${API_BASE}/marking/leaderboard/student`;
      } else if (selectedCategory === "organisation") {
        url = `${API_BASE}/marking/leaderboard/organisation`;
      } else {
        url = `${API_BASE}/marking/leaderboard/individual-group`;
      }

      // ✅ FIX: Improved filtering with proper encoding
      const params = new URLSearchParams();
      if (filters.headCategory && filters.headCategory.trim() !== "") {
        params.append("headCategory", filters.headCategory.trim());
      }
      if (filters.solutionCategory && filters.solutionCategory.trim() !== "") {
        params.append("solutionCategory", filters.solutionCategory.trim());
      }

      if (params.toString()) url += `?${params}`;

      console.log("📊 Fetching leaderboard from:", url);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      console.log(`📊 Received ${data.length} results`);

      if (selectedCategory === "student") {
        setStudentLeaderboard(data);
      } else if (selectedCategory === "organisation") {
        setOrganisationLeaderboard(data);
      } else {
        setIndividualGroupLeaderboard(data);
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError(
        "Failed to load leaderboard. Please check if the server is running."
      );
    } finally {
      setLoading(false);
    }
  };
  const getCurrentData = () => {
    if (selectedCategory === "student") return studentLeaderboard;
    if (selectedCategory === "organisation") return organisationLeaderboard;
    return individualGroupLeaderboard;
  };

  // Safe number formatting function
  const safeToFixed = (value, decimals = 2) => {
    if (value === null || value === undefined || isNaN(value)) {
      return "0.00";
    }
    return Number(value).toFixed(decimals);
  };

  // Get total marks based on category
  const getTotalMarks = () => {
    return selectedCategory === "student" ? 50 : 40;
  };

  const handlePrint = () => {
    const data = getCurrentData();
    if (!data || data.length === 0) {
      alert("No data available to print");
      return;
    }

    // Get unique judges from all projects in current filter
    const allJudgesMap = new Map();
    data.forEach((entry) => {
      if (entry.judgeMarks && entry.judgeMarks.length > 0) {
        entry.judgeMarks.forEach((judge) => {
          if (judge.judgeId && judge.judgeName) {
            allJudgesMap.set(judge.judgeId.toString(), {
              name: judge.judgeName,
              email: judge.judgeEmail || "N/A",
            });
          }
        });
      }
    });
    const allJudges = Array.from(allJudgesMap.values());

    const printContainer = document.createElement("div");
    printContainer.className = "printable-content";
    printContainer.style.cssText =
      "background: white; color: black; font-family: Arial, sans-serif; font-size: 12px; padding: 30px;";

    let content = `
    <div style="text-align: center; margin-bottom: 40px;">
      <h1 style="font-size: 28px; color: #1a365d;">Bangladesh ICT & Innovation Awards 2025</h1>
      <h2 style="font-size: 20px; color: #2d3748;">
        ${
          selectedCategory === "student"
            ? "Student Category Results"
            : selectedCategory === "organisation"
            ? "Organisation Category Results"
            : "Individual/Group Category Results"
        }
        ${
          filters.headCategory
            ? `<br><span style="font-size: 18px; color: #4a5568; margin-top: 10px; display: block;">${filters.headCategory}</span>`
            : ""
        }
        ${
          filters.solutionCategory
            ? `<br><span style="font-size: 16px; color: #718096;">${filters.solutionCategory}</span>`
            : ""
        }
      </h2>
      <p>Generated on: ${new Date().toLocaleDateString()}</p>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
      <thead>
        <tr>
          <th style="border: 1px solid #000; padding: 8px;">Rank</th>
          <th style="border: 1px solid #000; padding: 8px;">Solution Name</th>
          ${
            selectedCategory !== "student"
              ? '<th style="border: 1px solid #000; padding: 8px;">Organization</th>'
              : ""
          }
          <th style="border: 1px solid #000; padding: 8px;">${
            selectedCategory === "student" ? "Contact" : "Category"
          }</th>
          <th style="border: 1px solid #000; padding: 8px;">Avg Score</th>
          <th style="border: 1px solid #000; padding: 8px;">Percentage</th>
        </tr>
      </thead>
      <tbody>
  `;

    data.forEach((entry, i) => {
      content += `
      <tr>
        <td style="border: 1px solid #000; padding: 6px;">${i + 1}</td>
        <td style="border: 1px solid #000; padding: 6px; font-weight: bold;">${
          entry.solutionName || "N/A"
        }</td>
        ${
          selectedCategory !== "student"
            ? `<td style="border: 1px solid #000; padding: 6px;">${
                entry.organizationName || "N/A"
              }</td>`
            : ""
        }
        <td style="border: 1px solid #000; padding: 6px;">
          ${
            selectedCategory === "student"
              ? `${entry.contactPersonName || "N/A"}<br>${
                  entry.contactPersonEmail || ""
                }`
              : `${entry.headCategory || "N/A"}<br>${
                  entry.solutionCategory || ""
                }`
          }
        </td>
        <td style="border: 1px solid #000; padding: 6px; text-align: center;">${safeToFixed(
          entry.totalAverageMarks
        )}</td>
        <td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold;">${safeToFixed(
          entry.percentageMarks,
          2
        )}%</td>
      </tr>
    `;
    });

    content += `</tbody></table>`;

    // Add judges signature section for first page
    if (allJudges.length > 0) {
      content += `
    <div style="margin-top: 50px; page-break-inside: avoid;">
      <h3 style="font-size: 18px; color: #1a365d; margin-bottom: 20px; padding-bottom: 10px;">
        Judge Panel Signatures 
      </h3>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 20px;">
        ${allJudges
          .map(
            (judge, idx) => `
          <div style="text-align: center; margin-bottom: 20px;">
           <div style="border-bottom: 2px solid #000; height: 30px; width: 200px; margin: 10px auto;"></div>
            <div style="font-weight: bold; font-size: 14px; margin-bottom: 5px;">${judge.name}</div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
    }

    content += `<h2 style="margin-top: 40px; border-top: 2px solid #333; padding-top: 20px; page-break-before: always;">Detailed Project Reports</h2>`;

    data.forEach((entry, index) => {
      content += `
      <div style="margin-top: 40px; page-break-before: always;">
        <h3 style="color: #1e3a8a;">${index + 1}. ${
        entry.solutionName || "N/A"
      }</h3>
        <p><strong>Organization:</strong> ${entry.organizationName || "N/A"}</p>
        <p><strong>Category:</strong> ${
          selectedCategory === "student"
            ? `${entry.contactPersonName || ""} (${
                entry.contactPersonEmail || ""
              })`
            : `${entry.headCategory || "N/A"} / ${
                entry.solutionCategory || "N/A"
              }`
        }</p>
        <p><strong>Average Score:</strong> ${safeToFixed(
          entry.totalAverageMarks
        )} | <strong>Percentage:</strong> ${safeToFixed(
        entry.percentageMarks,
        2
      )}%</p>
    `;

      if (entry.judgeMarks && entry.judgeMarks.length > 0) {
        content += `<table style="width: 100%; border-collapse: collapse; margin-top: 15px;"><thead><tr><th style="border: 1px solid #000; padding: 6px;">Judge Name</th><th style="border: 1px solid #000; padding: 6px;">Email</th>`;

        if (selectedCategory === "student") {
          content += `<th style="border: 1px solid #000; padding: 6px;">Uniqueness</th><th style="border: 1px solid #000; padding: 6px;">Proof of Concept</th><th style="border: 1px solid #000; padding: 6px;">Features</th><th style="border: 1px solid #000; padding: 6px;">Quality</th><th style="border: 1px solid #000; padding: 6px;">Presentation</th>`;
        } else {
          content += `
          <th style="border: 1px solid #000; padding: 6px;">Uniqueness</th>
          <th style="border: 1px solid #000; padding: 6px;">Market/Public Value</th>
          <th style="border: 1px solid #000; padding: 6px;">Features</th>
          <th style="border: 1px solid #000; padding: 6px;">Quality & Tech</th>
        `;
        }

        content += `<th style="border: 1px solid #000; padding: 6px;">Total Marks</th><th style="border: 1px solid #000; padding: 6px;">Percentage</th></tr></thead><tbody>`;

        entry.judgeMarks.forEach((judge, jIndex) => {
          const judgePercentage =
            selectedCategory === "student"
              ? (judge.totalMarks / 50) * 100
              : (judge.totalMarks / 40) * 100;

          content += `<tr><td style="border: 1px solid #000; padding: 6px;">${
            judge.judgeName || "Judge " + (jIndex + 1)
          }</td><td style="border: 1px solid #000; padding: 6px;">${
            judge.judgeEmail || "N/A"
          }</td>`;

          if (selectedCategory === "student") {
            content += `
            <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
              judge.marks?.uniqueness || "0"
            }</td>
            <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
              judge.marks?.proofOfConcept || "0"
            }</td>
            <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
              judge.marks?.functionalitiesFeatures || "0"
            }</td>
            <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
              judge.marks?.quality || "0"
            }</td>
            <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
              judge.marks?.presentation || "0"
            }</td>
          `;
          } else {
            content += `
            <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
              judge.marks?.uniqueness || "0"
            }</td>
            <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
              judge.marks?.marketPotentialValuePublic || "0"
            }</td>
            <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
              judge.marks?.functionalitiesFeatures || "0"
            }</td>
            <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
              judge.marks?.qualityTechnology || "0"
            }</td>
          `;
          }

          content += `<td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold;">${safeToFixed(
            judge.totalMarks
          )} / ${getTotalMarks()}</td><td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold;">${safeToFixed(
            judgePercentage,
            2
          )}%</td></tr>`;
        });

        content += `</tbody></table>`;
      }

      content += `
      <div style="margin-top: 30px; page-break-inside: avoid;">
        <h4>Judge Signatures for This Project</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-top: 15px;">
          ${entry.judgeMarks
            .map(
              (judge, jIndex) => `
            <div style="text-align: center;">
              <div style="font-weight: bold;">${
                judge.judgeName || "Judge " + (jIndex + 1)
              }</div>
              
              <div style="border-bottom: 1px solid #000; height: 20px; width: 200px; margin: 5px auto;"></div>
              <div style="font-size: 10px;">Signature</div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </div>`;
    });

    printContainer.innerHTML = content;
    document.body.appendChild(printContainer);

    const style = document.createElement("style");
    style.innerHTML = `
    @media print {
      body * { visibility: hidden; }
      .printable-content, .printable-content * { visibility: visible; }
      .printable-content { position: absolute; left: 0; top: 0; width: 100%; }
      div[style*="page-break-before: always"] { page-break-before: always !important; }
      div[style*="page-break-inside: avoid"] { page-break-inside: avoid !important; }
      table, tr, td, th { page-break-inside: avoid !important; }
    }
  `;
    document.head.appendChild(style);

    window.print();

    setTimeout(() => {
      document.body.removeChild(printContainer);
      document.head.removeChild(style);
    }, 1000);
  };
  const data = getCurrentData();

  const getRankIcon = (index) => {
    if (index === 0) return <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />;
    if (index === 1) return <Award className="w-5 h-5 sm:w-6 sm:h-6" />;
    if (index === 2) return <Medal className="w-5 h-5 sm:w-6 sm:h-6" />;
    return null;
  };

  // Safe mark accessor functions
  const getAverageMark = (entry, key) => {
    if (!entry.averageMarks || entry.averageMarks[key] === undefined) {
      return 0;
    }
    return entry.averageMarks[key];
  };

  const getJudgeMark = (judge, key) => {
    if (!judge.marks || judge.marks[key] === undefined) {
      return 0;
    }
    return judge.marks[key];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-4 sm:py-6 md:py-8 px-3 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-3">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Competition Results
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-0.5 sm:mt-1">
                Bangladesh ICT & Innovation Awards 2025
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 md:p-6">
          {/* Category Tabs & Actions */}
          <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6">
            {/* Category Tabs - Scrollable on mobile */}
            <div className="overflow-x-auto -mx-3 sm:mx-0 px-3 sm:px-0 pb-2 sm:pb-0">
              <div className="flex gap-2 min-w-max sm:min-w-0">
                {["student", "organisation", "individualGroup"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setFilters({ headCategory: "", solutionCategory: "" });
                    }}
                    className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium text-xs sm:text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat === "student"
                      ? "🎓 Student"
                      : cat === "organisation"
                      ? "🏢 Organisation"
                      : "👥 Individual/Group"}
                  </button>
                ))}
              </div>
            </div>

            {/* Print Buttons */}
            <div className="flex gap-2 sm:gap-3">
              <button
                onClick={handlePrint}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm md:text-base font-semibold"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Export PDF</span>
                <span className="xs:hidden">PDF</span>
              </button>
              <button
                onClick={handlePrint}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm md:text-base font-semibold"
              >
                <Printer className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">Print</span>
                <span className="xs:hidden">Print</span>
              </button>
            </div>
          </div>

          {/* Filters - APPLIES TO ALL CATEGORIES INCLUDING STUDENT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl border-2 border-blue-100">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                Filter by Head Category
              </label>
              <select
                value={filters.headCategory}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    headCategory: e.target.value,
                    solutionCategory: "",
                  })
                }
                className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">All Categories</option>
                {Object.keys(headCategories).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {filters.headCategory && (
              <div className="animate-slideIn">
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                  Filter by Solution Category (Optional)
                </label>
                <select
                  value={filters.solutionCategory}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      solutionCategory: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 sm:py-2.5 text-xs sm:text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">All Solutions</option>
                  {headCategories[filters.headCategory]?.solutions.map(
                    (sol) => (
                      <option key={sol} value={sol}>
                        {sol}
                      </option>
                    )
                  )}
                </select>
              </div>
            )}
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="text-center py-12 sm:py-16">
              <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-4 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-sm sm:text-base text-gray-600 font-medium">
                Loading results...
              </p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <p className="text-sm sm:text-base text-red-800">{error}</p>
            </div>
          ) : data.length === 0 ? (
            <div className="text-center py-12 sm:py-16 text-gray-500">
              <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 opacity-50" />
              <p className="text-sm sm:text-base">
                No results available for this category
              </p>
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-300">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Rank
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Solution
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Head Category
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        {selectedCategory === "student"
                          ? "Contact"
                          : "Category"}
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        Judges
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        Score
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        Percentage
                      </th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {data.map((entry, index) => (
                      <React.Fragment key={entry._id}>
                        <tr
                          className={
                            index < 3 ? "bg-yellow-50" : "hover:bg-gray-50"
                          }
                        >
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                                index === 0
                                  ? "bg-yellow-400 text-white"
                                  : index === 1
                                  ? "bg-gray-300 text-gray-800"
                                  : index === 2
                                  ? "bg-amber-600 text-white"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {index + 1}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">
                            {entry.solutionName}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {entry.headCategory || "N/A"}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            {selectedCategory === "student" ? (
                              <div>
                                <div>{entry.contactPersonName}</div>
                                <div className="text-xs text-gray-500">
                                  {entry.contactPersonEmail}
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="text-xs">
                                  {entry.headCategory}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {entry.solutionCategory}
                                </div>
                              </div>
                            )}
                          </td>
                          <td className="px-4 py-3 text-center text-sm text-gray-600">
                            {entry.numberOfJudges}
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className="text-lg font-bold text-blue-600">
                              {safeToFixed(entry.totalAverageMarks)}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <span className="text-lg font-bold text-green-600">
                              {safeToFixed(entry.percentageMarks, 2)}%
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <button
                              onClick={() =>
                                setExpandedProject(
                                  expandedProject === entry._id
                                    ? null
                                    : entry._id
                                )
                              }
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              {expandedProject === entry._id ? (
                                <ChevronUp className="w-5 h-5" />
                              ) : (
                                <ChevronDown className="w-5 h-5" />
                              )}
                            </button>
                          </td>
                        </tr>

                        {expandedProject === entry._id && (
                          <tr>
                            <td colSpan="7" className="px-4 py-4 bg-gray-50">
                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">
                                    Average Criteria Scores:
                                  </h4>
                                  <div
                                    className={`grid gap-4 ${
                                      selectedCategory === "student"
                                        ? "grid-cols-5"
                                        : "grid-cols-4"
                                    }`}
                                  >
                                    {selectedCategory === "student" ? (
                                      <>
                                        {[
                                          "uniqueness",
                                          "proofOfConcept",
                                          "functionalitiesFeatures",
                                          "quality",
                                          "presentation",
                                        ].map((key) => (
                                          <div
                                            key={key}
                                            className="bg-white p-3 rounded border"
                                          >
                                            <div className="text-gray-600 text-xs">
                                              {key === "uniqueness"
                                                ? "Uniqueness"
                                                : key === "proofOfConcept"
                                                ? "Proof"
                                                : key ===
                                                  "functionalitiesFeatures"
                                                ? "Features"
                                                : key === "quality"
                                                ? "Quality"
                                                : "Presentation"}
                                            </div>
                                            <div className="text-lg font-bold text-blue-600">
                                              {safeToFixed(
                                                getAverageMark(entry, key)
                                              )}
                                            </div>
                                          </div>
                                        ))}
                                      </>
                                    ) : (
                                      <>
                                        <div className="bg-white p-3 rounded border">
                                          <div className="text-gray-600 text-xs">
                                            Uniqueness
                                          </div>
                                          <div className="text-lg font-bold text-blue-600">
                                            {safeToFixed(
                                              getAverageMark(
                                                entry,
                                                "uniqueness"
                                              )
                                            )}
                                          </div>
                                        </div>
                                        <div className="bg-white p-3 rounded border">
                                          <div className="text-gray-600 text-xs">
                                            Market / Public Value
                                          </div>
                                          <div className="text-lg font-bold text-blue-600">
                                            {safeToFixed(
                                              getAverageMark(
                                                entry,
                                                "marketPotentialValuePublic"
                                              )
                                            )}
                                          </div>
                                        </div>
                                        <div className="bg-white p-3 rounded border">
                                          <div className="text-gray-600 text-xs">
                                            Features
                                          </div>
                                          <div className="text-lg font-bold text-blue-600">
                                            {safeToFixed(
                                              getAverageMark(
                                                entry,
                                                "functionalitiesFeatures"
                                              )
                                            )}
                                          </div>
                                        </div>
                                        <div className="bg-white p-3 rounded border">
                                          <div className="text-gray-600 text-xs">
                                            Quality & Tech
                                          </div>
                                          <div className="text-lg font-bold text-blue-600">
                                            {safeToFixed(
                                              getAverageMark(
                                                entry,
                                                "qualityTechnology"
                                              )
                                            )}
                                          </div>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-2">
                                    Individual Judge Marks:
                                  </h4>
                                  <div className="space-y-2">
                                    {entry.judgeMarks?.map((judge, idx) => (
                                      <div
                                        key={idx}
                                        className="bg-white p-3 rounded border"
                                      >
                                        <div className="flex justify-between items-center mb-2">
                                          <div>
                                            <div className="font-medium text-gray-900">
                                              {judge.judgeName}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                              {judge.judgeEmail}
                                            </div>
                                          </div>
                                          <div className="text-lg font-bold text-gray-900">
                                            {safeToFixed(judge.totalMarks)} /{" "}
                                            {getTotalMarks()}
                                          </div>
                                        </div>
                                        <div
                                          className={`grid gap-2 text-xs ${
                                            selectedCategory === "student"
                                              ? "grid-cols-5"
                                              : "grid-cols-4"
                                          }`}
                                        >
                                          {selectedCategory === "student" ? (
                                            <>
                                              <div>
                                                <span className="text-gray-600">
                                                  Unique:
                                                </span>{" "}
                                                <span className="font-medium">
                                                  {getJudgeMark(
                                                    judge,
                                                    "uniqueness"
                                                  )}
                                                </span>
                                              </div>
                                              <div>
                                                <span className="text-gray-600">
                                                  Proof:
                                                </span>{" "}
                                                <span className="font-medium">
                                                  {getJudgeMark(
                                                    judge,
                                                    "proofOfConcept"
                                                  )}
                                                </span>
                                              </div>
                                              <div>
                                                <span className="text-gray-600">
                                                  Features:
                                                </span>{" "}
                                                <span className="font-medium">
                                                  {getJudgeMark(
                                                    judge,
                                                    "functionalitiesFeatures"
                                                  )}
                                                </span>
                                              </div>
                                              <div>
                                                <span className="text-gray-600">
                                                  Quality:
                                                </span>{" "}
                                                <span className="font-medium">
                                                  {getJudgeMark(
                                                    judge,
                                                    "quality"
                                                  )}
                                                </span>
                                              </div>
                                              <div>
                                                <span className="text-gray-600">
                                                  Present:
                                                </span>{" "}
                                                <span className="font-medium">
                                                  {getJudgeMark(
                                                    judge,
                                                    "presentation"
                                                  )}
                                                </span>
                                              </div>
                                            </>
                                          ) : (
                                            <>
                                              <div>
                                                <span className="text-gray-600">
                                                  Unique:
                                                </span>{" "}
                                                <span className="font-medium">
                                                  {getJudgeMark(
                                                    judge,
                                                    "uniqueness"
                                                  )}
                                                </span>
                                              </div>
                                              <div>
                                                <span className="text-gray-600">
                                                  Market Potential / Value to
                                                  Public or Govt:
                                                </span>{" "}
                                                <span className="font-medium">
                                                  {getJudgeMark(
                                                    judge,
                                                    "marketPotentialValuePublic"
                                                  )}
                                                </span>
                                              </div>
                                              <div>
                                                <span className="text-gray-600">
                                                  Features:
                                                </span>{" "}
                                                <span className="font-medium">
                                                  {getJudgeMark(
                                                    judge,
                                                    "functionalitiesFeatures"
                                                  )}
                                                </span>
                                              </div>
                                              <div>
                                                <span className="text-gray-600">
                                                  Quality:
                                                </span>{" "}
                                                <span className="font-medium">
                                                  {getJudgeMark(
                                                    judge,
                                                    "qualityTechnology"
                                                  )}
                                                </span>
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile/Tablet Card View */}
              <div className="lg:hidden space-y-3 sm:space-y-4">
                {data.map((entry, index) => (
                  <div
                    key={entry._id}
                    className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      index < 3
                        ? "border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50 shadow-lg"
                        : "border-gray-200 bg-white shadow-md hover:shadow-lg"
                    }`}
                  >
                    <div className="p-3 sm:p-4">
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg ${
                            index === 0
                              ? "bg-yellow-400 text-white"
                              : index === 1
                              ? "bg-gray-300 text-gray-800"
                              : index === 2
                              ? "bg-amber-600 text-white"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {getRankIcon(index) || index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-1 line-clamp-2">
                            {entry.solutionName}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 truncate">
                            {entry.headCategory || "N/A"}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg sm:text-xl md:text-2xl font-black text-blue-600">
                            {safeToFixed(entry.totalAverageMarks)}
                          </div>
                          <div className="text-xs text-gray-500">Score</div>
                          <div className="text-sm sm:text-base md:text-lg font-bold text-green-600 mt-1">
                            {safeToFixed(entry.percentageMarks, 3)}%
                          </div>
                          <div className="text-xs text-gray-500">
                            Percentage
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 text-xs sm:text-sm">
                        {entry.headCategory && (
                          <div className="bg-white bg-opacity-50 p-2 rounded">
                            <span className="text-gray-600 font-medium">
                              Head Category:
                            </span>
                            <div className="font-semibold text-gray-900 text-xs line-clamp-2">
                              {entry.headCategory}
                            </div>
                          </div>
                        )}
                        {entry.solutionCategory && (
                          <div className="bg-white bg-opacity-50 p-2 rounded">
                            <span className="text-gray-600 font-medium">
                              Solution:
                            </span>
                            <div className="font-semibold text-gray-900 text-xs line-clamp-2">
                              {entry.solutionCategory}
                            </div>
                          </div>
                        )}
                        <div className="bg-white bg-opacity-50 p-2 rounded col-span-2 sm:col-span-1">
                          <span className="text-gray-600 font-medium">
                            Judges:
                          </span>
                          <div className="font-bold text-gray-900">
                            {entry.numberOfJudges}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          setExpandedProject(
                            expandedProject === entry._id ? null : entry._id
                          )
                        }
                        className="w-full flex items-center justify-center gap-2 py-2 sm:py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-xs sm:text-sm hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
                      >
                        {expandedProject === entry._id ? (
                          <>
                            Hide Details <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            View Details <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {expandedProject === entry._id && (
                      <div className="border-t-2 border-gray-200 p-3 sm:p-4 bg-white animate-slideIn">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-2 sm:mb-3">
                              Average Scores:
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                              {selectedCategory === "student" ? (
                                <>
                                  {[
                                    "uniqueness",
                                    "proofOfConcept",
                                    "functionalitiesFeatures",
                                    "quality",
                                    "presentation",
                                  ].map((key) => (
                                    <div
                                      key={key}
                                      className="bg-gradient-to-br from-blue-50 to-purple-50 p-2 sm:p-3 rounded-lg border border-blue-100"
                                    >
                                      <div className="text-xs text-gray-600 mb-1">
                                        {key === "uniqueness"
                                          ? "Uniqueness"
                                          : key === "proofOfConcept"
                                          ? "Proof"
                                          : key === "functionalitiesFeatures"
                                          ? "Features"
                                          : key === "quality"
                                          ? "Quality"
                                          : "Presentation"}
                                      </div>
                                      <div className="text-base sm:text-lg font-bold text-blue-600">
                                        {safeToFixed(
                                          getAverageMark(entry, key)
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </>
                              ) : (
                                <>
                                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-2 sm:p-3 rounded-lg border border-blue-100">
                                    <div className="text-xs text-gray-600 mb-1">
                                      Uniqueness
                                    </div>
                                    <div className="text-base sm:text-lg font-bold text-blue-600">
                                      {safeToFixed(
                                        getAverageMark(entry, "uniqueness")
                                      )}
                                    </div>
                                  </div>
                                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-2 sm:p-3 rounded-lg border border-blue-100">
                                    <div className="text-xs text-gray-600 mb-1">
                                      Market / Public Value
                                    </div>
                                    <div className="text-base sm:text-lg font-bold text-blue-600">
                                      {safeToFixed(
                                        getAverageMark(
                                          entry,
                                          "marketPotentialValuePublic"
                                        )
                                      )}
                                    </div>
                                  </div>
                                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-2 sm:p-3 rounded-lg border border-blue-100">
                                    <div className="text-xs text-gray-600 mb-1">
                                      Features
                                    </div>
                                    <div className="text-base sm:text-lg font-bold text-blue-600">
                                      {safeToFixed(
                                        getAverageMark(
                                          entry,
                                          "functionalitiesFeatures"
                                        )
                                      )}
                                    </div>
                                  </div>
                                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-2 sm:p-3 rounded-lg border border-blue-100">
                                    <div className="text-xs text-gray-600 mb-1">
                                      Quality & Tech
                                    </div>
                                    <div className="text-base sm:text-lg font-bold text-blue-600">
                                      {safeToFixed(
                                        getAverageMark(
                                          entry,
                                          "qualityTechnology"
                                        )
                                      )}
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-bold text-sm sm:text-base text-gray-900 mb-2 sm:mb-3">
                              Judge Marks:
                            </h4>
                            <div className="space-y-2 sm:space-y-3">
                              {entry.judgeMarks?.map((judge, idx) => (
                                <div
                                  key={idx}
                                  className="bg-gradient-to-r from-gray-50 to-blue-50 p-3 rounded-lg border border-gray-200"
                                >
                                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                                    <div className="flex-1">
                                      <div className="font-semibold text-sm sm:text-base text-gray-900">
                                        {judge.judgeName}
                                      </div>
                                      <div className="text-xs text-gray-500 truncate">
                                        {judge.judgeEmail}
                                      </div>
                                    </div>
                                    <div className="text-lg sm:text-xl font-black text-gray-900 whitespace-nowrap">
                                      {safeToFixed(judge.totalMarks)}{" "}
                                      <span className="text-sm text-gray-500">
                                        / {getTotalMarks()}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                                    {selectedCategory === "student" ? (
                                      <>
                                        <div className="bg-white p-1.5 rounded">
                                          <span className="text-gray-600">
                                            Unique:
                                          </span>
                                          <span className="font-bold ml-1">
                                            {getJudgeMark(judge, "uniqueness")}
                                          </span>
                                        </div>
                                        <div className="bg-white p-1.5 rounded">
                                          <span className="text-gray-600">
                                            Proof:
                                          </span>
                                          <span className="font-bold ml-1">
                                            {getJudgeMark(
                                              judge,
                                              "proofOfConcept"
                                            )}
                                          </span>
                                        </div>
                                        <div className="bg-white p-1.5 rounded">
                                          <span className="text-gray-600">
                                            Feat:
                                          </span>
                                          <span className="font-bold ml-1">
                                            {getJudgeMark(
                                              judge,
                                              "functionalitiesFeatures"
                                            )}
                                          </span>
                                        </div>
                                        <div className="bg-white p-1.5 rounded">
                                          <span className="text-gray-600">
                                            Qual:
                                          </span>
                                          <span className="font-bold ml-1">
                                            {getJudgeMark(judge, "quality")}
                                          </span>
                                        </div>
                                        <div className="bg-white p-1.5 rounded col-span-2 sm:col-span-4">
                                          <span className="text-gray-600">
                                            Present:
                                          </span>
                                          <span className="font-bold ml-1">
                                            {getJudgeMark(
                                              judge,
                                              "presentation"
                                            )}
                                          </span>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <div className="bg-white p-1.5 rounded">
                                          <span className="text-gray-600">
                                            Unique:
                                          </span>
                                          <span className="font-bold ml-1">
                                            {getJudgeMark(judge, "uniqueness")}
                                          </span>
                                        </div>
                                        <div className="bg-white p-1.5 rounded">
                                          <span className="text-gray-600">
                                            Market/Public:
                                          </span>
                                          <span className="font-bold ml-1">
                                            {getJudgeMark(
                                              judge,
                                              "marketPotentialValuePublic"
                                            )}
                                          </span>
                                        </div>
                                        <div className="bg-white p-1.5 rounded">
                                          <span className="text-gray-600">
                                            Feat:
                                          </span>
                                          <span className="font-bold ml-1">
                                            {getJudgeMark(
                                              judge,
                                              "functionalitiesFeatures"
                                            )}
                                          </span>
                                        </div>
                                        <div className="bg-white p-1.5 rounded">
                                          <span className="text-gray-600">
                                            Qual:
                                          </span>
                                          <span className="font-bold ml-1">
                                            {getJudgeMark(
                                              judge,
                                              "qualityTechnology"
                                            )}
                                          </span>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Custom breakpoint for very small screens */
        @media (min-width: 475px) {
          .xs\:inline {
            display: inline;
          }
          .xs\:hidden {
            display: none;
          }
        }

        /* Ensure touch targets are at least 44x44px on mobile */
        @media (max-width: 640px) {
          button {
            min-height: 44px;
            min-width: 44px;
          }
        }

        /* Smooth scrolling for better UX */
        html {
          scroll-behavior: smooth;
        }

        /* Improve text rendering on all devices */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default ResultsPage;

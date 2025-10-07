import { useState, useEffect } from "react";
import { FileText, Printer, ChevronDown, ChevronUp, Users } from "lucide-react";

const API_BASE = "http://localhost:5000/api";

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

      if (selectedCategory !== "student") {
        const params = new URLSearchParams();
        if (filters.headCategory)
          params.append("headCategory", filters.headCategory);
        if (filters.solutionCategory)
          params.append("solutionCategory", filters.solutionCategory);
        if (params.toString()) url += `?${params}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (selectedCategory === "student") {
        setStudentLeaderboard(data);
      } else if (selectedCategory === "organisation") {
        setOrganisationLeaderboard(data);
      } else {
        setIndividualGroupLeaderboard(data);
      }
    } catch (err) {
      setError("Failed to load leaderboard");
    } finally {
      setLoading(false);
    }
  };

  const getCurrentData = () => {
    if (selectedCategory === "student") return studentLeaderboard;
    if (selectedCategory === "organisation") return organisationLeaderboard;
    return individualGroupLeaderboard;
  };

  const handlePrint = () => {
    const data = getCurrentData();
    if (!data || data.length === 0) {
      alert("No data available to print");
      return;
    }

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
        </h2>
        <p>Generated on: ${new Date().toLocaleDateString()}</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
        <thead>
          <tr>
            <th style="border: 1px solid #000; padding: 8px;">Rank</th>
            <th style="border: 1px solid #000; padding: 8px;">Solution Name</th>
            <th style="border: 1px solid #000; padding: 8px;">Organization</th>
            <th style="border: 1px solid #000; padding: 8px;">${
              selectedCategory === "student" ? "Contact" : "Category"
            }</th>
            <th style="border: 1px solid #000; padding: 8px;">Judges</th>
            <th style="border: 1px solid #000; padding: 8px;">Avg Score</th>
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
          <td style="border: 1px solid #000; padding: 6px;">${
            entry.organizationName || "N/A"
          }</td>
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
          <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
            entry.numberOfJudges || 0
          }</td>
          <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
            entry.totalAverageMarks
              ? entry.totalAverageMarks.toFixed(2)
              : "0.00"
          }</td>
        </tr>
      `;
    });

    content += `</tbody></table><h2 style="margin-top: 40px; border-top: 2px solid #333; padding-top: 20px;">Detailed Project Reports</h2>`;

    data.forEach((entry, index) => {
      content += `
        <div style="margin-top: 40px; page-break-before: always;">
          <h3 style="color: #1e3a8a;">${index + 1}. ${
        entry.solutionName || "N/A"
      }</h3>
          <p><strong>Organization:</strong> ${
            entry.organizationName || "N/A"
          }</p>
          <p><strong>Category:</strong> ${
            selectedCategory === "student"
              ? `${entry.contactPersonName || ""} (${
                  entry.contactPersonEmail || ""
                })`
              : `${entry.headCategory || "N/A"} / ${
                  entry.solutionCategory || "N/A"
                }`
          }</p>
          <p><strong>Average Score:</strong> ${
            entry.totalAverageMarks
              ? entry.totalAverageMarks.toFixed(2)
              : "0.00"
          }</p>
      `;

      if (entry.judgeMarks && entry.judgeMarks.length > 0) {
        content += `<table style="width: 100%; border-collapse: collapse; margin-top: 15px;"><thead><tr><th style="border: 1px solid #000; padding: 6px;">Judge Name</th><th style="border: 1px solid #000; padding: 6px;">Email</th>`;

        if (selectedCategory === "student") {
          content += `<th style="border: 1px solid #000; padding: 6px;">Uniqueness</th><th style="border: 1px solid #000; padding: 6px;">Proof of Concept</th><th style="border: 1px solid #000; padding: 6px;">Features</th><th style="border: 1px solid #000; padding: 6px;">Quality</th><th style="border: 1px solid #000; padding: 6px;">Presentation</th>`;
        } else {
          content += `<th style="border: 1px solid #000; padding: 6px;">Uniqueness</th><th style="border: 1px solid #000; padding: 6px;">${
            entry.headCategory &&
            (entry.headCategory.includes("(HC-IC)") ||
              entry.headCategory.includes("(HC-PSG)"))
              ? "Public Value"
              : "Market Potential"
          }</th><th style="border: 1px solid #000; padding: 6px;">Features</th><th style="border: 1px solid #000; padding: 6px;">Quality & Tech</th>`;
        }

        content += `<th style="border: 1px solid #000; padding: 6px;">Total Marks</th></tr></thead><tbody>`;

        entry.judgeMarks.forEach((judge, jIndex) => {
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
                judge.marks?.criteriaTwo || "0"
              }</td>
              <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
                judge.marks?.functionalitiesFeatures || "0"
              }</td>
              <td style="border: 1px solid #000; padding: 6px; text-align: center;">${
                judge.marks?.qualityTechnology || "0"
              }</td>
            `;
          }

          content += `<td style="border: 1px solid #000; padding: 6px; text-align: center; font-weight: bold;">${
            judge.totalMarks ? judge.totalMarks.toFixed(2) : "0.00"
          }</td></tr>`;
        });

        content += `</tbody></table>`;
      }

      content += `
        <div style="margin-top: 30px;">
          <h4>Signatures</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 40px; margin-top: 15px;">
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

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Competition Results
          </h1>
          <p className="text-gray-600">
            Bangladesh ICT & Innovation Awards 2025
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-2">
              {["student", "organisation", "individualGroup"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setFilters({ headCategory: "", solutionCategory: "" });
                  }}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat === "student"
                    ? "Student"
                    : cat === "organisation"
                    ? "Organisation"
                    : "Individual/Group"}
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <FileText className="w-4 h-4" />
                PDF
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Printer className="w-4 h-4" />
                Print
              </button>
            </div>
          </div>

          {selectedCategory !== "student" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Filter by Solution Category
                  </label>
                  <select
                    value={filters.solutionCategory}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        solutionCategory: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
          )}

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading results...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-red-800">{error}</p>
            </div>
          ) : data.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>No results available for this category</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
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
                      Organization
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                      {selectedCategory === "student" ? "Contact" : "Category"}
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                      Judges
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                      Score
                    </th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((entry, index) => (
                    <>
                      <tr
                        key={entry._id}
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
                          {entry.organizationName}
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
                            {entry.totalAverageMarks.toFixed(2)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <button
                            onClick={() =>
                              setExpandedProject(
                                expandedProject === entry._id ? null : entry._id
                              )
                            }
                            className="text-blue-600 hover:text-blue-800"
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
                                  className={`grid gap-4 text-sm ${
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
                                            {entry.averageMarks[key].toFixed(2)}
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
                                          {entry.averageMarks.uniqueness.toFixed(
                                            2
                                          )}
                                        </div>
                                      </div>
                                      <div className="bg-white p-3 rounded border">
                                        <div className="text-gray-600 text-xs">
                                          {entry.headCategory?.includes(
                                            "(HC-IC)"
                                          ) ||
                                          entry.headCategory?.includes(
                                            "(HC-PSG)"
                                          )
                                            ? "Public Value"
                                            : "Market"}
                                        </div>
                                        <div className="text-lg font-bold text-blue-600">
                                          {entry.averageMarks.criteriaTwo.toFixed(
                                            2
                                          )}
                                        </div>
                                      </div>
                                      <div className="bg-white p-3 rounded border">
                                        <div className="text-gray-600 text-xs">
                                          Features
                                        </div>
                                        <div className="text-lg font-bold text-blue-600">
                                          {entry.averageMarks.functionalitiesFeatures.toFixed(
                                            2
                                          )}
                                        </div>
                                      </div>
                                      <div className="bg-white p-3 rounded border">
                                        <div className="text-gray-600 text-xs">
                                          Quality
                                        </div>
                                        <div className="text-lg font-bold text-blue-600">
                                          {entry.averageMarks.qualityTechnology.toFixed(
                                            2
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
                                  {entry.judgeMarks.map((judge, idx) => (
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
                                          {judge.totalMarks.toFixed(2)} /{" "}
                                          {selectedCategory === "student"
                                            ? "100"
                                            : "100"}
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
                                                Uniqueness:
                                              </span>{" "}
                                              <span className="font-medium">
                                                {judge.marks.uniqueness}
                                              </span>
                                            </div>
                                            <div>
                                              <span className="text-gray-600">
                                                Proof:
                                              </span>{" "}
                                              <span className="font-medium">
                                                {judge.marks.proofOfConcept}
                                              </span>
                                            </div>
                                            <div>
                                              <span className="text-gray-600">
                                                Features:
                                              </span>{" "}
                                              <span className="font-medium">
                                                {
                                                  judge.marks
                                                    .functionalitiesFeatures
                                                }
                                              </span>
                                            </div>
                                            <div>
                                              <span className="text-gray-600">
                                                Quality:
                                              </span>{" "}
                                              <span className="font-medium">
                                                {judge.marks.quality}
                                              </span>
                                            </div>
                                            <div>
                                              <span className="text-gray-600">
                                                Present:
                                              </span>{" "}
                                              <span className="font-medium">
                                                {judge.marks.presentation}
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
                                                {judge.marks.uniqueness}
                                              </span>
                                            </div>
                                            <div>
                                              <span className="text-gray-600">
                                                Criteria2:
                                              </span>{" "}
                                              <span className="font-medium">
                                                {judge.marks.criteriaTwo}
                                              </span>
                                            </div>
                                            <div>
                                              <span className="text-gray-600">
                                                Features:
                                              </span>{" "}
                                              <span className="font-medium">
                                                {
                                                  judge.marks
                                                    .functionalitiesFeatures
                                                }
                                              </span>
                                            </div>
                                            <div>
                                              <span className="text-gray-600">
                                                Quality:
                                              </span>{" "}
                                              <span className="font-medium">
                                                {judge.marks.qualityTechnology}
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
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;

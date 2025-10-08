import { useState, useEffect } from "react";
import {
  Search,
  LogOut,
  ChevronDown,
  ChevronUp,
  Award,
  CheckCircle,
  XCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";

const API_BASE = "https://biin-award-function-rssj.onrender.com/api";

// ✅ KEEP ALL HEAD CATEGORIES - Don't remove any options
const allHeadCategories = [
  "Consumer (HC-C)",
  "Industrial (HC-I)",
  "Business Services (HC-BS)",
  "Inclusions & Community Services (HC-ICS)",
  "Public Sector and Government (HC-PSG)",
];

// Enhanced Modal Component
const Modal = ({ isOpen, onClose, type, message }) => {
  if (!isOpen) return null;

  const configs = {
    success: {
      icon: CheckCircle,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      titleColor: "text-green-900",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    error: {
      icon: XCircle,
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconColor: "text-red-600",
      titleColor: "text-red-900",
      buttonColor: "bg-red-600 hover:bg-red-700",
    },
    warning: {
      icon: AlertCircle,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600",
      title: "No Projects Available",
      titleColor: "text-yellow-900",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    },
  };

  const config = configs[type] || configs.error;
  const Icon = config.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform animate-scaleIn">
        <div
          className={`${config.bgColor} ${config.borderColor} border-2 rounded-t-2xl p-6`}
        >
          <div className="flex items-center justify-center mb-4">
            <div
              className={`${config.iconColor} bg-white rounded-full p-3 shadow-lg animate-bounce`}
            >
              <Icon className="w-12 h-12" />
            </div>
          </div>
          <h3
            className={`text-xl font-bold text-center ${config.titleColor} mb-2`}
          >
            {type === "success"
              ? "Success!"
              : type === "error"
              ? "Oops!"
              : config.title || "Warning!"}
          </h3>
          <p className="text-center text-gray-700 text-sm leading-relaxed">
            {message}
          </p>
        </div>
        <div className="p-6">
          <button
            onClick={onClose}
            className={`w-full ${config.buttonColor} text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg`}
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

const JudgeMarkingSystem = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const [judgeInfo, setJudgeInfo] = useState(null);
  const [applicationEntity, setApplicationEntity] = useState("");
  const [headCategory, setHeadCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [marks, setMarks] = useState({});

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, type: "", message: "" });
  const [availableHeadCategories, setAvailableHeadCategories] = useState([]);

  useEffect(() => {
    if (applicationEntity) {
      fetchHeadCategories();
    } else {
      setAvailableHeadCategories([]);
    }
  }, [applicationEntity]);

  // ✅ UPDATED: Show ALL categories but track which ones have projects
  const fetchHeadCategories = async () => {
    try {
      const response = await fetch(
        `${API_BASE}/marking/head-categories?applicationEntity=${applicationEntity}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch head categories");
      }

      const data = await response.json();
      console.log("Available head categories with projects:", data);

      // ✅ FIX: Always show ALL categories, but we'll track which ones have projects
      const categoriesWithProjects = Array.isArray(data) ? data : [];

      console.log("Categories with projects:", categoriesWithProjects);

      // ✅ IMPORTANT: Always set to ALL categories, don't filter out any
      setAvailableHeadCategories(allHeadCategories);
    } catch (err) {
      console.error("Error fetching head categories:", err);
      // Even on error, show all categories
      setAvailableHeadCategories(allHeadCategories);
    }
  };

 useEffect(() => {
   // ✅ FIX: Try to restore session on mount
   const restoreSession = () => {
     try {
       const savedToken = localStorage.getItem("judgeToken");
       const savedJudge = localStorage.getItem("judgeInfo");

       console.log("Restoring session:", {
         hasToken: !!savedToken,
         hasJudge: !!savedJudge,
       });

       if (savedToken && savedJudge) {
         const judgeData = JSON.parse(savedJudge);
         setToken(savedToken);
         setJudgeInfo(judgeData);
         setIsAuthenticated(true);
         console.log("Session restored successfully");
       } else {
         console.log("No saved session found");
       }
     } catch (error) {
       console.error("Error restoring session:", error);
       // Clear corrupted data
       localStorage.removeItem("judgeToken");
       localStorage.removeItem("judgeInfo");
     }
   };

   restoreSession();
 }, []);

  const showModal = (type, message) => {
    setModal({ isOpen: true, type, message });
  };

  const closeModal = () => {
    setModal({ isOpen: false, type: "", message: "" });
  };

  const apiCall = async (endpoint, method = "GET", body = null) => {
    const headers = {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const response = await fetch(`${API_BASE}${endpoint}`, {
      method,
      headers,
      ...(body && { body: JSON.stringify(body) }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || "Request failed");
    return data;
  };

 const handleAuth = async (e) => {
   e.preventDefault();
   setLoading(true);

   try {
     const endpoint = authMode === "login" ? "/judges/login" : "/judges/signup";
     const data = await apiCall(endpoint, "POST", authForm);

     if (authMode === "login") {
       // FIX: Store in localStorage FIRST, then update state
       localStorage.setItem("judgeToken", data.token);
       localStorage.setItem("judgeInfo", JSON.stringify(data.judge));

       // FIX: Use a small delay to ensure localStorage is written
       await new Promise((resolve) => setTimeout(resolve, 100));

       //  FIX: Update state after localStorage is confirmed
       setToken(data.token);
       setJudgeInfo(data.judge);
       setIsAuthenticated(true);

       //  FIX: Close modal automatically after success
       showModal("success", "Welcome back! You've successfully logged in.");

       //  FIX: Auto-close modal and ensure authentication state is set
       setTimeout(() => {
         closeModal();
       }, 1500);
     } else {
       showModal(
         "success",
         "Registration successful! Please login to continue."
       );
       setAuthMode("login");
       setAuthForm({ name: "", email: "", password: "" });
     }
   } catch (err) {
     showModal("error", err.message);
   } finally {
     setLoading(false);
   }
 };
  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    setToken("");
    setJudgeInfo(null);
    resetState();
    showModal("success", "You've been logged out successfully.");
  };

  const resetState = () => {
    setApplicationEntity("");
    setHeadCategory("");
    setSearchTerm("");
    setProjects([]);
    setSelectedProject(null);
    setMarks({});
  };

  const fetchProjects = async () => {
    setLoading(true);

    try {
      const body = {
        applicationEntity,
        headCategory,
        search: searchTerm,
      };

      console.log("Fetching projects with filters:", body);

      const data = await apiCall("/marking/registrations", "POST", body);

      console.log("Received projects:", data);
      console.log("Number of projects:", data.length);

      setProjects(data);

      // ✅ FIX: Show specific warning when no projects found for selected category
      if (data.length === 0) {
        showModal(
          "warning",
          `No projects found for ${headCategory} in ${applicationEntity} category. Please select a different head category.`
        );
      }
    } catch (err) {
      console.error("Error fetching projects:", err);
      showModal("error", err.message);
    } finally {
      setLoading(false);
    }
  };

  const checkAndSelectProject = async (project) => {
    setLoading(true);

    try {
      const data = await apiCall(`/marking/check/${project._id}`);

      if (data.hasMarked) {
        showModal(
          "warning",
          "You have already evaluated this project. Please select another one."
        );
        setSelectedProject(null);
      } else {
        setSelectedProject(project);
        initializeMarks(project);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      showModal("error", err.message);
    } finally {
      setLoading(false);
    }
  };

  const initializeMarks = (project) => {
    if (project.applicationEntity === "Student") {
      setMarks({
        uniqueness: "",
        proofOfConcept: "",
        functionalitiesFeatures: "",
        quality: "",
        presentation: "",
      });
    } else {
      setMarks({
        uniqueness: "",
        marketPotentialValuePublic: "",
        functionalitiesFeatures: "",
        qualityTechnology: "",
      });
    }
  };

  const validateMarks = () => {
    const maxMark = selectedProject?.applicationEntity === "Student" ? 10 : 10;

    for (const [key, value] of Object.entries(marks)) {
      const numValue = parseFloat(value);
      if (isNaN(numValue) || numValue < 0 || numValue > maxMark) {
        showModal(
          "error",
          `Invalid mark for ${key}. Please enter a value between 0 and ${maxMark}.`
        );
        return false;
      }
    }
    return true;
  };

  const submitMarking = async (e) => {
    e.preventDefault();

    if (!validateMarks()) return;

    setLoading(true);

    try {
      const body = {
        projectId: selectedProject._id,
        applicationEntity: selectedProject.applicationEntity,
        marks,
      };

      await apiCall("/marking/mark", "POST", body);
      showModal(
        "success",
        "Evaluation submitted successfully! Thank you for your contribution."
      );
      setSelectedProject(null);
      setMarks({});
      fetchProjects();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      showModal("error", err.message);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = () => {
    return Object.values(marks).reduce(
      (sum, val) => sum + (parseFloat(val) || 0),
      0
    );
  };

  const getMaxMarks = () => {
    return selectedProject?.applicationEntity === "Student" ? 50 : 40;
  };

  // AUTH VIEW
  if (!isAuthenticated) {
    return (
      <>
        <Modal {...modal} onClose={closeModal} />
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-12 px-4 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="max-w-md mx-auto relative z-10">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-4 shadow-lg animate-pulse">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Judge Portal
                </h1>
                <p className="text-gray-600 text-sm font-medium">
                  Bangladesh ICT & Innovation Awards 2025
                </p>
              </div>

              <div className="flex gap-2 mb-6 bg-gradient-to-r from-gray-100 to-gray-200 p-1 rounded-xl shadow-inner">
                <button
                  onClick={() => setAuthMode("login")}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    authMode === "login"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:bg-white/50"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setAuthMode("register")}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    authMode === "register"
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:bg-white/50"
                  }`}
                >
                  Register
                </button>
              </div>

              <form onSubmit={handleAuth} className="space-y-5">
                {authMode === "register" && (
                  <div className="transform transition-all duration-300">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={authForm.name}
                      onChange={(e) =>
                        setAuthForm({ ...authForm, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={authForm.email}
                    onChange={(e) =>
                      setAuthForm({ ...authForm, email: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    required
                    value={authForm.password}
                    onChange={(e) =>
                      setAuthForm({ ...authForm, password: e.target.value })
                    }
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      {authMode === "login" ? "Login" : "Register"}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

  // MAIN APP
  return (
    <>
      <Modal {...modal} onClose={closeModal} />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
        {/* Enhanced animated background patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400 to-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border-4 border-blue-400 rounded-lg transform rotate-45 animate-spin-slow"></div>
          <div className="absolute top-60 right-40 w-24 h-24 border-4 border-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-60 w-40 h-40 border-4 border-pink-400 transform rotate-12 animate-bounce-slow"></div>
        </div>

        <header className="bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-blue-100 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-5">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Project Evaluation
                  </h1>
                  <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Welcome,{" "}
                    <span className="font-semibold">{judgeInfo?.name}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold"
              >
                <LogOut className="w-4 h-4 md:w-5 md:h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-6 md:py-8 relative z-10">
          {/* PROJECT SELECTION */}
          {!selectedProject && (
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border-2 border-blue-100 transform hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 rounded-xl">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Select Projects to Evaluate
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      1
                    </span>
                    Application Entity <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={applicationEntity}
                    onChange={(e) => {
                      setApplicationEntity(e.target.value);
                      setHeadCategory("");
                      setProjects([]);
                    }}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 text-lg font-medium bg-gradient-to-r from-white to-blue-50"
                  >
                    <option value="">Select Application Entity</option>
                    <option value="Student">🎓 Student</option>
                    <option value="Organisation">🏢 Organisation</option>
                    <option value="Individual or Group">
                      👥 Individual or Group
                    </option>
                  </select>
                </div>

                {/* ✅ UPDATED: Head Category Filter - Shows ALL categories */}
                {applicationEntity && (
                  <div className="transform transition-all duration-300 animate-slideDown">
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                        2
                      </span>
                      Head Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={headCategory}
                      onChange={(e) => {
                        setHeadCategory(e.target.value);
                        setProjects([]);
                      }}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 text-lg font-medium bg-gradient-to-r from-white to-purple-50"
                    >
                      <option value="">Select Head Category</option>
                      {allHeadCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>

                    {/* ✅ FIX: Show helpful message when no projects exist for selected category */}
                    {headCategory && projects.length === 0 && (
                      <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-blue-700 text-sm">
                          ℹ️ Select "{headCategory}" and click "Load Projects"
                          to check for available projects.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {applicationEntity && headCategory && (
                  <div className="transform transition-all duration-300 animate-slideDown">
                    <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                      <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                        3
                      </span>
                      Search Projects (Optional)
                    </label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Type to search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 text-lg"
                      />
                    </div>
                  </div>
                )}

                {applicationEntity && headCategory && (
                  <button
                    onClick={fetchProjects}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Loading Projects...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5" />
                        Load Projects
                      </>
                    )}
                  </button>
                )}
              </div>

              {projects.length > 0 && (
                <div className="mt-8 animate-fadeIn">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full">
                      <span className="text-green-700 font-bold text-sm">
                        {projects.length} Projects Found
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {projects.map((project, index) => (
                      <div
                        key={project._id}
                        className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:scale-102 bg-gradient-to-r from-white to-blue-50"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div
                          className="p-5 cursor-pointer"
                          onClick={() =>
                            setExpandedProject(
                              expandedProject === project._id
                                ? null
                                : project._id
                            )
                          }
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2">
                                <span className="text-blue-600">
                                  #{index + 1}
                                </span>
                                {project.solutionName}
                              </h4>
                              <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                                <span className="font-semibold">🏢</span>
                                {project.organizationName}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                                  {project.applicationEntity}
                                </span>
                                {project.headCategory && (
                                  <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                                    {project.headCategory}
                                  </span>
                                )}
                                {project.solutionCategory && (
                                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                                    {project.solutionCategory}
                                  </span>
                                )}
                              </div>
                            </div>
                            <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition-colors">
                              {expandedProject === project._id ? (
                                <ChevronUp className="w-6 h-6" />
                              ) : (
                                <ChevronDown className="w-6 h-6" />
                              )}
                            </button>
                          </div>
                        </div>

                        {expandedProject === project._id && (
                          <div className="border-t-2 border-gray-100 p-5 bg-white animate-slideDown">
                            <div className="space-y-3 text-sm mb-5">
                              <div className="flex items-start gap-2">
                                <span className="font-semibold text-gray-700 min-w-20">
                                  📧 Email:
                                </span>
                                <span className="text-gray-600">
                                  {project.email}
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="font-semibold text-gray-700 min-w-20">
                                  👤 Contact:
                                </span>
                                <span className="text-gray-600">
                                  {project.contactPersonName}
                                </span>
                              </div>
                              {project.headCategory && (
                                <div className="flex items-start gap-2">
                                  <span className="font-semibold text-gray-700 min-w-20">
                                    📂 Head Category:
                                  </span>
                                  <span className="text-gray-600">
                                    {project.headCategory}
                                  </span>
                                </div>
                              )}
                              {project.solutionCategory && (
                                <div className="flex items-start gap-2">
                                  <span className="font-semibold text-gray-700 min-w-20">
                                    🎯 Solution Category:
                                  </span>
                                  <span className="text-gray-600">
                                    {project.solutionCategory}
                                  </span>
                                </div>
                              )}
                              {project.companyProfile && (
                                <div className="flex items-start gap-2">
                                  <span className="font-semibold text-gray-700 min-w-20">
                                    📋 Profile:
                                  </span>
                                  <span className="text-gray-600 line-clamp-2">
                                    {project.companyProfile}
                                  </span>
                                </div>
                              )}
                            </div>
                            <button
                              onClick={() => checkAndSelectProject(project)}
                              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                              <Sparkles className="w-5 h-5" />
                              Evaluate This Project
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* MARKING FORM */}
          {selectedProject && (
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8 border-2 border-blue-100 animate-fadeIn">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-2 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Evaluate Project
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 font-medium ml-11">
                    {selectedProject.solutionName}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all duration-300 font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  ← Back to List
                </button>
              </div>

              {/* PROJECT INFORMATION - FIXED SECTION (removed duplicate) */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 mb-6 border-2 border-blue-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                  <span className="bg-blue-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                    ℹ
                  </span>
                  Project Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">
                      📧 Email:
                    </span>
                    <span className="text-gray-600">
                      {selectedProject.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700">
                      👤 Contact:
                    </span>
                    <span className="text-gray-600">
                      {selectedProject.contactPersonName}
                    </span>
                  </div>
                  {/* ✅ HEAD CATEGORY AND SOLUTION CATEGORY DISPLAY */}
                  {selectedProject.headCategory && (
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700">
                        📂 Head Category:
                      </span>
                      <span className="text-gray-600">
                        {selectedProject.headCategory}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <form onSubmit={submitMarking} className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm">
                      ★
                    </span>
                    Evaluation Criteria
                  </h3>
                  <div
                    className={`grid gap-3 md:gap-4 ${
                      selectedProject.applicationEntity === "Student"
                        ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                        : "grid-cols-2 sm:grid-cols-2 md:grid-cols-4"
                    }`}
                  >
                   
                    {selectedProject.applicationEntity === "Student" ? (
                      <>
                        {[
                          {
                            field: "uniqueness",
                            label: "Uniqueness",
                            icon: "✨",
                            max: 10,
                          },
                          {
                            field: "proofOfConcept",
                            label: "Proof of Concept",
                            icon: "🔬",
                            max: 10,
                          },
                          {
                            field: "functionalitiesFeatures",
                            label: "Features",
                            icon: "⚡",
                            max: 10,
                          },
                          {
                            field: "quality",
                            label: "Quality",
                            icon: "💎",
                            max: 10,
                          },
                          {
                            field: "presentation",
                            label: "Presentation",
                            icon: "🎯",
                            max: 10,
                          },
                        ].map(({ field, label, icon, max }) => (
                          <div
                            key={field}
                            className="bg-gradient-to-br from-white to-blue-50 p-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                          >
                            <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1">
                              <span className="text-base">{icon}</span>
                              <span className="truncate">{label}</span>
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="number"
                              min="0"
                              max={max}
                              step="0.01"
                              required
                              value={marks[field] || ""}
                              onChange={(e) => {
                                const value = e.target.value;
                                // ✅ FIX: Only update if value is valid, no automatic rounding
                                if (
                                  value === "" ||
                                  (parseFloat(value) >= 0 &&
                                    parseFloat(value) <= max)
                                ) {
                                  setMarks({ ...marks, [field]: value });
                                }
                              }}
                              // ❌ REMOVED: onBlur handler that was causing automatic rounding
                              placeholder={`0-${max}`}
                              className="w-full px-3 py-2 text-base font-semibold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-center"
                            />
                            <p className="text-xs text-gray-500 mt-1.5 text-center font-medium">
                              Max: {max}
                            </p>
                          </div>
                        ))}
                      </>
                    ) : (
                      <>
                        {[
                          {
                            field: "uniqueness",
                            label: "Uniqueness",
                            icon: "✨",
                            max: 10,
                          },
                          {
                            field: "marketPotentialValuePublic",
                            label: "Market Potential / Value to Public or Govt",
                            icon: "📊",
                            max: 10,
                          },
                          {
                            field: "functionalitiesFeatures",
                            label: "Features",
                            icon: "⚡",
                            max: 10,
                          },
                          {
                            field: "qualityTechnology",
                            label: "Quality & Tech",
                            icon: "💎",
                            max: 10,
                          },
                        ].map(({ field, label, icon, max }) => (
                          <div
                            key={field}
                            className="bg-gradient-to-br from-white to-purple-50 p-4 rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                          >
                            <label className="block text-xs font-bold text-gray-700 mb-2 flex items-center gap-1">
                              <span className="text-base">{icon}</span>
                              <span className="truncate">{label}</span>
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="number"
                              min="0"
                              max={max}
                              step="0.01"
                              required
                              value={marks[field] || ""}
                              onChange={(e) => {
                                const value = e.target.value;
                                // ✅ FIX: Only update if value is valid, no automatic rounding
                                if (
                                  value === "" ||
                                  (parseFloat(value) >= 0 &&
                                    parseFloat(value) <= max)
                                ) {
                                  setMarks({ ...marks, [field]: value });
                                }
                              }}
                              // ❌ REMOVED: onBlur handler that was causing automatic rounding
                              placeholder={`0-${max}`}
                              className="w-full px-3 py-2 text-base font-semibold border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-center"
                            />
                            <p className="text-xs text-gray-500 mt-1.5 text-center font-medium">
                              Max: {max}
                            </p>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-2xl p-6 border-2 border-blue-200 shadow-xl">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-white">
                      <p className="text-sm font-medium opacity-90 mb-1">
                        Total Evaluation Score
                      </p>
                      <p className="text-4xl md:text-5xl font-black flex items-center gap-3">
                        <span className="animate-pulse">
                          {calculateTotal().toFixed(1)}
                        </span>
                        <span className="text-2xl opacity-75">
                          / {getMaxMarks()}
                        </span>
                      </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                      <p className="text-white text-sm font-medium">
                        Progress:{" "}
                        <span className="font-bold">
                          {((calculateTotal() / getMaxMarks()) * 100).toFixed(
                            0
                          )}
                          %
                        </span>
                      </p>
                      <div className="w-32 bg-white/30 rounded-full h-2 mt-2">
                        <div
                          className="bg-white h-2 rounded-full transition-all duration-500"
                          style={{
                            width: `${
                              (calculateTotal() / getMaxMarks()) * 100
                            }%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-500 via-emerald-600 to-green-600 text-white py-5 rounded-xl font-bold text-xl hover:from-green-600 hover:via-emerald-700 hover:to-green-700 transition-all duration-300 disabled:opacity-50 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      Submitting Evaluation...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Submit Evaluation
                      <Sparkles className="w-6 h-6 animate-pulse" />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </main>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default JudgeMarkingSystem;

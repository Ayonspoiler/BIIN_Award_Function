import { useState } from "react";
import homepage from "../assets/Home Image/Home 1.jpg"

const Registration = () => {
  const [formData, setFormData] = useState({
    // Basic Information
    information: "",
    headCategory: "",
    solutionCategory: "",
    customSolution: "",
    crossCategory: "",
    technologyCategory: "",

    // Organization Details
    email: "",
    solutionName: "",
    organizationName: "",
    dateOfEstablishment: "",
    organizationSize: "",
    address: "",
    district: "",
    website: "",
    telephone: "",

    // Contact Person
    contactPersonName: "",
    contactPersonDesignation: "",
    contactPersonMobile: "",
    contactPersonEmail: "",
    contactPersonPhone: "",

    // Organizational Leader
    organizationalLeaderName: "",
    organizationalLeaderEmail: "",

    // Solution Details
    companyProfile: "",
    teamInformation: "",
    solutionDescription: "",
    uniqueness: "",
    functionalityFeatures: "",
    qualityTechnology: "",

    // Declaration
    ipRightsOwned: false,
    noOutsourcedService: false,
    notWonAward: false,
    alreadyNominated: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Solution categories for each head category
  const solutionCategories = {
    "Consumer (HC-C)": [
      "Media & Entertainment",
      "Tourism & Hospitality",
      "Retail and Distribution",
      "Banking, Insurance & Finance",
      "Real estate",
      "Digital Marketing / Advertising",
    ],
    "Inclusions & Community Services (HC-ICS)": [
      "Regional, Rural and Remote Services",
      "Indigenous Services",
      "Health and Well-being",
      "Community Services",
      "Sustainability and Environment",
      "Education",
    ],
    "Industrial (HC-I)": [
      "Manufacturing",
      "Agriculture",
      "Mining",
      "Construction",
      "Transport and Logistics",
      "Energy and Utilities",
      "Telecommunications",
    ],
    "BUSINESS SERVICES (HC-BS)": [
      "Finance & Accounting solutions (Fintech)",
      "ICT Services solutions",
      "Security solutions",
      "Marketing solutions",
      "Professional Services (legal, HR etc.) solutions",
    ],
    "Public Sector and Government (HC-PSG)": [
      "Government & Citizen Services",
      "Digital Government",
    ],
  };

  // Toggle radio button selection/deselection for all radio button groups
  const handleRadioChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: prev[fieldName] === value ? "" : value,
      // Reset solution category when head category changes
      ...(fieldName === "headCategory"
        ? { solutionCategory: "", customSolution: "" }
        : {}),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitToGoogleSheets = async (data) => {
    // Replace this URL with your actual Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbx0bbcB-LedQAp20CrnQhPjIUL7nACzFqMWWBVpA5TuxxLvnlF6fYsxSaX7YgveefrJ3A/exec";

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        headers: {
          "Content-Type": "text/plain", // Changed to text/plain for no-cors
        },
        body: JSON.stringify(data),
      });

      // Since we're using no-cors mode, we can't read the response
      // We'll assume success if no error is thrown
      return { success: true };
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
      throw error;
    }
  };

  const handleOptionalRadioChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: prev[fieldName] === value ? "" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    // Basic validation for required fields
    const requiredFields = [
      "information",
      "email",
      "solutionName",
      "organizationName",
      "address",
      "district",
      "contactPersonName",
      "contactPersonDesignation",
      "contactPersonMobile",
      "contactPersonEmail",
      "organizationalLeaderName",
      "organizationalLeaderEmail",
      "companyProfile",
      "teamInformation",
      "solutionDescription",
      "uniqueness",
      "functionalityFeatures",
      "qualityTechnology",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      setSubmitError(
        `Please fill in all required fields: ${missingFields.join(", ")}`
      );
      return;
    }

    // Validation: Check if head category is selected but solution category is not
    if (
      formData.headCategory &&
      !formData.solutionCategory &&
      !formData.customSolution
    ) {
      setSubmitError(
        "Please select a solution category or provide a custom solution for your selected head category."
      );
      return;
    }

    // Declaration validation - ONLY this validation, no other declaration checks
    const {
      ipRightsOwned,
      noOutsourcedService,
      notWonAward,
      alreadyNominated,
    } = formData;

    const hasAtLeastOneDeclaration =
      ipRightsOwned || noOutsourcedService || notWonAward || alreadyNominated;

    if (!hasAtLeastOneDeclaration) {
      setSubmitError(
        "Please check at least one declaration that applies to your submission."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for Google Sheets
      const submissionData = {
        ...formData,
        submissionDate: new Date().toISOString(),
        timestamp: new Date().toLocaleString(),
      };

      await submitToGoogleSheets(submissionData);
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        "Error submitting form. Please try again. Make sure you have internet connection."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  
  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitError("");
    setFormData({
      information: "",
      headCategory: "",
      solutionCategory: "",
      customSolution: "",
      crossCategory: "",
      technologyCategory: "",
      email: "",
      solutionName: "",
      organizationName: "",
      dateOfEstablishment: "",
      organizationSize: "",
      address: "",
      district: "",
      website: "",
      telephone: "",
      contactPersonName: "",
      contactPersonDesignation: "",
      contactPersonMobile: "",
      contactPersonEmail: "",
      contactPersonPhone: "",
      organizationalLeaderName: "",
      organizationalLeaderEmail: "",
      companyProfile: "",
      teamInformation: "",
      solutionDescription: "",
      uniqueness: "",
      functionalityFeatures: "",
      qualityTechnology: "",
      ipRightsOwned: false,
      noOutsourcedService: false,
      notWonAward: false,
      alreadyNominated: false,
    });
  };

  // Success Animation Component
  const SuccessAnimation = () => (
    <div className="text-center py-12">
      <div className="relative">
        <div className="w-24 h-24 mx-auto mb-6 relative">
          <div className="absolute inset-0 rounded-full border-4 border-green-200 animate-ping"></div>
          <div className="relative w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Registration Confirmed!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for registering for Bangladesh ICT & Innovation Awards 2025. Your response
          has been successfully submitted.
        </p>
        <button
          onClick={resetForm}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Register Another Entry
        </button>
      </div>
    </div>
  );

  if (isSubmitted) {
    return (
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-10">
            <SuccessAnimation />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="">
        {/* Header */}
        <section className="relative text-white py-20 w-full">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={homepage} // Replace with your background image
              alt="Registration Background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/20 "></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-3 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 mt-1 drop-shadow-2xl">
              Registration <br />
              <span className="text-4xl md:text-5xl drop-shadow-lg">
                Bangladesh ICT & Innovation Awards
                <br />
                2025
              </span>
            </h1>
            <div className="flex justify-center gap-4">
              <div className="h-1 w-12 bg-white rounded-full"></div>
            </div>
            <br />
            <br />

          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          {/* Error Message */}
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 ">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">
                    Submission Error
                  </h3>
                  <div className="mt-2 text-sm text-red-700">{submitError}</div>
                </div>
              </div>
            </div>
          )}

          {/* Registration Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <div className="space-y-6">
              {/* Information Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  You are applying as - <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {["Organisation", "Individual or Group", "Student"].map(
                    (option) => (
                      <div key={option} className="flex items-center">
                        <input
                          id={`info-${option}`}
                          name="information"
                          type="radio"
                          checked={formData.information === option}
                          onChange={() =>
                            handleRadioChange("information", option)
                          }
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                        />
                        <label
                          htmlFor={`info-${option}`}
                          className="ml-3 text-sm text-gray-700 cursor-pointer"
                        >
                          {option}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Head Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Head Category <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2">
                  {[
                    "Consumer (HC-C)",
                    "Inclusions & Community Services (HC-ICS)",
                    "Industrial (HC-I)",
                    "BUSINESS SERVICES (HC-BS)",
                    "Public Sector and Government (HC-PSG)",
                  ].map((category, index) => (
                    <div key={category} className="flex items-center">
                      <input
                        id={category}
                        name="headCategory"
                        type="radio"
                        checked={formData.headCategory === category}
                        onChange={() =>
                          handleRadioChange("headCategory", category)
                        }
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label
                        htmlFor={category}
                        className="ml-3 text-sm text-gray-700 cursor-pointer"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cross Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Cross Category (Optional)
                </label>
                <div className="space-y-2">
                  {[
                    "Cross Categories - R & D Project of the Year (CC-RD)",
                    "Cross Categories - Start- Up of the Year (CC-SU)",
                  ].map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        id={category}
                        name="crossCategory"
                        type="radio"
                        checked={formData.crossCategory === category}
                        onClick={(e) => {
                          if (formData.crossCategory === category) {
                            e.target.checked = false;
                          }
                        }}
                        onChange={() =>
                          handleOptionalRadioChange("crossCategory", category)
                        }
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 cursor-pointer"
                      />
                      <label
                        htmlFor={category}
                        className="ml-3 text-sm text-gray-700 cursor-pointer"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Categories */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Technology Category (Optional)
                </label>
                <div className="space-y-2">
                  {[
                    "Technology - AI Technology of the Year (CT-AI)",
                    "Technology - Business Data Analytics of the Year (CT-BDA)",
                    "Technology - IOT of the Year (CT-IOT)",
                  ].map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        id={category}
                        name="technologyCategory"
                        type="radio"
                        checked={formData.technologyCategory === category}
                        onClick={(e) => {
                          if (formData.technologyCategory === category) {
                            e.target.checked = false;
                          }
                        }}
                        onChange={() =>
                          handleOptionalRadioChange(
                            "technologyCategory",
                            category
                          )
                        }
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 cursor-pointer"
                      />
                      <label
                        htmlFor={category}
                        className="ml-3 text-sm text-gray-700 cursor-pointer"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Category - Only for Head Category */}
              {formData.headCategory &&
                solutionCategories[formData.headCategory] && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Solution Category <span className="text-red-500">*</span>
                      <span className="text-sm text-gray-500 block">
                        Required for Head Category selection
                      </span>
                    </label>
                    <select
                      name="solutionCategory"
                      value={formData.solutionCategory}
                      onChange={handleInputChange}
                      required={!!formData.headCategory}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a solution category</option>
                      {solutionCategories[formData.headCategory].map(
                        (solution) => (
                          <option key={solution} value={solution}>
                            {solution}
                          </option>
                        )
                      )}
                      <option value="Other">
                        Other (please specify below)
                      </option>
                    </select>
                  </div>
                )}

              {/* Custom Solution */}
              {formData.headCategory &&
                formData.solutionCategory === "Other" && (
                  <div>
                    <label
                      htmlFor="customSolution"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Other Solution Category
                      <span className="text-sm text-gray-500 block">
                        Please describe your solution category
                      </span>
                    </label>
                    <textarea
                      id="customSolution"
                      name="customSolution"
                      rows={3}
                      value={formData.customSolution}
                      onChange={handleInputChange}
                      placeholder="Please describe your solution category..."
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                )}

              {/* Email Address of Applicant */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address of Applicant{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Solution Name */}
              <div>
                <label
                  htmlFor="solutionName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Solution Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="solutionName"
                  name="solutionName"
                  value={formData.solutionName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Organization/Individual Name */}
              <div>
                <label
                  htmlFor="organizationName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name of Organization / Individual{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Date of Establishment */}
              {/* Date of Establishment */}
              <div>
                <label
                  htmlFor="dateOfEstablishment"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Date of Establishment of the Organization
                </label>
                <input
                  type="date"
                  id="dateOfEstablishment"
                  name="dateOfEstablishment"
                  value={formData.dateOfEstablishment}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Size of the Organization */}
              <div>
                <label
                  htmlFor="organizationSize"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Size of the Organization
                </label>
                <select
                  id="organizationSize"
                  name="organizationSize"
                  value={formData.organizationSize}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* District */}
              <div>
                <label
                  htmlFor="district"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  District <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Website */}
              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Website
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Telephone */}
              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Telephone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Contact Person Name */}
              <div>
                <label
                  htmlFor="contactPersonName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name of the Contact Person{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactPersonName"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Contact Person Designation */}
              <div>
                <label
                  htmlFor="contactPersonDesignation"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Designation of the Contact Person{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactPersonDesignation"
                  name="contactPersonDesignation"
                  value={formData.contactPersonDesignation}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Contact Person Mobile */}
              <div>
                <label
                  htmlFor="contactPersonMobile"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mobile of the Contact Person{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactPersonMobile"
                  name="contactPersonMobile"
                  value={formData.contactPersonMobile}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Contact Person Email */}
              <div>
                <label
                  htmlFor="contactPersonEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail of the Contact Person{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contactPersonEmail"
                  name="contactPersonEmail"
                  value={formData.contactPersonEmail}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Contact Person Phone */}
              <div>
                <label
                  htmlFor="contactPersonPhone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone of the Contact Person
                </label>
                <input
                  type="tel"
                  id="contactPersonPhone"
                  name="contactPersonPhone"
                  value={formData.contactPersonPhone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Organizational Leader Name */}
              <div>
                <label
                  htmlFor="organizationalLeaderName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name of the Organizational Leader{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organizationalLeaderName"
                  name="organizationalLeaderName"
                  value={formData.organizationalLeaderName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Organizational Leader Email */}
              <div>
                <label
                  htmlFor="organizationalLeaderEmail"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email of the Organizational Leader{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="organizationalLeaderEmail"
                  name="organizationalLeaderEmail"
                  value={formData.organizationalLeaderEmail}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Company Profile */}
              <div>
                <label
                  htmlFor="companyProfile"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company Profile <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="companyProfile"
                  name="companyProfile"
                  rows={4}
                  value={formData.companyProfile}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Team Information */}
              <div>
                <label
                  htmlFor="teamInformation"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Team Information <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="teamInformation"
                  name="teamInformation"
                  rows={4}
                  value={formData.teamInformation}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Solution Description */}
              <div>
                <label
                  htmlFor="solutionDescription"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Solution Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="solutionDescription"
                  name="solutionDescription"
                  rows={4}
                  value={formData.solutionDescription}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Uniqueness */}
              <div>
                <label
                  htmlFor="uniqueness"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Uniqueness <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="uniqueness"
                  name="uniqueness"
                  rows={4}
                  value={formData.uniqueness}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Functionality & Features */}
              <div>
                <label
                  htmlFor="functionalityFeatures"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Functionality & Features{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="functionalityFeatures"
                  name="functionalityFeatures"
                  rows={4}
                  value={formData.functionalityFeatures}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Quality / Application of Technology */}
              <div>
                <label
                  htmlFor="qualityTechnology"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Quality / Application of Technology{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="qualityTechnology"
                  name="qualityTechnology"
                  rows={4}
                  value={formData.qualityTechnology}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Declaration Section Header */}
              <div>
                <h3 className="text-lg font-bold text-gray-700 mb-4">
                  Declaration of use of code/components not owned by you
                </h3>
              </div>

              {/* Declaration Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="ipRightsOwned"
                      name="ipRightsOwned"
                      type="checkbox"
                      checked={formData.ipRightsOwned}
                      onChange={handleInputChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="ipRightsOwned"
                      className="font-medium text-gray-700"
                    >
                      Does the Intellectual Property Rights for the product or
                      application owned by you / your group of Students?
                    </label>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="noOutsourcedService"
                      name="noOutsourcedService"
                      type="checkbox"
                      checked={formData.noOutsourcedService}
                      onChange={handleInputChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="noOutsourcedService"
                      className="font-medium text-gray-700"
                    >
                      This is to confirm that I/we was/were not providing a
                      code-cutting outsourced service for this product for which
                      the main R&D and design efforts have been undertaken by
                      anybody outside of nominating party.
                    </label>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="notWonAward"
                      name="notWonAward"
                      type="checkbox"
                      checked={formData.notWonAward}
                      onChange={handleInputChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="notWonAward"
                      className="font-medium text-gray-700"
                    >
                      This entry has not won an APICTA Award during one of the
                      last three APICTA competitions. In addition, substantial
                      enhancements have been made on the original winning entry.
                      And on any such consideration, the decision will be at the
                      discretion of the APICTA Judges Subcommittee.
                    </label>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="alreadyNominated"
                      name="alreadyNominated"
                      type="checkbox"
                      checked={formData.alreadyNominated}
                      onChange={handleInputChange}
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="alreadyNominated"
                      className="font-medium text-gray-700"
                    >
                      This product was already nominated to compete under one of
                      the Head Categories for this years’ competition
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    "Submit Registration"
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Next Steps */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Review</h3>
                <p className="text-sm text-gray-600">
                  We'll review your application within 5 business days
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Shortlisting
                </h3>
                <p className="text-sm text-gray-600">
                  Shortlisted candidates will be notified for final submission
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Evaluation</h3>
                <p className="text-sm text-gray-600">
                  Final evaluation and judging process begins
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;

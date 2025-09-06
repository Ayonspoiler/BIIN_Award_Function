import React from "react";

const Registration = () => {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Registration
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Register your innovative ICT project for BIIN National ICT Awards
            2025
          </p>
        </div>

        {/* Registration Box */}
        <div className="bg-white rounded-xl shadow-lg p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Registration is Now Open!
          </h2>
          <p className="text-gray-600 mb-6">
            Submit your application before the deadline:{" "}
            <span className="font-semibold text-primary-600">
              September 20, 2025
            </span>
          </p>

          <a
            href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Register Now
          </a>
        </div>

        {/* Next Steps */}
        <div className="mt-12 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Review</h3>
              <p className="text-sm text-gray-600">
                We'll review your application within 5 business days
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Shortlisting</h3>
              <p className="text-sm text-gray-600">
                Shortlisted candidates will be notified for final submission
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
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
  );
};

export default Registration;

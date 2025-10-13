import { CheckCircle2 } from "lucide-react"; // modern icons

const SelectionTimeline = () => {
  const steps = [
    "Primary Submission",
    // "Shortlisting for Final Submission",
    "Final Submission",
    "Shortlist for Pitching",
    "Pitching & Judging",
    "Result",
    "Award Ceremony",
  ];

  return (
    <section className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Selection Process
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line - positioned left on mobile, center on desktop */}
        <div className="absolute left-3 md:left-1/2 top-0 md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-r from-primary-600 to-secondary-600"></div>

        <ul className="space-y-12">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`relative flex flex-col md:flex-row md:items-center pl-16 md:pl-0 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline node - positioned left on mobile, center on desktop */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-secondary-600 shadow-md"></div>

              {/* Step card */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:text-left"
                }`}
              >
                <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-4 rounded-xl shadow hover:shadow-lg transition">
                  <div className="flex items-center gap-3">
                    <div className="bg-white text-secondary-600 font-bold w-8 h-8 flex items-center justify-center rounded-full">
                      {index + 1}
                    </div>
                    <h3 className="font-medium text-lg flex items-center gap-2">
                      {/* <CheckCircle2 className="w-5 h-5 text-white" /> */}
                      {step}
                    </h3>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SelectionTimeline;

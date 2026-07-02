import {
  FileUp,
  FileCheck,
  ListFilter,
  Mic2,
  Trophy,
  Award,
} from "lucide-react";

const steps = [
  {
    title: "Primary Submission",
    description: "Submit your initial application and project details.",
    icon: FileUp,
  },
  {
    title: "Final Submission",
    description: "Complete and submit your final entry package.",
    icon: FileCheck,
  },
  {
    title: "Shortlist for Pitching",
    description: "Selected teams are invited to the pitching round.",
    icon: ListFilter,
  },
  {
    title: "Pitching & Judging",
    description: "Present your solution to the expert judging panel.",
    icon: Mic2,
  },
  {
    title: "Result",
    description: "Winners are announced across all categories.",
    icon: Trophy,
  },
  {
    title: "Award Ceremony",
    description: "Celebrate excellence at the national award event.",
    icon: Award,
  },
];

const SelectionTimeline = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
        <span className="mb-3 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-600">
          How it works
        </span>
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
          Selection Process
        </h2>
        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          A clear path from your first submission to the award ceremony.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <ol className="hidden gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="group relative rounded-xl border border-slate-200 bg-slate-50/60 p-4 transition-all hover:border-primary-200 hover:bg-primary-50/50 hover:shadow-md sm:p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white shadow-sm transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-primary-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>

        <ol className="space-y-0 sm:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            return (
              <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                {!isLast && (
                  <div className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-primary-200" />
                )}

                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white shadow-sm ring-4 ring-white">
                  <Icon className="h-4 w-4" />
                </div>

                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-4">
                    <span className="text-xs font-semibold text-primary-600">
                      Step {index + 1}
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default SelectionTimeline;

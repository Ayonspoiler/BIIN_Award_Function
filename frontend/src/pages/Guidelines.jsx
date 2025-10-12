import SelectionTimeline from "../components/SelectionTimeline";

const Guidelines = () => {
  return (
    <div className="">
      <div className="">
        {/* Header */}
        <section className="gradient-bg text-white py-20 w-full ">
          <div className="px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-6">Guidelines</h1>
            <p className="text-xl md:text-3xl text-gray-100 max-w-3xl mx-auto">
              Complete guidelines for participation in Bangladesh ICT &
              Innovation Awards 2025
            </p>
          </div>
        </section>

        {/* General Eligibility */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8 py-3">
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              General Eligibility to Apply
            </h2>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Company Eligibility To Be Nominated:
              </h3>
              <p className="text-gray-600 mb-4">
                The Company Eligibility guideline describes the criteria and
                attributes for company eligibility to submit their entry
                nomination for the competition. The companies which are eligible
                to nominate their ICT applications and products must meet the
                following criteria:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                <li>The company must be registered in Bangladesh.</li>
                <li>
                  The company can be a 100% local company, or A joint venture
                  between a local company and a foreign company. Local
                  shareholders must own at least 51% of the total shares.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Entry Eligibility To Be Nominated
              </h3>
              <p className="text-gray-600 mb-4">
                The product or application for entry nomination must meet the
                following criteria:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                <li>
                  The Intellectual Property Right for the product or application
                  must be owned by the company, or its Intellectual Property
                  Right is owned by the offshore parent of the local company
                  where the majority owner shareholding is the local company.
                </li>
                <li>
                  At least 51% of the development efforts, including research
                  and development and design, must have been undertaken within
                  Bangladesh.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Special Notes */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Special Notes
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-600">
              <li>
                Except for entries to the STUDENTS' PROJECT Category, all
                entries MUST enter in one of the 5 Head Categories relevant to
                the application, product, project or service offered by the
                entry.
              </li>
              <li>
                Entries to the Head Categories are open to all organizations
                (which include companies and academic institutions). For
                example, a postgraduate/research team of a university, or even a
                perceivably and exceptionally innovative project by a university
                undergraduate team, can enter its project/product as an entry to
                one of the 5 Head Categories, and such entry if relevant and
                eligible, also be optionally nominated to one of Cross
                Categories, and/or optionally be nominated to one of the 4
                Technology Categories.
              </li>

              <h5 className="text-1xl text-gray-900 mb-4">
                3. CROSS-CATEGORY AWARDS
              </h5>
              <p>
                If eligible, an entry to the Head Categories is optionally
                allowed to enter in ONE of{" "}
                <b>
                  the Cross-Category awards of RESEARCH AND DEVELOPMENT PROJECT
                  OF THE YEAR or START-UP OF THE YEAR
                </b>{" "}
                (for the organization which develops the application or product
                or service of the nominated entry) – Participants will ensure
                eligibility of the entry before nomination.
              </p>

              <h5 className="text-1xl text-gray-900 mb-2">
                5. TECHNOLOGY AWARDS
              </h5>
              <p className="text-gray-700 mb-4">
                If the technology deployed in an entry to a Head Category is
                believed to be exceptionally innovative, such an entry, where
                relevant, is optionally allowed to be nominated for{" "}
                <span className="font-semibold">ONE</span> of the following
                Technology Awards:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>BIG DATA ANALYTICS TECHNOLOGY OF THE YEAR</li>
                <li>INTERNET OF THINGS TECHNOLOGY AWARD OF THE YEAR</li>
                <li>ARTIFICIAL INTELLIGENCE TECHNOLOGY OF THE YEAR</li>
                <li>BLOCK CHAIN TECHNOLOGY OF THE YEAR</li>
              </ul>
            </ol>
          </div>
        </section>

        {/* add new section of "few more guidelines" */}
        {/* Few More Guidelines */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Few More Guidelines
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4 mb-6">
              <li>Maximum 5 members are allowed in a team.</li>
              <li>
                Additionally, for the Students’ Project an Observer (the project
                mentor or supervisor) is allowed in the team.
              </li>
              <li>
                <span className="font-semibold">Note:</span> The observer can
                attend in Judging Session after taking approval from the Chief
                Judge. An observer, if allowed to be present, should strictly
                just observe, and not participate in any way throughout the
                judging process.
              </li>
              <li>
                Please <span className="font-semibold">READ</span> the Category
                details before applying at the competition.
              </li>
            </ol>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Language
            </h3>
            <p className="text-gray-600 mb-4">
              English is the mandatory language to be used for both Judges and
              Nominees during the judging process (as per APICTA Judging Rules).
            </p>

            <p className="font-semibold text-gray-900 mb-4">
              Photographing, Video and Tape Recording during the Judging Process
            </p>
            <p className="text-gray-600">
              Absolutely no pictures (photo taking), video or audio taping by
              entry’s representatives is allowed during the judging sessions.
            </p>
          </div>
        </section>

        {/* Example Case Study */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              An Example - Case Study
            </h2>
            <p className="text-gray-600 mb-4">
              A STARTUP has built a Business Services AI application.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4 mb-6">
              <li>
                They would select Business Services as the Head Category then
                select Start Up as Cross Category then Artificial Intelligence
                as the Technology category.
              </li>
              <li>
                Depending on the number of nominations, the judge or coordinator
                would then approve the nomination for the Cross category and or
                Technology Categories.
              </li>
              <li>
                They may opt to have them for just 1 or both categories. It is
                important information for all that this is not automatic and is
                subject to management team approval.
              </li>
              <li>
                The nominee would then prepare separate presentations for each
                category.
              </li>
            </ul>
          </div>
        </section>

        {/* Selection Process */}
        <section className="mb-12">
          <SelectionTimeline />
        </section>

        {/* Important Dates */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Important Dates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">
                  September 10, 2025
                </div>
                <div className="text-primary-100">Registration Opens</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">
                  September 25, 2025
                </div>
                <div className="text-primary-100">Final Submission</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">
                  Will be Announced Later
                </div>
                <div className="text-primary-100">Award Ceremony</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <div className="bg-white rounded-xl shadow-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Help?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              If you have any questions about the guidelines or need
              clarification, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@biin.org"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Email Us
              </a>
              <a
                href="/registration"
                className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
              >
                Start Registration
              </a>
            </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
};

export default Guidelines;

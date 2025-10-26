import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import homepage from "../assets/Home Image/Home 1.jpg";

const Competition = () => {
  const location = useLocation();

  // Handle scroll to anchor on page load
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [location]);

  const headCategories = [
    {
      title: "Consumer (HC-C)",
      shortDesc: "For projects that target consumers across all markets.",
      longDesc:
        "For projects, products and services that targets or empowers consumer choice or engagement across all markets, including: Retail; Media; Entertainment; Arts and Culture; Gaming; Tourism; Banking, Insurance & Finance (retail); Real estate (retail). Consumer focused industries are fast moving and highly competitive. Digital innovation enables economic participants to respond rapidly to market requirements, bypassing limitations including, for example, production and logistics.",
      solutions: [
        "Media & Entertainment",
        "Tourism & Hospitality",
        "Retail and Distribution",
        "Banking, Insurance & Finance",
        "Real estate",
        "Digital Marketing / Advertising",
      ],
      color: "from-cyan-500 to-blue-500",
      anchor: "consumer",
    },
    {
      title: "Inclusions & Community Services (HC-ICS)",
      shortDesc:
        "For projects that target niche markets in order to break down the barriers that prevent some members of the community from fully participating in (and contributing to) society.",
      longDesc:
        "For projects, products and services that target niche markets in order to break down the barriers that prevent some members of the community from fully participating in (and contributing to) society. Innovations may be from: Urban, Rural and Remote Services; Indigenous services, eLearning & education; Health and Wellbeing; Sustainability and Environment; NGOs; Disability Sector; Sport.",
      solutions: [
        "Regional, Rural and Remote Services",
        "Indigenous Services",
        "Health and Well-being",
        "Community Services",
        "Sustainability and Environment",
        "Education",
      ],
      color: "from-green-500 to-emerald-500",
      anchor: "inclusions-community",
    },
    {
      title: "Industrial (HC-I)",
      shortDesc:
        "For solutions that deliver automation through the integration of systems, technologies and processes in the commodities sector.",
      longDesc:
        "For solutions that deliver automation through the integration of systems, technologies and processes for the following sectors includes but not limited to: Agriculture; Mining; Oil & Gas; Energy; Manufacturing; Construction; Transport; Logistics; Utilities. Industrial activity is focused on next generation improvement, supporting the development and competitiveness of the marketplace. Digital productivity is core to optimizing processes, reducing costs and to developing new product offerings.",
      solutions: [
        "Manufacturing",
        "Agriculture",
        "Mining",
        "Construction",
        "Transport and Logistics",
        "Energy and Utilities",
        "Telecommunications",
      ],
      color: "from-yellow-500 to-orange-500",
      anchor: "industrial",
    },
    {
      title: "Business Services (HC-BS)",
      shortDesc:
        "For solutions that drive businesses to function more productively and competitively.",
      longDesc:
        "For solutions that drive and deliver business solutions with high levels of productivity and competitiveness. These may be solutions that deliver cross industry functions Innovations may be from: Banking; Finance; Legal; Accounting; Architecture; HR; Administrative Services & Professional Services sectors.",
      solutions: [
        "Finance & Accounting solutions (Fintech)",
        "ICT Services solutions",
        "Security solutions",
        "Marketing solutions",
        "Professional Services (legal, HR etc.) solutions",
      ],
      color: "from-purple-500 to-indigo-500",
      anchor: "business-services",
    },
    {
      title: "Public Sector & Government (HC-PSG)",
      shortDesc:
        "For services that deliver the digitization and improvement of citizen services and to improve efficiencies in the machinery of government.",
      longDesc:
        "For services the core value of which is to deliver the digitization of citizen services and improve efficiencies in the machinery of government. Solutions will be developed by all levels of government or government in collaboration with industry partners. Only nominations from Government owned or controlled entities or Government led delivered can apply. This Award is presented for outstanding ICT innovation dedicated to delivering improved government service delivery or other Digital initiatives for the public.",
      solutions: ["Government & Citizen Services", "Digital Government"],
      color: "from-blue-500 to-cyan-500",
      anchor: "public-sector",
    },
  ];

  const studentCategories = [
    {
      stream: "Junior Students (HC-JS)",
      description:
        "For the most outstanding Digital project undertaken by a student or group of students who are studying up to/including grade 9. Generally, refers to ICT projects by students involved in formal education prior to entering a tertiary institution, for example a university. While this category is generally aimed at secondary school (junior) student projects, entries from primary schools are not excluded, though it should be made clear to the primary school students that the same judging standards and criteria are applied equally to both primary and secondary school projects.",
    },
    {
      stream: "Senior Students (HC-SS)",
      description:
        "For the most outstanding Digital project undertaken by a student or group of students who are in the last three years of secondary education before college or university.",
    },
    {
      stream: "Tertiary Student Project (HC-TSP)",
      description:
        "This award recognizes the most outstanding project undertaken by a tertiary (undergraduate) student or a group of students. Any Information and Communication Technology project or research performed by a student or a group of students who are registered as active undergraduate students in a higher-learning institution, such as college or university during the APICTA Award competition or within 1-year period from his or her graduation date by providing proof of graduation certificate during delivery of the presentation.",
    },
  ];

  const crossCategories = [
    {
      title: "Research & Development Project of the Year (CC-RDP)",
      shortDesc:
        "For outstanding Digital Research & Development (including postgraduate tertiary student research).",
      longDesc:
        "Any Information and Communication Technology research and development, conducted by academic, non-academic institutions, or individuals to create innovative products, processes, and services. Such innovations are incomplete and yet to be marketed even though their features and functionalities can be demonstrated.",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Start Up of the Year (CC-SU)",
      shortDesc:
        "For outstanding Digital innovation by a company in the start-up phase of their development.",
      longDesc:
        "For outstanding innovation by a company in the start-up phase of development. The company will have developed an innovative and potentially superior ICT solution and the company itself is still considered at the early stage of inception. In order to be considered for this award, the following criteria must be met: • The company registration date with the Government's Company registration must not be more than three (3) years from the date of the APICTA competition. • The individual founder(s) of the company and/or the product developers must still be a major shareholder(s) of the company; • The company must not be a subsidiary of an established parent company.",
      color: "from-teal-500 to-green-500",
    },
  ];

  const technologyAwards = [
    {
      title: "Business Data Analytics Technology of the Year (CT-BDA)",
      shortDesc:
        "Technologies utilizing large volumes of data that result in strategic analysis and better decisions.",
      longDesc:
        "Here 'Business' is interpreted in a broad sense to include both public and private sector organization's as well as NGOs, with technology which utilizes large volumes of data – both structured and unstructured that result in strategic analysis and better decisions. This may include advanced data analytics and unique algorithms. It must demonstrate that the datasets are large enough to necessitate high-level programming skill and statistically defensible methodologies in order to transform the data asset into something of value.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Internet of Things Technology of the Year (CT-IOT)",
      shortDesc:
        "The use of IoT technologies to create new abilities to extract data or create information that improves efficiency, accuracy, and reduces human intervention.",
      longDesc:
        "The use of IoT technologies for the inter-connectedness of physical devices to enable solutions to extract data or to create new information to improve efficiencies, accuracy and/or economic benefit and reduced human intervention. These include new methods to enable businesses, governments, and consumers to connect to their IoT devices, sensor technology and smart technology including remotes, dashboards, networks, gateways, analytics, data storage, and security.",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Artificial Intelligence Technology of the Year (CT-AI)",
      shortDesc:
        "For solutions which utilize Artificial Intelligence to perform operations analogous to learning and decision making in humans.",
      longDesc:
        "Artificial Intelligence (AI) is used to perform operations analogous to learning and decision making in humans. Examples may include expert systems, robotics, self-learning or programs for the perception and recognition of shapes in computer vision systems. Typically, technologies should address central problems or goals of AI research include reasoning, knowledge, planning, learning, natural language processing (communication), perception and the ability to move and manipulate objects.",
      color: "from-cyan-500 to-sky-500",
    },
  ];

  return (
    <div className="">
      <div className="">
        {/* Header/hero */}
        <section className="relative text-white py-20 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={homepage}
              alt="ICT Awards Background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-black mb-6 mt-9 drop-shadow-2xl text-white">
                Competition Categories
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto drop-shadow-lg">
                Celebrating Innovation, Empowering Digital Transformation
              </p>
              <div className="flex justify-center gap-4">
                <div className="h-1 w-12 bg-white rounded-full"></div>
              </div>
              <br />
              <br />
              <br />
            </div>
          </div>
        </section>

        {/* New Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="bg-white rounded-xl shadow-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About The Bangladesh ICT & Innovation Awards 2025
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              The Bangladesh ICT & Innovation Awards 2025, hosted by Bangladesh
              ICT & Innovation Network (BIIN), is one of the nation's most
              prestigious ICT recognition platforms. The program shines a
              spotlight on visionary individuals, startups, and enterprises
              driving transformative digital solutions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              This year's winners will earn not just national recognition, but
              also the opportunity to represent Bangladesh at the Asia Pacific
              ICT Alliance Awards (APICTA 2025) in Taiwan - the most prestigious
              ICT competition in the region, often hailed as the "ICT Oscars of
              Asia-Pacific."
            </p>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Global Opportunity
              </h3>
              <p className="text-primary-800">
                Champion teams will represent Bangladesh at the APICTA Awards
                2025 in Taiwan, bringing national innovations to an
                international platform.
              </p>
            </div>
          </div>

          {/* Head Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center shadow-2xl">
              5 Head Categories
            </h2>
            <div className="space-y-8">
              {headCategories.map((category, index) => (
                <div
                  key={index}
                  id={category.anchor}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                  style={{ paddingTop: "80px", marginTop: "-80px" }}
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${category.color}`}
                  ></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <p className="text-gray-600 mb-4 font-medium">
                          {category.shortDesc}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {category.longDesc}
                        </p>
                      </div>
                      {category.solutions.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Solution Categories:
                          </h4>
                          <ul className="space-y-2">
                            {category.solutions.map((solution, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-600 flex items-start"
                              >
                                <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Student Categories */}
          <section className="mb-16">
            <div
              id="student"
              style={{ paddingTop: "80px", marginTop: "-80px" }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Students' School Project (3 Categories)
              </h2>
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-blue-100">
                      <tr>
                        <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                          Streams
                        </th>
                        <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">
                          Descriptor
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {studentCategories.map((category, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-6 font-medium text-gray-900 align-top">
                            {category.stream}
                          </td>
                          <td className="px-6 py-6 text-gray-600 text-sm leading-relaxed">
                            {category.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Cross Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cross Categories
            </h2>
            <div className="space-y-8">
              {crossCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${category.color}`}
                  ></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2">
                        <p className="text-gray-600 mb-4 font-medium">
                          {category.shortDesc}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {category.longDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology Awards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Technology Awards
            </h2>
            <div className="space-y-8">
              {technologyAwards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-2xl overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${award.color}`}></div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {award.title}
                    </h3>
                    <p className="text-gray-600 mb-4 font-medium">
                      {award.shortDesc}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {award.longDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl text-white p-12 w-full shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Participate?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Choose your category and start your journey towards recognition
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/registration"
                className="bg-white text-secondary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Register Now
              </a>
              <a
                href="/guidelines"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-secondary-600 transition-colors"
              >
                View Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;

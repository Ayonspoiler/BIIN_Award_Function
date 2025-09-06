const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About BIIN National ICT Awards
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating innovation and excellence in Bangladesh's ICT sector
            since 2017
          </p>
        </div>

        {/* About Awards Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About BIIN National ICT Awards 2024
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            The Bangladesh ICT & Innovation Network (BIIN) Trust Present ICT &
            Innovation Awards is a national program that highlights and rewards
            the best and most creative tech projects in Bangladesh. Organized by
            the Bangladesh ICT & Innovation Network (BIIN)Trust, the program's
            primary goal is to promote local innovation and provide winners with
            a platform to gain international recognition. The ultimate prize for
            champions is the chance to represent Bangladesh at the APICTA
            Awards. This not only gives the winners global exposure but also
            helps to brand Bangladesh as a hub for technology and innovation.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            BIIN Board has planned to engage an experienced team of Judges from
            different areas like- Academic, IT/ITES Sector, Research and
            Development, Bank/Finance, Startup etc.
          </p>
          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-primary-900 mb-2">
              Our Mission
            </h3>
            <p className="text-primary-800">
              To foster innovation in Bangladesh's ICT sector by recognizing and
              celebrating outstanding achievements that contribute to digital
              transformation and economic growth.
            </p>
          </div>
        </div>

        {/* About BIIN Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About BIIN
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              BIIN is a national platform in Bangladesh dedicated to preparing
              the country's youth for a digital future. With over 10,000
              students and numerous partners, it provides programs in ICT
              education, entrepreneurship, and digital innovation. The
              organization's mission is to equip young people with digital
              skills and foster a generation of tech-savvy leaders, with a
              vision of creating a digitally inclusive society. It operates
              under a registered Trust Deed with an advisory panel of national
              and global leaders
            </p>
            <p className="text-lg text-gray-600 mb-6">
              BIIN started its journey with a mission to bridge the gap between
              academia and industry, promote research and development, and
              create an ecosystem that nurtures innovation and entrepreneurship
              in the ICT sector.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Key Focus Areas
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Innovation and Research
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Entrepreneurship Development
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Industry-Academia Collaboration
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Digital Transformation
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            {/* <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-01%20013334-XTAEyvWB4uDqzlZvXzmjaehtQ8OavN.png"
              alt="BIIN Installation Ceremony"
              className="rounded-lg shadow-xl"
            /> */}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Awards by Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-primary-100">Years Running</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Applications</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Winners</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-primary-100">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const PressCoverage = () => {
  const pressChannels = [
    {
      id: 1,
      name: "Techzoom.TV",
      url: "https://techzoom.tv/technology-news/details/97080/%e0%a6%a6%e0%a7%87%e0%a6%b6%e0%a7%87%e0%a6%b0-%e0%a6%b6%e0%a7%80%e0%a6%b0%e0%a7%8d%e0%a6%b7-%e0%a6%89%e0%a6%a6%e0%a7%8d%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a6%95%e0%a6%a6%e0%a7%87%e0%a6%b0-%e0%a6%b8/",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "Notunshomoy",
      url: "https://notunshomoy.com/details.php?id=183239",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Saradin",
      url: "https://www.saradin.news/news/223399",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      name: "Jagoronexpress",
      url: "https://jagoronexpress.com/details/?pid=3474",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      name: "Dailyictnews",
      url: "https://www.dailyictnews.com/15409",
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      name: "Dhaka Tribune",
      url: "https://www.google.com/amp/s/www.dhakatribune.com/amp/bangladesh/event/394357/bangladesh-ict-and-innovation-network-honors-the",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 7,
      name: "Digibanglatech",
      url: "https://digibanglatech.news/158479",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 8,
      name: "Ntvbd",
      url: "https://www.ntvbd.com/tech/news-1636273?fbclid=IwVERDUANi4XBleHRuA2FlbQIxMAABHnVKJo-UtAClmfb0ls9vgOsDA5cfZcF7780gx3Jn0FlLEzADmr_3NXIbBdUy_aem__BzABeCBSHaog4zYVO02nw",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 9,
      name: "Dailydarpan",
      url: "https://www.dailydarpan.news/information-technology/news/7806",
      color: "from-violet-500 to-purple-500",
    },
    {
      id: 10,
      name: "Tbsnews",
      url: "https://www.tbsnews.net/bangladesh/bangladesh-ict-and-innovation-network-recognises-nations-top-innovators-1265456",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 11,
      name: "Dhakapost",
      url: "https://www.dhakapost.com/technology/403319",
      color: "from-teal-500 to-green-500",
    },
    {
      id: 12,
      name: "Deltatimes24",
      url: "https://www.deltatimes24.com/news/157755",
      color: "from-amber-500 to-yellow-500",
    },
    {
      id: 13,
      name: "Ittefaq",
      url: "https://epaper.ittefaq.com.bd/edition/2347/2nd-edition/page/12",
      color: "from-lime-500 to-green-500",
    },
    {
      id: 14,
      name: "Techjano",
      url: "https://techjano.com/%e0%a6%a6%e0%a7%87%e0%a6%b6%e0%a7%87%e0%a6%b0-%e0%a6%b6%e0%a7%80%e0%a6%b0%e0%a7%8d%e0%a6%b7-%e0%a6%89%e0%a6%a6%e0%a7%8d%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a6%95%e0%a6%a6%e0%a7%87%e0%a6%b8/",
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      id: 15,
      name: "Dailytechpublic",
      url: "http://www.dailytechpublic.com/young-innovators-shine-at-bangladesh-ict-and-innovation-awards/",
      color: "from-sky-500 to-blue-500",
    },
    {
      id: 16,
      name: "Techmailbd",
      url: "https://techmailbd.com/2025/10/19/%e0%a6%a6%e0%a7%87%e0%a6%b6%e0%a7%87%e0%a6%b0-%e0%a6%b6%e0%a7%80%e0%a6%b0%e0%a7%8d%e0%a6%b7-%e0%a6%89%e0%a6%a6%e0%a7%8d%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a6%95%e0%a6%a6%e0%a7%87%e0%a6%b0-%e0%a6%b8/",
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl text-white md:text-6xl font-bold text-gray-900 mb-6 text-balance ">
              Press{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-white text-transparent">
                Coverage
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-white">
              Our award competition has been featured in leading media outlets
              and news channels across the country. Explore the coverage and
              stay updated with the latest news.
            </p>
            <div className="flex justify-center gap-4">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Press Coverage Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pressChannels.map((channel) => (
                <a
                  key={channel.id}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    }}
                  ></div>

                  <div className="relative bg-gradient-to-br from-[#fffaf0] to-[#f8e6c2] border border-gray-200 rounded-xl p-8 h-full flex flex-col items-center justify-center hover:from-[#fff2cc] hover:to-[#f6d365] transition-all duration-300 group-hover:border-yellow-300 group-hover:shadow-2xl">
                    <div
                      className={`w-20 h-20 rounded-lg bg-gradient-to-br ${channel.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                    >
                      <span className="text-white font-bold text-2xl text-center px-2">
                        {channel.name.substring(0, 2).toUpperCase()}
                      </span>
                    </div>

                    <h3 className="text-gray-900 font-semibold text-center mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {channel.name}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span className="text-sm">Visit</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[#fffaf0] to-[#f8e6c2] border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {pressChannels.length}+
                </div>
                <p className="text-gray-600">Media Outlets</p>
              </div>

              <div className="bg-gradient-to-br from-[#fffaf0] to-[#f8e6c2] border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  National
                </div>
                <p className="text-gray-600">Coverage</p>
              </div>

              <div className="bg-gradient-to-br from-[#fffaf0] to-[#f8e6c2] border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  Growing
                </div>
                <p className="text-gray-600">Reach</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 border-gray-200 rounded-xl p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Featured in Major Media
              </h2>
              <p className="text-white mb-8">
                Our award competition receives extensive coverage from leading
                news organizations, showcasing the innovation and excellence in
                Bangladesh's ICT sector.
              </p>
              <a
                href="/"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PressCoverage;

"use client";

import { useState } from "react";
 
import techZoom from "../assets/Press Logo/Tech Zoom.jpg"
 
import notunShomoy from "../assets/Press Logo/Notun Somoy.jpg"

const PressCoverage = () => {
  const [failedImages, setFailedImages] = useState(new Set());

  const pressChannels = [
    {
      id: 1,
      name: "Techzoom.TV",
      email: "techzoom.tv@gmail.com",
      url: "https://techzoom.tv/technology-news/details/97080/%e0%a6%a6%e0%a7%87%e0%a6%b6%e0%a7%87%e0%a6%b0-%e0%a6%b6%e0%a7%80%e0%a6%b0%e0%a7%8d%e0%a6%b7-%e0%a6%89%e0%a6%a6%e0%a7%8d%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a6%95%e0%a6%a6%e0%a7%87%e0%a6%b0-%e0%a6%b8/",
      color: "from-blue-500 to-cyan-500",
      logo: techZoom, // You can add your image path here
    },
    {
      id: 2,
      name: "Notunshomoy",
      email: "info@notunshomoy.com",
      url: "https://notunshomoy.com/details.php?id=183239",
      color: "from-purple-500 to-pink-500",
      logo: notunShomoy,
    },
    {
      id: 3,
      name: "Saradin",
      email: "saradinonline@gmail.com",
      url: "https://www.saradin.news/news/223399",
      color: "from-orange-500 to-red-500",
      logo: null,
    },
    {
      id: 4,
      name: "Jagoronexpress",
      email: "jagoronexpress20@gmail.com",
      url: "https://jagoronexpress.com/details/?pid=3474",
      color: "from-green-500 to-emerald-500",
      logo: null,
    },
    {
      id: 5,
      name: "Dailyictnews",
      email: "editor@dailyictnews.com",
      url: "https://www.dailyictnews.com/15409",
      color: "from-indigo-500 to-blue-500",
      logo: null,
    },
    {
      id: 6,
      name: "Dhaka Tribune",
      email: "news@dhakatribune.com",
      url: "https://www.google.com/amp/s/www.dhakatribune.com/amp/bangladesh/event/394357/bangladesh-ict-and-innovation-network-honors-the",
      color: "from-yellow-500 to-orange-500",
      logo: null,
    },
    {
      id: 7,
      name: "Digibanglatech",
      email: "contact@digibanglatech.news",
      url: "https://digibanglatech.news/158479",
      color: "from-pink-500 to-rose-500",
      logo: null,
    },
    {
      id: 8,
      name: "Ntvbd",
      email: "tech@ntvbd.com",
      url: "https://www.ntvbd.com/tech/news-1636273?fbclid=IwVERDUANi4XBleHRuA2FlbQIxMAABHnVKJo-UtAClmfb0ls9vgOsDA5cfZcF7780gx3Jn0FlLEzADmr_3NXIbBdUy_aem__BzABeCBSHaog4zYVO02nw",
      color: "from-cyan-500 to-blue-500",
      logo: null,
    },
    {
      id: 9,
      name: "Dailydarpan",
      email: "news@dailydarpan.news",
      url: "https://www.dailydarpan.news/information-technology/news/7806",
      color: "from-violet-500 to-purple-500",
      logo: null,
    },
    {
      id: 10,
      name: "Tbsnews",
      email: "contact@tbsnews.net",
      url: "https://www.tbsnews.net/bangladesh/bangladesh-ict-and-innovation-network-recognises-nations-top-innovators-1265456",
      color: "from-red-500 to-pink-500",
      logo: null,
    },
    {
      id: 11,
      name: "Dhakapost",
      email: "tech@dhakapost.com",
      url: "https://www.dhakapost.com/technology/403319",
      color: "from-teal-500 to-green-500",
      logo: null,
    },
    {
      id: 12,
      name: "Deltatimes24",
      email: "news@deltatimes24.com",
      url: "https://www.deltatimes24.com/news/157755",
      color: "from-amber-500 to-yellow-500",
      logo: null,
    },
    {
      id: 13,
      name: "Ittefaq",
      email: "contact@ittefaq.com.bd",
      url: "https://epaper.ittefaq.com.bd/edition/2347/2nd-edition/page/12",
      color: "from-lime-500 to-green-500",
      logo: null,
    },
    {
      id: 14,
      name: "Techjano",
      email: "info@techjano.com",
      url: "https://techjano.com/%e0%a6%a6%e0%a7%87%e0%a6%b6%e0%a7%87%e0%a6%b0-%e0%a6%b6%e0%a7%80%e0%a6%b0%e0%a7%8d%e0%a6%b7-%e0%a6%89%e0%a6%a6%e0%a7%8d%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a6%95%e0%a6%a6%e0%a7%87%e0%a6%b8/",
      color: "from-fuchsia-500 to-purple-500",
      logo: null,
    },
    {
      id: 15,
      name: "Dailytechpublic",
      email: "editor@dailytechpublic.com",
      url: "http://www.dailytechpublic.com/young-innovators-shine-at-bangladesh-ict-and-innovation-awards/",
      color: "from-sky-500 to-blue-500",
      logo: null,
    },
    {
      id: 16,
      name: "Techmailbd",
      email: "contact@techmailbd.com",
      url: "https://techmailbd.com/2025/10/19/%e0%a6%a6%e0%a7%87%e0%a6%b6%e0%a7%87%e0%a6%b0-%e0%a6%b6%e0%a7%80%e0%a6%b0%e0%a7%8d%e0%a6%b7-%e0%a6%89%e0%a6%a6%e0%a7%8d%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a6%95%e0%a6%a6%e0%a7%87%e0%a6%b8/",
      color: "from-rose-500 to-pink-500",
      logo: null,
    },
  ];

  const handleImageError = (channelId) => {
    setFailedImages((prev) => new Set([...prev, channelId]));
  };

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
            <h1 className="text-5xl text-white md:text-6xl font-bold mb-6 text-balance">
              Press <span className="text-white">Coverage</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Our award competition has been featured in leading media outlets
              and news channels across the country. Explore the coverage and
              stay updated with the latest news.
            </p>
            <div className="flex justify-center gap-4">
              <div className="h-1 w-12 bg-white rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Press Coverage Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pressChannels.map((channel) => (
                <a
                  key={channel.id}
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block h-full"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    }}
                  ></div>

                  <div className="relative bg-gradient-to-br from-[#6b8e23] to-[#3b5323] border border-gray-200 rounded-2xl p-4 flex flex-col h-full hover:from-[#fff2cc] hover:to-[#f4d58d] transition-all duration-300 group-hover:border-yellow-300 group-hover:shadow-2xl">
                    {/* Logo Section */}
                    <div
                      className="mb-3 w-full flex items-center justify-center overflow-hidden rounded-xl"
                      style={{ height: "110px" }}
                    >
                      {channel.logo && !failedImages.has(channel.id) ? (
                        <img
                          src={channel.logo}
                          alt={channel.name}
                          onError={() => handleImageError(channel.id)}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div
                          className={`w-full h-full rounded-lg bg-gradient-to-br ${channel.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg`}
                        >
                          <span className="text-white font-bold text-lg text-center px-2">
                            {channel.name.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info Section */}
                    <div className="flex-grow flex flex-col text-center">
                      <h3 className="text-white font-bold text-sm mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-1">
                        {channel.name}
                      </h3>
                      <p
                        className="text-white text-[10px] mb-2 line-clamp-1"
                        title={channel.email}
                      >
                        {channel.email}
                      </p>
                      <div className="flex items-center justify-center gap-1 text-white group-hover:text-purple-600 transition-colors duration-300 font-medium text-[11px] mt-auto">
                        <svg
                          className="w-3 h-3"
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
                        Visit Article
                      </div>
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
              <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {pressChannels.length}+
                </div>
                <p className="text-gray-600">Media Outlets</p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  National
                </div>
                <p className="text-gray-600">Coverage</p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 border-gray-200 rounded-xl p-12 text-center">
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
                className="inline-block px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105"
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

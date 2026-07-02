"use client";

import { useState } from "react";
import homepage from "../assets/Home Image/Home 1.jpg";

import techZoom from "../assets/Press Logo/Tech Zoom.jpg"
import notunShomoy from "../assets/Press Logo/Notun Somoy.jpg"
import saradin from "../assets/Press Logo/Sharadin News.jpg"
import jagoronExpress from "../assets/Press Logo/jagoron express.jpg"
import dhakaTribune from "../assets/Press Logo/Dhaka Tribune.jpg"
import digitalBanglaTech from "../assets/Press Logo/Digi Bangla.jpg"
import ntvBd from "../assets/Press Logo/NTV.jpg"
import dailyDarpan from "../assets/Press Logo/Daily Dorpon.jpg"
import tbsNews from "../assets/Press Logo/The Business Standard.jpg"
import dhakapost from "../assets/Press Logo/Dhaka Post.jpg"
import deltaTimes from "../assets/Press Logo/Delta Times.jpg"
import ittefaq from "../assets/Press Logo/Ittefaq.jpg"
import techJano from "../assets/Press Logo/TechJano.jpg"
import techMailBd from "../assets/Press Logo/TechMail.jpg"
import Sarabangla from "../assets/Press Logo/SharaBangla.jpg"
import IctNews from "../assets/Press Logo/ICT News.jpg"
import techPublic from "../assets/Press Logo/Tech public.jpg"
import sangbad from "../assets/Press Logo/Sangbad.jpg"



const PressCoverage = () => {
  const [activeYear, setActiveYear] = useState(2026);
  const [failedImages, setFailedImages] = useState(new Set());

  const pressChannels2025 = [
    {
      id: 5,
      name: "Dhaka Tribune",
      email: "news@dhakatribune.com",
      url: "https://www.dhakatribune.com/bangladesh/event/394357/bangladesh-ict-and-innovation-network-honors-the",
      color: "from-yellow-500 to-orange-500",
      logo: dhakaTribune,
    },
    {
      id: 12,
      name: "Ittefaq",
      email: "",
      url: "https://epaper.ittefaq.com.bd/edition/2347/2nd-edition/page/12",
      color: "from-lime-500 to-green-500",
      logo: ittefaq,
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
      id: 7,
      name: "Ntvbd",
      email: "",
      url: "https://www.ntvbd.com/tech/news-1636273?fbclid=IwVERDUANi4XBleHRuA2FlbQIxMAABHnVKJo-UtAClmfb0ls9vgOsDA5cfZcF7780gx3Jn0FlLEzADmr_3NXIbBdUy_aem__BzABeCBSHaog4zYVO02nw",
      color: "from-cyan-500 to-blue-500",
      logo: ntvBd,
    },
    {
      id: 10,
      name: "Dhakapost",
      email: "",
      url: "https://www.dhakapost.com/technology/403319",
      color: "from-teal-500 to-green-500",
      logo: dhakapost,
    },
    {
      id: 1,
      name: "Techzoom",
      email: "techzoom.tv@gmail.com",
      url: "https://techzoom.tv/technology-news/details/97080/%e0%a6%a6%e0%a7%87%e0%a6%b6%e0%a7%87%e0%a6%b0-%e0%a6%b6%e0%a7%80%e0%a6%b0%e0%a7%8d%e0%a6%b7-%e0%a6%89%e0%a6%a6%e0%a7%8d%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a6%95%e0%a6%a6%e0%a7%87%e0%a6%b0-%e0%a6%b8/",
      color: "from-blue-500 to-cyan-500",
      logo: techZoom, // You can add your image path here
    },

    {
      id: 3,
      name: "Saradin",
      email: "saradinonline@gmail.com",
      url: "https://www.saradin.news/news/223399",
      color: "from-orange-500 to-red-500",
      logo: saradin,
    },
    {
      id: 4,
      name: "Jagoronexpress",
      email: " jagoronexpress20@gmail.com",
      url: "https://jagoronexpress.com/details/?pid=3474",
      color: "from-green-500 to-emerald-500",
      logo: jagoronExpress,
    },
    {
      id: 6,
      name: "Sarabangla",
      email: "press@digibanglatech.news ",
      url: "https://sarabangla.net/news/post-1071415/?fbclid=Iwb21leANqoMxjbGNrA2qgw2V4dG4DYWVtAjExAAEeK0FyCZYTmNnv8xxOHbibF8n7fi4hadyhl_WgXGn5pOSd0ZHzVau_O0pCi70_aem_uiZZDpbjeGm3eHqPfcI7-g",
      color: "from-pink-500 to-rose-500",
      logo: Sarabangla,
    },

    {
      id: 6,
      name: "Digibanglatech",
      email: "press@digibanglatech.news ",
      url: "https://digibanglatech.news/158479",
      color: "from-pink-500 to-rose-500",
      logo: digitalBanglaTech,
    },

    {
      id: 8,
      name: "Dailydarpan",
      email: "",
      url: "https://www.dailydarpan.news/information-technology/news/7806",
      color: "from-violet-500 to-purple-500",
      logo: dailyDarpan,
    },
    {
      id: 9,
      name: "Tbsnews",
      email: "",
      url: "https://www.tbsnews.net/bangladesh/bangladesh-ict-and-innovation-network-recognises-nations-top-innovators-1265456",
      color: "from-red-500 to-pink-500",
      logo: tbsNews,
    },

    {
      id: 11,
      name: "Deltatimes24",
      email: "",
      url: "https://www.deltatimes24.com/news/157755",
      color: "from-amber-500 to-yellow-500",
      logo: deltaTimes,
    },

    {
      id: 13,
      name: "Techjano",
      email: "",
      url: "https://techjano.com/%e0%a6%a6%e0%a7%87%e0%a6%b6%e0%a7%87%e0%a6%b0-%e0%a6%b6%e0%a7%80%e0%a6%b0%e0%a7%8d%e0%a6%b7-%e0%a6%89%e0%a6%a6%e0%a7%8d%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a6%95%e0%a6%a6%e0%a7%87%e0%a6%b0-%e0%a6%b8/",
      color: "from-fuchsia-500 to-purple-500",
      logo: techJano,
    },

    {
      id: 14,
      name: "Techmailbd",
      email: "",
      url: "https://techmailbd.com/2025/10/19/%e0%a6%a6%e0%a7%87%e0%a6%b6%e0%a7%87%e0%a6%b0-%e0%a6%b6%e0%a7%80%e0%a6%b0%e0%a7%8d%e0%a6%b7-%e0%a6%89%e0%a6%a6%e0%a7%8d%e0%a6%ad%e0%a6%be%e0%a6%ac%e0%a6%95%e0%a6%a6%e0%a7%87%e0%a6%b8/",
      color: "from-rose-500 to-pink-500",
      logo: techMailBd,
    },
    {
      id: 15,
      name: "Dailytechpublic",
      email: "",
      url: "http://www.dailytechpublic.com/young-innovators-shine-at-bangladesh-ict-and-innovation-awards/",
      color: "from-sky-500 to-blue-500",
      logo: techPublic,
    },
    {
      id: 16,
      name: "Dailyictnews",
      email: "news@dailyictnews.com",
      url: "https://www.dailyictnews.com/15409",
      color: "from-indigo-500 to-blue-500",
      logo: IctNews,
    },
    {
      id: 17,
      name: "Sangbad",
      email: "news@dailyictnews.com",
      url: "https://sangbad.net.bd/news/it/2025/163672/",
      color: "from-indigo-500 to-blue-500",
      logo: sangbad,
    },
  ];

  const handleImageError = (channelKey) => {
    setFailedImages((prev) => new Set([...prev, channelKey]));
  };

  const years = [
    { year: 2026, label: "2026", status: "coming-soon" },
    { year: 2025, label: "2025", status: "published" },
  ];

  const renderPressGrid = (channels) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {channels.map((channel) => {
        const channelKey = `${channel.id}-${channel.name}`;
        return (
          <a
            key={channelKey}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-md"
          >
            <div className="relative flex flex-1 min-h-[11rem] sm:min-h-[12rem] items-center justify-center bg-slate-50 p-5 sm:p-6">
              {channel.logo && !failedImages.has(channelKey) ? (
                <img
                  src={channel.logo}
                  alt={channel.name}
                  onError={() => handleImageError(channelKey)}
                  className="max-h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-primary-600 text-lg sm:text-xl font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                  {channel.name.substring(0, 2).toUpperCase()}
                </div>
              )}

              <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-400 opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:text-primary-600">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </div>

            <div className="border-t border-slate-100 bg-white px-4 py-3 sm:px-5 sm:py-4">
              <h3 className="text-center text-sm font-semibold text-slate-900 line-clamp-2 transition-colors group-hover:text-primary-600">
                {channel.name}
              </h3>
              <p className="mt-1 text-center text-xs font-medium text-slate-500">
                Read coverage
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );

  const renderComingSoon = () => (
    <div className="relative overflow-hidden rounded-2xl border border-primary-100 bg-white p-8 sm:p-12 md:p-16 text-center">
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-100/60 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary-100/60 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary-600 text-white text-3xl sm:text-4xl mb-6 shadow-lg">
          📰
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          2026 Press Coverage
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-primary-600 mb-4">
          Coming Soon
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          Media coverage for the Bangladesh ICT & Innovation Awards 2026 will be
          published here as outlets report on the event. Check back after the
          award ceremony.
        </p>


      </div>
    </div>
  );

  return (<div className="min-h-screen bg-slate-50 relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>

    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative text-white py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden min-h-[500px] sm:min-h-[550px] md:min-h-[600px] flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={homepage}
            alt="Award Winners Background"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay + gradient for readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <div className="inline-block mb-3 sm:mb-4">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-1.5 sm:px-6 sm:py-2 rounded-full">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  Press & Media
                </span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance">
              Press <span className="text-white">Coverage</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-yellow-300 max-w-3xl mx-auto drop-shadow-lg px-4">
              Media highlights from Bangladesh ICT & Innovation Awards
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <div className="h-1 w-12 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Event Coverage by Year
              </h2>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                Browse press coverage from each award edition
              </p>
            </div>

            <div className="inline-flex p-1 bg-gray-100 rounded-xl self-start sm:self-auto">
              {years.map(({ year, label, status }) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setActiveYear(year)}
                  className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${activeYear === year
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {label}
                  {status === "coming-soon" && (
                    <span className="ml-1.5 text-[10px] uppercase tracking-wide text-amber-600 font-bold">
                      Soon
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {activeYear === 2026 ? (
            renderComingSoon()
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider">
                  2025 Edition
                </span>
                <span className="text-sm text-gray-500">
                  {pressChannels2025.length} media outlets
                </span>
              </div>
              {renderPressGrid(pressChannels2025)}
            </div>
          )}
        </div>
      </section>
      {/* Stats Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-primary-600 border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl text-white font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {pressChannels.length}+
                </div>
                <p className="text-white">Media Outlets</p>
              </div>

              <div className="bg-primary-600 border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl text-white ont-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  National
                </div>
                <p className="text-white">Coverage</p>
              </div>

              <div className="bg-primary-600 border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl text-white font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  Growing
                </div>
                <p className="text-white">Reach</p>
              </div>
            </div>
          </div>
        </section> */}
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary-600  border-gray-200 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Featured in Major Media
            </h2>
            <p className="text-white mb-8">
              Our award competition receives extensive coverage from leading
              news organizations, showcasing the innovation and excellence in
              Bangladesh&apos;s ICT sector.
            </p>
            <a
              href="/"
              className="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
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

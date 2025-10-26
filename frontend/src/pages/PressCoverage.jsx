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
  const [failedImages, setFailedImages] = useState(new Set());

  const pressChannels = [
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
        <section className="relative text-white py-12 sm:py-16 md:py-20">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={homepage} // Replace with your winners background image
              alt="Award Winners Background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay + gradient for readability */}
            <div className="absolute inset-0 bg-black/10 "></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-block mb-3 sm:mb-4">
                <div className="bg-white/20 mt-3 backdrop-blur-sm px-4 py-1.5 sm:px-6 sm:py-2 rounded-full">
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    Press & Media
                  </span>
                </div>
              </div>
              <h1 className="text-5xl text-white md:text-6xl font-bold mb-6 mt-7 text-balance">
                Press <span className="text-white">Coverage</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-300 max-w-3xl mx-auto drop-shadow-lg px-4"></p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <div className="h-1 w-12 bg-white rounded-full"></div>
            </div>
            <br />
            <br />
            <br />
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
                  {/* Glow background on hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    }}
                  ></div>

                  {/* Card container */}
                  {/* Card container */}
                  <div className="relative bg-gradient-to-br from-[#3a7bd5] to-[#3a6073] border border-gray-200 rounded-2xl overflow-hidden h-64 hover:from-[#5fa8e0] hover:to-[#4a6fa5] transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-2xl">
                    {/* Logo Section - Takes full card space */}
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center p-4">
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

                    {/* Name Section - Appears at bottom on hover */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-bold text-sm text-center line-clamp-1">
                        {channel.name}
                      </h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl text-white font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {pressChannels.length}+
                </div>
                <p className="text-white">Media Outlets</p>
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl text-white ont-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  National
                </div>
                <p className="text-white">Coverage</p>
              </div>

              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 border border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 hover:shadow-lg">
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
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600  border-gray-200 rounded-xl p-12 text-center">
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
                className="inline-block px-8 py-3 bg-white text-secondary-600 font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-600/50 transition-all duration-300 transform hover:scale-105"
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

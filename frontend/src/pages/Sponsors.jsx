import { useState } from "react";

// Import sponsor logos
import AIUB from "../assets/Sponsor Logo/Gold/AIUB-1.jpg";
import MTB from "../assets/Sponsor Logo/Gold/MTB-1.jpg";
import NCC from "../assets/Sponsor Logo/Powered By/NCC-Bank-1.jpg";
import RTV from "../assets/Sponsor Logo/Media Partner/RTV-1.jpg";
import techWorld from "../assets/Sponsor Logo/Media Partner/TechWorld-3.jpeg";
import IUB from "../assets/Sponsor Logo/knowledge Partner/IUB-1.jpg";
import ULAB from "../assets/Sponsor Logo/knowledge Partner/ULAB-1.jpg";
import JCL from "../assets/Sponsor Logo/Strategic Partner/JCI-1.jpg";
import redData from "../assets/Sponsor Logo/Technology Partner/RedData-1.jpg";
import STD from "../assets/Sponsor Logo/Digital/STD-1.jpg";
import AIUB2 from "../assets/Sponsor Logo/knowledge Partner/AIUB-2.jpg";
import City from "../assets/Sponsor Logo/Silver/CITY-1.jpeg";
import shareTrip from "../assets/Sponsor Logo/Gift/ShareTrip-1.jpg";
import superStar from "../assets/Sponsor Logo/Gift/Super-Star-Group-2.jpg"
import homepage from "../assets/Home Image/Home 1.jpg";

const sponsors2025 = {
  platinumSponsors: [
    {
      logo: NCC,
      name: "National Credit and Commerce Bank PLC",
      tier: "Title",
    },
  ],

  goldSponsors: [
    {
      logo: AIUB,
      name: "American International University - Bangladesh",
      tier: "Gold",
    },
    {
      logo: MTB,
      name: "Mutual Trust Bank PLC",
      tier: "Gold",
    },
  ],

  silverSponsors: [
    {
      logo: City,
      name: "City Bank PLC",
      tier: "Silver",
    },
  ],

  knowledgePartner: [
    {
      logo: AIUB2,
      name: "American International University - Bangladesh",
      tier: "Knowledge",
    },
    {
      logo: IUB,
      name: "Independent University, Bangladesh",
      tier: "Knowledge",
    },
    {
      logo: ULAB,
      name: "University of Liberal Arts Bangladesh",
      tier: "Knowledge",
    },
  ],

  mediaPartners: [
    {
      logo: RTV,
      name: "RTV Bangladesh",
      tier: "Media",
    },
    {
      logo: techWorld,
      name: "TechWorld Bangladesh",
      tier: "Media",
    },
  ],

  giftPartners: [
    {
      logo: shareTrip,
      name: "ShareTrip ",
      tier: "Gift",
    },
    {
      logo: superStar,
      name: "Super Star Group (SSG)",
      tier: "Gift",
    },
  ],

  strategicPartners: [
    {
      logo: JCL,
      name: "JCI Bangaldesh",
    },
  ],

  technologyPartners: [
    {
      logo: redData,
      name: "Red Data (Pvt.) Ltd",
    },
  ],

  digitalCampaignPartners: [
    {
      logo: STD,
      name: "Smart-trend Digital",
    },
  ],
};

const Sponsors = () => {
  const [activeYear, setActiveYear] = useState(2026);

  const years = [
    { year: 2026, label: "2026", status: "coming-soon" },
    { year: 2025, label: "2025", status: "published" },
  ];

  const {
    platinumSponsors,
    goldSponsors,
    silverSponsors,
    knowledgePartner,
    mediaPartners,
    giftPartners,
    strategicPartners,
    technologyPartners,
    digitalCampaignPartners,
  } = sponsors2025;

  const SponsorCard = ({
    sponsor,
    size = "medium",
    isGoldOrMedia = false,
    isKnowledge = false,
    isMedia = false,
  }) => {
    const sizeClasses = {
      large: isKnowledge
        ? "h-72 sm:h-80 md:h-96 lg:h-96"
        : "h-64 sm:h-72 md:h-80 lg:h-96",
      medium: isMedia
        ? "h-64 sm:h-72 md:h-80 lg:h-80"
        : isGoldOrMedia
        ? "h-64 sm:h-72 md:h-80 lg:h-80"
        : "h-64 sm:h-72 md:h-80",
      small: "h-56 sm:h-64 md:h-72",
    };

    return (
      <div
        className={`group relative bg-white rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${sizeClasses[size]}`}
      >
        <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-[2px] bg-white rounded-2xl" />

        <div className="relative h-full flex flex-col">
          <div className="flex-1 p-3 sm:p-4 md:p-6 lg:p-8 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-2 sm:pb-3 flex items-center justify-center min-h-0">
            {sponsor.logo ? (
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className={`${
                  isGoldOrMedia || isMedia
                    ? "max-w-full max-h-full"
                    : "max-w-[95%] max-h-full"
                } object-contain group-hover:scale-105 transition-transform duration-300`}
              />
            ) : (
              <div className="text-center">
                <div className="text-5xl sm:text-6xl md:text-7xl mb-2">🏢</div>
                <div className="text-xs sm:text-sm text-gray-500 font-medium px-2">
                  {sponsor.name}
                </div>
              </div>
            )}
          </div>

          <div className="flex-shrink-0 text-center bg-white px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 border-t border-gray-100">
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
              {sponsor.name}
            </h3>
            {sponsor.description && (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {sponsor.description}
              </p>
            )}
          </div>

          <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4">
            <span className="text-xs md:text-sm font-bold px-4 sm:px-4 py-1 rounded-full bg-primary-600 text-white">
              {sponsor.tier}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const PartnerCard = ({ partner, size = "medium" }) => {
    const sizeClasses = {
      large: "h-72 sm:h-80 md:h-96",
      medium: "h-64 sm:h-72 md:h-80",
      small: "h-56 sm:h-64 md:h-72",
    };

    return (
      <div
        className={`group relative bg-white rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${sizeClasses[size]}`}
      >
        <div className="absolute inset-0 bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-[2px] bg-white rounded-2xl" />

        <div className="relative h-full flex flex-col items-center justify-center overflow-hidden p-4 sm:p-5 md:p-6">
          <div className="w-full h-full flex items-center justify-center">
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="max-w-[90%] max-h-[90%] object-contain group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="text-center text-6xl sm:text-7xl md:text-8xl">
                🏢
              </div>
            )}
          </div>

          <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 text-center w-full px-2 sm:px-3">
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
              {partner.name}
            </h3>
          </div>
        </div>
      </div>
    );
  };

  const renderComingSoon = () => (
    <div className="relative overflow-hidden rounded-2xl border border-primary-100 bg-white p-8 sm:p-12 md:p-16 text-center">
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-100/60 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary-100/60 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary-600 text-white text-3xl sm:text-4xl mb-6 shadow-lg">
          🤝
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          2026 Sponsors & Partners
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-primary-600 mb-4">
          Coming Soon
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
          Our 2026 sponsors and partners will be announced here as partnerships
          are confirmed. Interested in sponsoring? Reach out using the form below.
        </p>

      
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
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
                  Our Partners
                </span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
              Sponsors & Partners
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-yellow-300 max-w-3xl mx-auto drop-shadow-lg px-4">
              Organizations powering Bangladesh&apos;s ICT innovation awards
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <div className="h-1 w-12 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-8 mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Partners by Year
            </h2>
            <p className="text-gray-600 mt-1 text-sm sm:text-base">
              Browse sponsors and partners from each edition
            </p>
          </div>

          <div className="inline-flex p-1 bg-gray-100 rounded-xl self-start sm:self-auto">
            {years.map(({ year, label, status }) => (
              <button
                key={year}
                type="button"
                onClick={() => setActiveYear(year)}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeYear === year
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
      </div>

      {activeYear === 2026 ? (
        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">{renderComingSoon()}</div>
        </section>
      ) : (
        <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-bold uppercase tracking-wider">
          2025 Edition
        </span>
      </div>
      {/* Platinum Sponsors */}
      <section className="py-12 sm:py-16 md:py-20 -mt-8 sm:-mt-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 ">
            <div className="inline-flex items-center gap-2 badge-brand mb-4">
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider">
                Title Sponsor
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            {platinumSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="w-full sm:w-2/3 lg:w-1/2 bg-primary-50"
              >
                <SponsorCard sponsor={sponsor} size="large" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gold Sponsors */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 badge-brand mb-4">
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider">
                Gold Sponsors
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {goldSponsors.map((sponsor, index) => (
              <SponsorCard
                key={index}
                sponsor={sponsor}
                size="medium"
                isGoldOrMedia={true}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Silver Sponsors */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 badge-brand mb-4">
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider">
                Silver Sponsor
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            {silverSponsors.map((sponsor, index) => (
              <div key={index} className="w-full sm:w-2/3 lg:w-1/2">
                <SponsorCard sponsor={sponsor} size="medium" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Knowledge Partner */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 badge-brand mb-4">
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider">
                Knowledge Partners
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {knowledgePartner.map((sponsor, index) => (
              <SponsorCard
                key={index}
                sponsor={sponsor}
                size="large"
                isKnowledge={true}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Media Partners */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 badge-brand mb-4">
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider">
                Media Partners
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {mediaPartners.map((partner, index) => (
              <SponsorCard
                key={index}
                sponsor={partner}
                size="small"
                isMedia={true}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Gift Partners */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 badge-brand mb-4">
              <span className="text-sm sm:text-base font-bold uppercase tracking-wider">
                Gift Partners
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {giftPartners.map((partner, index) => (
              <SponsorCard
                key={index}
                sponsor={partner}
                size="small"
                isMedia={true}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Strategic, Technology, Digital Campaign Partners Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8 auto-rows-max">
            {/* Strategic Partner */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center gap-2 badge-brand mb-4 sm:mb-6 shadow-md">
                <span className="text-sm sm:text-base md:text-lg font-semibold tracking-wide whitespace-nowrap">
                  Strategic Partner
                </span>
              </div>
              <div className="w-full flex justify-center">
                {strategicPartners.map((partner, index) => (
                  <div key={index} className="w-full max-w-xs">
                    <PartnerCard partner={partner} size="small" />
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Partner */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center gap-2 badge-brand mb-4 sm:mb-6 shadow-md">
                <span className="text-sm sm:text-base md:text-lg font-semibold tracking-wide whitespace-nowrap">
                  Technology Partner
                </span>
              </div>
              <div className="w-full flex justify-center">
                {technologyPartners.map((partner, index) => (
                  <div key={index} className="w-full max-w-xs">
                    <PartnerCard partner={partner} size="small" />
                  </div>
                ))}
              </div>
            </div>

            {/* Digital Campaign Partner */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center gap-2 badge-brand mb-4 sm:mb-6 shadow-md">
                <span className="text-sm sm:text-base md:text-lg font-semibold tracking-wide whitespace-nowrap">
                  Digital Campaign Partner
                </span>
              </div>
              <div className="w-full flex justify-center">
                {digitalCampaignPartners.map((partner, index) => (
                  <div key={index} className="w-full max-w-xs">
                    <PartnerCard partner={partner} size="small" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
      )}
      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Become a Sponsor
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-gray-100">
              Partner with us for the Bangladesh ICT & Innovation Awards 2026
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=moon@org.biin.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;

import React from "react";

// Import sponsor logos
import  AIUB from "../assets/Sponsor Logo/Gold/AIUB.jpg";
import MTB from "../assets/Sponsor Logo/Gold/MTB.jpg";
import NCC from "../assets/Sponsor Logo/Powered By/NCC.png";
import RTV from "../assets/Sponsor Logo/Media Partner/RTV.jpg"
import techWorld from "../assets/Sponsor Logo/Media Partner/TechWorld.jpg"
import IUB from "../assets/Sponsor Logo/knowledge Partner/IUB.jpg"
import ULAB from "../assets/Sponsor Logo/knowledge Partner/ULAB.jpg"
import JCL from "../assets/Sponsor Logo/Strategic Partner/JCI Bangladesh Logo.jpg"
import redData from "../assets/Sponsor Logo/Technology Partner/RedData.jpg"
import STD from "../assets/Sponsor Logo/Digital/STD.jpg"

const Sponsors = () => {
  const platinumSponsors = [
    {
      logo: NCC,
      name: "National Credit and Commerce Bank PLC.",
      tier: "Platinum",
    },
  ];

  const goldSponsors = [
    {
      logo: AIUB,
      name: "American International University",
      tier: "Gold",
    },
    {
      logo: MTB,
      name: "Mutual Trust Bank PLC (MTB)",
      tier: "Gold",
    },
  ];

  const knowledgePartner = [
    {
      logo:AIUB,
      name: "American International University",
      tier:"Knowledge"
    },
    {
      logo:IUB,
      name:"Independent University,Bangladesh",
      tier: "Knowledge",
    },
    {
      logo:ULAB,
      name: "University of Liberal Arts Bangladesh",
      tier: "Knowledge",
    },
  ];
  

  const mediaPartners = [
    {
      logo: RTV,
      name: "RTV Bangladesh",
      tier:  "Media"
    },
    {
      logo: techWorld,
      name: "Tech World Bangladesh",
      tier: "Media"
    }
  ];

  const strategicPartners = [
    {
      logo: JCL,
    name:"JCI Bangaldesh"
    },
  ];

  const technologyPartners = [
    {
      logo:redData,
      name: "Red Data Digital",
  
    },
  ];

  const digitalCampaignPartners = [
    {
      logo: STD,
      name: "Smart-trend Digital",
    },
  ];

  const SponsorCard = ({ sponsor, size = "medium" }) => {
    const sizeClasses = {
      large: "h-64",
      medium: "h-60",
      small: "h-40",
    };

    return (
      <div
        className={`group relative bg-white rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${sizeClasses[size]}`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-[2px] bg-white rounded-2xl" />

        <div className="relative h-full flex flex-col items-center justify-center overflow-hidden">
          <div className="w-full h-full p-4 flex items-center justify-center">
            {sponsor.logo ? (
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="text-center">
                <div className="text-4xl mb-2">🏢</div>
                <div className="text-xs text-gray-500 font-medium">
                  {sponsor.name}
                </div>
              </div>
            )}
          </div>

          <div className="absolute bottom-4 text-center w-full px-4">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              {sponsor.name}
            </h3>
            {sponsor.description && (
              <p className="text-sm text-gray-600">{sponsor.description}</p>
            )}
          </div>

          <div className="absolute top-4 right-4">
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full ${
                sponsor.tier === "Platinum"
                  ? "bg-gradient-to-r from-gray-400 to-gray-600 text-white"
                  : sponsor.tier === "Gold"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
                  : sponsor.tier === "Knowledge"
                  ? "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800"
                  : sponsor.tier === "Media"
                  ? "bg-gradient-to-r from-blue-400 to-indigo-600 text-white"
                  : "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800"
              }`}
            >
              {sponsor.tier}
            </span>
          </div>
        </div>
      </div>
    );
  };

const PartnerCard = ({ partner, size = "medium" }) => {
  const sizeClasses = {
    large: "h-64",
    medium: "h-60",
    small: "h-40",
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${sizeClasses[size]}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-[2px] bg-white rounded-2xl" />

      <div className="relative h-full flex flex-col items-center justify-center overflow-hidden p-4">
        <div className="w-full h-full flex items-center justify-center">
          {partner.logo ? (
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="text-center text-6xl">🏢</div>
          )}
        </div>

        <div className="absolute bottom-4 text-center w-full px-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
            {partner.name}
          </h3>
        </div>

        {/*  Only show badge if it's a Media Partner */}
        {/* {partner.tier === "Media" && (
          <div className="absolute top-4 right-4">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 text-white shadow-md">
              {partner.tier}
            </span>
          </div>
        )} */}
      </div>
    </div>
  );
};




  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Our Partners
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Sponsors & Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto text-pretty">
              
            </p>
          </div>
        </div>
      </section>
      {/* Platinum Sponsors */}
      <section className="py-16 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white px-6 py-2 rounded-full mb-4">

              <span className="font-bold uppercase tracking-wider">
                Platinum Sponsors
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            {platinumSponsors.map((sponsor, index) => (
              <div key={index} className="w-full sm:w-2/3 lg:w-1/2">
                <SponsorCard sponsor={sponsor} size="large" />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Gold Sponsors */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full mb-4">
              <span className="font-bold uppercase tracking-wider">
                Gold Sponsors
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {goldSponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} />
            ))}
          </div>
        </div>
      </section>
      {/* Knowledge Partner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800 px-6 py-2 rounded-full mb-4">
              <span className="font-bold uppercase tracking-wider">
                Knowledge Partners
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {knowledgePartner.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Media Partners */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-indigo-600 text-white px-6 py-2 rounded-full mb-4">
              
              <span className="font-bold uppercase tracking-wider">
                Media Partners
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mediaPartners.map((partner, index) => (
              <SponsorCard key={index} sponsor={partner} size="large" />
            ))}
          </div>
        </div>
      </section>

      {/* Strategic, Technology, Digital Campaign Partners Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
              {/* Strategic Partner */}
              <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-teal-600 text-black px-3 py-1.5 rounded-full mb-4 shadow-md">
               
                <span className="text-lg font-semibold tracking-wide">
                  Strategic Partner
                </span>
              </div>
              {/* Technology Partner */}
              <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-teal-600 text-black px-3 py-1.5 rounded-full mb-4 shadow-md">
                
                <span className="text-lg font-semibold tracking-wide">
                  Technology Partner
                </span>
              </div>
              {/* Digital Campaign Partner */}
              <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-teal-600 text-black px-3 py-1.5 rounded-full mb-4 shadow-md">
               
                <span className="text-lg font-semibold tracking-wide">
                  Digital Campaign Partner
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <PartnerCard partner={partner} />
                <p className="mt-2 text-center text-gray-600 font-medium"></p>
              </div>
            ))}

            {technologyPartners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <PartnerCard partner={partner} />
              </div>
            ))}

            {digitalCampaignPartners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <PartnerCard partner={partner} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl shadow-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Become a Sponsor
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=moon@org.biin.bd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
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
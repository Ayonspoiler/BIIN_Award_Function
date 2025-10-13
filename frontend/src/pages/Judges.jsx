import mainulImg from "../assets/JudgesImage/Dr.BM Mainul Hossain.jpg"
import dowlaImg from "../assets/JudgesImage/Ms-Rubaba-Dowla.jpg"
import tahminaImg from "../assets/JudgesImage/Ms.-Tahmina-Afrose.jpg"
import ridwanulImg from "../assets/JudgesImage//Ridawanul_Haque.png"
import shakhawatImg from "../assets/JudgesImage/SAKHAWAT-HOSZSAIN-MAMUN.jpg"
// import arifurImg from "../assets/JudgesImage/a"
import razeevImg from "../assets/JudgesImage/RAZEEV-H-CHOWDHURY.jpg"
import zahidulImg from "../assets/JudgesImage/Zahidul-Haque.jpg"
// import amitavImg from "../assets/JudgesImage/a"
import arifurImg from "../assets/JudgesImage/Mr_Arifur_Rahman.png"
import mamunImg from "../assets/JudgesImage/Abdullah-Al-Mamun.jpg"
import akterruzzamanImg from "../assets/JudgesImage/Mohammad-Akteruzzaman.jpg"
import syedHabibImg from "../assets/JudgesImage/Syed-A-Habib.jpg"
import marufKhanImg from "../assets/JudgesImage/Md.-Maruf-Hossain-Khan.jpg";
// import humaunImg from "../assets/JudgesImage/h"
import manowarulImg from "../assets/JudgesImage/Dr.-Md.-Manowarul-Islam.jpg"
import zulfikerImg from "../assets/JudgesImage/Zulfikar.jpg"
import mridhaImg from "../assets/JudgesImage/Dr-Firoz-Mridha.jpg"
import motaherImg from "../assets/JudgesImage/Motaher-Hoshan-Khan.jpg"
import kawserImg from "../assets/JudgesImage/MOHAMMAD-KAWSAR-UDDIN.jpg"
import sifatAhemdImg from "../assets/JudgesImage/Sifat-Ahmed-Chaudhuri.jpg"
import golamKibriaImg from "../assets/JudgesImage/Prof-Md.-Golam-Kibria.jpg"
import naziahasinImg from "../assets/JudgesImage/MS.-NAZIA-HASIN.jpg"
import mahmudRashidImg from "../assets/JudgesImage/M.-MAHMUDUR-RASHID.jpg"
import joyaKabirImg from "../assets/JudgesImage/Joya-Kabir.jpg"
// import sabbinHassanImg from "../assets/JudgesImage/sa"
import tahsinShezanImg from "../assets/JudgesImage/Tahsin-Azim-Shezan.jpg"

const Judges = () => {
  // Placeholder judge data - images can be replaced later
  const judges = [
    {
      image: dowlaImg,
      name: "Ms. Rubaba Dowla ",
      designation: "Country Managing Director ",
      organization: "Oracle Bangladesh Limited",
    },
    {
      image: tahminaImg,
      name: "Ms. Tahmina Afrose ",
      designation: "Director",
      organization: "Walton Hi-Tech Industries PLC.",
      //   category: "Public Sector Expert",
    },
    {
      image: ridwanulImg,
      name: "Md. Ridhwanul Haq, PhD",
      designation: "Professor",
      organization: "IBA, University of Dhaka",
      //   category: "Research Specialist",
    },
    {
      image: mainulImg,
      name: "BM Mainul Hossain",
      designation: "Professor & Director",
      organization: "Institute of Information Technology, University of Dhaka",
      //   category: "Technology Expert",
    },
    {
      image: shakhawatImg,
      name: "Sakhawat Hossain Mamun ",
      designation: "Vice Chairman ",
      organization: "Bhaiya Group of Industries",
    },
    {
      image: arifurImg,
      name: "Arifur Rahman",
      designation: "Director, South Asia    ",
      organization: "VISA",
    },
    {
      image: razeevImg,
      name: "RAZEEV H CHOWDHURY ",
      designation: "Sr. Vice President ",
      organization: "Dhaka Chamber of Commerce & Industry (DCCI)",
    },
    {
      image: zahidulImg,
      name: "Zahidul Haque",
      designation: "Chief Technology Officer",
      organization: "Eastern Bank PLC.",
    },

    {
      image: mamunImg,
      name: "Abdullah Al Mamun",
      designation: "Head of Marketing and Business Development",
      organization: "Super Star Group Limited",
      //   category: "Academic Leader",
    },
    {
      image: akterruzzamanImg,
      name: "Mohammad Akteruzzaman ",
      designation: "Country General Manager ",
      organization: "PROSE Technologies GmbH",
    },
    {
      image: syedHabibImg,
      name: "Syed A Habib",
      designation: "Managing Director",
      organization: "VROOM Services Ltd",
      //   category: "Industry Pioneer",
    },
    {
      image: marufKhanImg,
      name: "Md. Maruf Hossain Khan ",
      designation: "Managing Director",
      organization: "Star Concord (BD) Limited",
      //   category: "Technical Leader",
    },

    {
      image: manowarulImg,
      name: "Dr. Md. Manowarul Islam",
      designation: "Professor",
      organization: "Jagannath University",
      //   category: "Digital Strategy Expert",
    },

    {
      image: zulfikerImg,
      name: "Dr. Md. Zulfiker Mahmud",
      designation: "Professor",
      organization: "Jagannath University",
    },
    {
      image: mridhaImg,
      name: "Prof. Dr. M. Firoz Mridha",
      designation: "Department of Computer Science",
      organization: "American International University - Bangladesh (AIUB)",
    },
    {
      image: motaherImg,
      name: "Md. Motaher Hoshan Khan",
      designation: "Secretary General",
      organization:
        "Bangladesh-Malaysia Chamber of Commerce and Industry (BMCCI)",
    },
    {
      image: kawserImg,
      name: "Mohammad Kawsar Uddin",
      designation: "President",
      organization: "Technology Media Guild Bangladesh (TMGB)",
    },
    {
      image: sifatAhemdImg,
      name: "Sifat Ahmed Chaudhuri",
      designation: "Joint Secretary General",
      organization:
        "Bangladesh-Malaysia Chamber of Commerce and Industry (BMCCI)",
    },
    {
      image: golamKibriaImg,
      name: "Prof Md. Golam Kibria",
      designation:
        "Professor & Head (Acting), Computer Science and Engineering	",
      organization: "University of Liberal Arts Bangladesh (ULAB)",
    },
    {
      image: naziahasinImg,
      name: "Ms. Nazia Hasin",
      designation: "Vice President, Product",
      organization: "Truck Lagbe",
    },
    {
      image: mahmudRashidImg,
      name: "M. Mahmudur Rashid",
      designation: "Director",
      organization:
        "Bangladesh-Malaysia Chamber of Commerce and Industry (BMCCI)",
    },

    {
      image: joyaKabirImg,
      name: "Joya Kabir",
      designation: "Chairman",
      organization: "AyAl Corp Limited",
    },

    {
      image: tahsinShezanImg,
      name: "Tahsin Azim Shezan",
      designation: "Director",
      organization: "Classic Group",
    },
    {
      name: "Md. Humaun Kabir",
      designation: "Head of IT",
      organization: "Anwar Group of Industries",
      //   category: "Entrepreneurship Expert",
    },
    {
      name: "Amitav Kaiser",
      designation: "Head of MTB Infrastructure Division ",
      organization: "Mutual Trust Bank PLC",
    },
    {
      name: "Sabbin Hasan",
      designation: "Digital Growth Editor, Samakal",
      organization: "General Secretary BIJF",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Meet Our Panel
                </span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Distinguished Judges
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto text-pretty"></p>
          </div>
        </div>
      </section>

      {/* Judges Grid */}
      <section className="py-16 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {judges.map((judge, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
              >
                {/* Decorative gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="absolute inset-[2px] bg-white rounded-2xl" />

                {/* Content */}
                <div className="relative p-6">
                  {/* Image placeholder with gradient background */}
                  <div className="relative mb-6">
                    <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary-400 via-secondary-400 to-purple-400 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
                        <div className="w-full aspect-square rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={judge.image}
                            alt={judge.name}
                            className="w-full h-58 object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                        {judge.category}
                      </span>
                    </div>
                  </div>

                  {/* Judge info */}
                  <div className="text-center mt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {judge.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary-600 mb-1">
                      {judge.designation}
                    </p>
                    <p className="text-sm text-gray-600">
                      {judge.organization}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judging Criteria Section */}
      {/* <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Judging Criteria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our judges evaluate entries based on comprehensive criteria
              ensuring fair assessment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Innovation",
                description: "Originality and creativity of the solution",
                icon: "💡",
                color: "from-yellow-400 to-orange-500",
              },
              {
                title: "Impact",
                description: "Potential to create meaningful change",
                icon: "🎯",
                color: "from-blue-400 to-cyan-500",
              },
              {
                title: "Technical Excellence",
                description: "Quality of implementation and design",
                icon: "⚙️",
                color: "from-purple-400 to-pink-500",
              },
              {
                title: "Scalability",
                description: "Potential for growth and expansion",
                icon: "📈",
                color: "from-green-400 to-emerald-500",
              },
            ].map((criteria, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${criteria.color} rounded-xl flex items-center justify-center mb-4 text-3xl`}
                >
                  {criteria.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {criteria.title}
                </h3>
                <p className="text-gray-600">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl shadow-2xl p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Showcase Your Innovation?
                </h2>
                <p className="text-xl mb-8 text-gray-100">
                Submit your entry and get evaluated by our distinguished panel of
                judges
                </p>
                <a
                href="/registration"
                className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                Register Your Entry
                </a>
            </div>
            </div>
        </section> */}
    </div>
  );
};

export default Judges;

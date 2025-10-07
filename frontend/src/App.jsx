import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Competition from "./pages/Competition";
import Guidelines from "./pages/Guidelines";
import Registration from "./pages/Registration";
import AboutBIIN from "./pages/AboutBIIN";
import Footer from "./components/Footer";
import JudgeMarkingSystem from "./pages/JudgeMarkingSystem";
import ResultsPage from "./pages/ResultsPage";


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/categories" element={<Competition />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/registration" element={<Registration />} />
          {/* <Route path="/about-biin" element={<AboutBIIN />} /> */}
          <Route path="/marking" element={<JudgeMarkingSystem/>}/>
          <Route path="/results" element={<ResultsPage/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

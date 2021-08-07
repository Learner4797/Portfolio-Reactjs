import "./app.css";
import Certifications from "./components/Certifications/Certifications";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Skills from "./components/skills/Skills";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./components/footer/Footer";
import Projects from "./components/Projects/Projects";
import "./utils.css";
import MobNnav from "./components/mob-nav/MobNnav";


function App() {
  return (
    <main>
    <div className="site-main-wrapper">
      <header>
      <video src='./vedio/Forest - 40034.mp4' autoPlay loop muted />
        <div className="container">
            <Topbar/>
            <MobNnav/>
            <Hero/>
        </div>
      </header>
      <About/>
      <Skills/>
      <Certifications/>
      <Projects/>
      <Footer/>
    </div>
    </main>
  );
}

export default App;

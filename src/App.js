import "./App.css";
import Header from "./components/Header";
import WelcomeHero from "./components/WelcomeHero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Profiles from "./components/Profiles";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <WelcomeHero />
      <About />
      <Education />
      <Experience />
      <Profiles />
      <Footer />
    </div>
  );
};

export default App;

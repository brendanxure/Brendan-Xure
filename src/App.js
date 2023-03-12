import { useState } from "react";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";


function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className={darkMode ? 'dark' : ""}>
      <div className='dark:bg-black'>
      <Header toggleTheme={toggleTheme}/>
      <Banner />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;

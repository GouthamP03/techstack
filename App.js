import React from 'react';
import Footer from './Components/Footer';
import Navigation from "./Components/Navigation"
import Services from "./Components/Services";
import Contact from './Components/Contact';
import Cards from './Components/Cards';
import TopSection from './Components/TopSection';
const App = () => {
  return (
    <div>
        <Navigation/>
        <TopSection/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App

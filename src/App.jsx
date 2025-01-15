
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Checkour from './Components/Checkour'
import Choose from './Components/Choose'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
// import Recipes from './Components/Recipes'
import Services from './Components/Services'
import Customers from './Components/Customers'

function App() {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleButton = (index) => {
      setActiveIndex(index);
    };
  return (
    <div>
      <div className="container w-[1300px] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Main></Main>
        <Checkour activeIndex={activeIndex} toggleButton={toggleButton} ></Checkour>
        {/* <Recipes></Recipes> */}
        <Services></Services>
        <Choose></Choose>
        <Customers></Customers>
      </div>
    </div>
  )
}

export default App


import './App.css'
import Banner from './Components/Banner'
import Checkour from './Components/Checkour'
import Main from './Components/Main'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div>
      <div className="container w-[1300px] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Main></Main>
        <Checkour></Checkour>
      </div>
    </div>
  )
}

export default App

import './App.css';
import { Header, HomeSection, OurClientsSection, ReasonSection, SolutionsSection } from "./components";
import HomeSecondaryDetail1 from './assets/background_img/home_sd1.png'
import HomeSecondaryDetail2 from './assets/background_img/home_sd2.png'

function App() {

  return (
    <div className="overflow-x-hidden">
      <div className="bg-[url(./assets/background_img/home.jpg)] relative">
        <img src={HomeSecondaryDetail1} alt="" className="absolute h-full object-cover object-top z-0 left-1/2 -translate-x-1/2 -bottom-10"/>
        <img src={HomeSecondaryDetail2} alt="" className="absolute h-full w-full object-cover z-10"/>
        <Header />
        <HomeSection />
      </div>
      <OurClientsSection />
      <SolutionsSection />
      <ReasonSection />
    </div>
  )
}

export default App

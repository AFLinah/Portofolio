import { Hero, NavBar, Team, Skills } from "../components/sections";
import About from "../components/sections/About";

const HomePage = () => {
  return (
      <div>
        <NavBar/>
        <Hero />
        <About/>
        <Team/>
        <Skills/>
      </div>
  )
}

export default HomePage;

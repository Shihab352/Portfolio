import Slider from "../Components/Slider";
import About from "./About";
import Experience from "./Experience";
import Project from "./project";
import Skill from "./Skill";



const Home = () => {
    return (
      <div>
        <Slider></Slider>
        <div className="mt-10">
        <About></About>
        </div>
        <div className="mt-10">
            <Skill></Skill>
        </div>
        <div>
            <Experience></Experience>
        </div>
        <div className="my-10">
            <Project></Project>
        </div>
      </div>

        
    );
};

export default Home;
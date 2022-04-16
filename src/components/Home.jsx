import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#2F333F]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#2FA4FF] text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#CCD6F6]">
          David Cervellon
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892B0]">
          I'm a Front-end Developer
        </h2>
        <p className="text-[#8892B0] py-4 max-w-[700px]">
          I'm a front-end developer specializing in creating (and occasionally
          designing) exceptional digital experiences.
        </p>

        <div className="lg:flex">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#2FA4FF] hover:border-[#2FA4FF] lg:mr-6">
              View Work
              <span className="group-hover:rotate-90 duration-200">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

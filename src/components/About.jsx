import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsCloudDownload } from 'react-icons/bs';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#2F333F] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#2FA4FF]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <div className="sm:text-right text-3xl font-bold mb-4">
              <p>Hi. I'm David, nice to meet you. Please take a look around.</p>
            </div>

            <ul className="flex text-2xl lg:text-4xl justify-between p-1 lg:mb-10">
              <li>
                <a
                  href="https://www.linkedin.com/in/david-cervellon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/edavid72"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="mailto:david.cervellon72@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiOutlineMail />
                </a>
              </li>
            </ul>

            <div>
              <a
                href="https://drive.google.com/file/d/1z43m4Utl9VXdVyP06TLHJNabSXPnn_Y5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#2FA4FF] hover:border-[#2FA4FF]">
                  Download Resume
                  <span>
                    <BsCloudDownload className="ml-3" />
                  </span>
                </button>
              </a>
            </div>
          </div>

          <div>
            <p className="text-base lg:text-lg text-justify">
              I am passionate about creating great software that improves the
              lives of those around me. Lover of new technologies I like to be
              always updated and constantly learning.
              <br />
              <br />
              <span>
                I am looking for a work team to join to contribute and develop
                my knowledge!!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

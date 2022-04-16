import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { ImProfile } from 'react-icons/im';

const Footer = () => {
  return (
    <div className="w-full bg-[#2F333F] text-gray-300 lg:p-2">
      <div className="grid lg:flex justify-center items-center">
        <div className="mb-2 text-center">
          <h2 className="capitalize text-gray-300 text-lg lg:text-xl">
            <span className="font-light text-crimson">&copy; 2022</span> david
            cervellon
          </h2>
        </div>

        <div className="pb-2 items-center text-center flex justify-center">
          <ul className="flex text-xl justify-center items-center lg:text-2xl">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;

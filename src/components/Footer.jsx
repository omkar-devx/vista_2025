import { FaExternalLinkSquareAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="my-3">
      <div className="text-white">
        <h3 className="flex my-1 justify-center items-center gap-2">
          Made with
          <span>
            <button className="flex items-center justify-center rounded-lg border-none bg-transparent relative hover:cursor-pointer focus:outline-none">
              <svg
                className="icon w-[1.5rem] transition-transform duration-200 hover:scale-125 focus:fill-[#fd1853]"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-red-600"
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                />
              </svg>
            </button>
          </span>
          by{" "}
          <span className="flex gap-0 items-center font-bold text-lg underline cursor-pointer text-[#007bff]">
            <a href="https://www.linkedin.com/in/omkardevx/" target="_blank">
              Omkar Prajapati
            </a>
            <LiaExternalLinkAltSolid
              style={{ width: "1.4rem", height: "1.4rem" }}
            />
          </span>
        </h3>
      </div>
      <div className="flex gap-4 justify-center items-center text-white">
        <div>
          <a href="https://github.com/omkar-devx" target="_blank">
            <FaGithub style={{ width: "1.6rem", height: "1.6rem" }} />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/omkardevx/" target="_blank">
            <FaLinkedin
              style={{ color: "#0a66c3", width: "2rem", height: "2rem" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

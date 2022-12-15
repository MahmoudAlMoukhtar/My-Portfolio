import {Link} from "react-router-dom";
import {AiFillLinkedin, AiFillGithub, AiFillFacebook} from "react-icons/ai";
import {startLogin, startLogout} from "../redux/actions/auth";
import {firebase, googleAuthProvider} from "../firebase/firebase";
const Navbar = () => {
  return (
    <header className="flex flex-col justify-center items-center w-[100%] py-4 gap-4 sm:flex-row sm:justify-between sm:gap-0">
      <nav className="flex justify-center sm:justify-start gap-6 md:gap-8 w-[100%] sm:w-1/3">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
      </nav>
      <div className="text-4xl w-1/3 flex justify-center hidden absolute sm:flex sm:static">
        M
      </div>
      <ul className="flex gap-4 justify-center sm:justify-end w-[100%] sm:w-1/3">
        <a
          href="https://www.linkedin.com/in/mahmoud-al-moukhtar-a00604229/"
          target="_blank"
        >
          <AiFillLinkedin size={30} />
        </a>
        <a
          href="https://github.com/MahmoudAlMoukhtar?tab=repositories"
          target="_blank"
        >
          <AiFillGithub size={30} />
        </a>
        <a href="">
          <AiFillFacebook size={30} />
        </a>
      </ul>
    </header>
  );
};

export default Navbar;

import {Link, NavLink} from "react-router-dom";
import {AiFillLinkedin, AiFillGithub, AiFillFacebook} from "react-icons/ai";
import {connect} from "react-redux";
const Navbar = ({isAuth}) => {
  return (
    <header className="flex flex-col justify-center items-center w-[100%] py-4 gap-4 sm:flex-row sm:justify-between sm:gap-0">
      <nav className="flex justify-center sm:justify-start items-center gap-6 md:gap-8 w-[100%] sm:w-1/3">
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-black font-semibold sm:font-bold bg-gray-400 rounded sm:px-4 sm:py-2  px-2"
              : undefined
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-black font-semibold sm:font-bold bg-gray-400 rounded sm:px-4 sm:py-2  px-2"
              : undefined
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-black font-semibold sm:font-bold bg-gray-400 rounded sm:px-4 sm:py-2  px-2"
              : undefined
          }
          to="/certificates"
        >
          Certificates
        </NavLink>
        {isAuth === "PLWz0kbr27U0mp0OHsOOqbDVsq22" && (
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-black font-semibold sm:font-bold bg-gray-400 rounded sm:px-4 sm:py-2  px-2"
                : undefined
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        )}
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

function mapStateToProps(state) {
  return {
    isAuth: state.auth.uid,
  };
}

export default connect(mapStateToProps)(Navbar);

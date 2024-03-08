
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = 'font-bold';

  return (
    <nav className="flex flex-col md:flex-row rounded-lg justify-between items-center w-full bg-black text-white p-4">
      <ul className="flex flex-col md:flex-row items-center md:items-start gap-5">
        <li className="font-semibold text-lg">
          <NavLink to="/" className="hover:text-blue-800 hover:bg-gray-300 p-2 rounded-md">
            Portafolio
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            to="/"
            className={`hover:text-blue-800 hover:bg-gray-300 p-2 rounded-md md:mt-0 ${
              activeStyle
            }`}
          >
            Home
          </NavLink>
        </li> */}

        <li>
          <NavLink
            to="/projects"
            className={`hover:text-blue-800 hover:bg-gray-300 p-2 rounded-md md:mt-0 ${
              activeStyle
            }`}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/miniprojects"
            className={`hover:text-blue-800 hover:bg-gray-300 p-2 rounded-md md:mt-0 ${
              activeStyle
            }`}
          >
            MiniProjects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/skills"
            className={`hover:text-blue-800 hover:bg-gray-300 p-2 rounded-md md:mt-0 ${
              activeStyle
            }`}
          >
            Technical Skills
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={`hover:text-blue-800 hover:bg-gray-300 p-2 rounded-md md:mt-0 ${
              activeStyle
            }`}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

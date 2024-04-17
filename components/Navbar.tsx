import { SiTicktick } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-nav-grey">
      <h1 className="flex items-center gap-2 text-white text-xl sm:text-2xl">
        <span className=" text-yellow ">
          <SiTicktick />
        </span>
        Language Tester
      </h1>

      <p className="text-white text-xl">Russian</p>
    </nav>
  );
};

export default Navbar;

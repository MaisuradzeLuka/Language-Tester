import { SignOutButton, SignedIn } from "@clerk/nextjs";
import { SiTicktick } from "react-icons/si";
import { PiSignOut } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-nav-grey text-white">
      <h1 className="flex items-center gap-2 text-white text-xl sm:text-2xl">
        <span className=" text-yellow ">
          <SiTicktick />
        </span>
        Language Tester
      </h1>

      <SignedIn>
        <SignOutButton>
          <PiSignOut className="text-2xl cursor-pointer" />
        </SignOutButton>
      </SignedIn>
    </nav>
  );
};

export default Navbar;

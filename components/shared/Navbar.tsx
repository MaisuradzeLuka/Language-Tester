import {
  SignOutButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
import { SiTicktick } from "react-icons/si";
import { PiSignOut, PiSignIn } from "react-icons/pi";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-nav-grey text-white">
      <Link href="/">
        <h1 className="flex items-center gap-2 text-white text-xl sm:text-2xl">
          <span className=" text-yellow ">
            <SiTicktick />
          </span>
          Language Tester
        </h1>
      </Link>

      <ul className="hidden md:block font-semibold">
        <li className="hover:text-yellow">
          <Link href="/addQuestion">Add question</Link>
        </li>
      </ul>

      <div className="flex gap-3">
        <SignedIn>
          <SignOutButton>
            <PiSignOut className="text-2xl cursor-pointer hover:text-red-500" />
          </SignOutButton>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <PiSignIn className="text-2xl cursor-pointer hover:text-green-500" />
          </SignInButton>
        </SignedOut>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;

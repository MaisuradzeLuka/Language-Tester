"use client";

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
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 py-4 px-6 ${
        path === "/" ? "bg-transparent" : "bg-nav-grey"
      } text-white z-20`}
    >
      <div className="flex justify-between items-center max-w-[1100px] mx-auto">
        <Link href="/">
          <h1 className="flex items-center gap-2 text-white text-xl sm:text-2xl">
            <span className=" text-yellow ">
              <SiTicktick />
            </span>
            Language Tester
          </h1>
        </Link>

        <ul className="hidden md:flex gap-8 font-semibold">
          {navLinks.map((link) => (
            <li key={link.id} className="inline hover:text-yellow">
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
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
      </div>
    </nav>
  );
};

export default Navbar;

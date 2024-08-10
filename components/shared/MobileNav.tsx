import {
  Sheet,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetContent,
} from "@/components/ui/sheet";

import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger
          asChild
          className="text-2xl cursor-pointer hover:text-yellow"
        >
          <RxHamburgerMenu />
        </SheetTrigger>
        <SheetContent className=" bg-milky-white  text-xl font-semibold">
          <ul className="h-full font-semibold flex flex-col items-center gap-5 text-gray-700 mt-14">
            <li className="inline hover:text-yellow">
              <SheetClose asChild>
                <Link href="/">Home</Link>
              </SheetClose>
            </li>
            <li className="inline hover:text-yellow">
              <SheetClose asChild>
                <Link href="/addQuestion">Add question</Link>
              </SheetClose>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

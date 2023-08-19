import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdAccountCircle} from 'react-icons/md'
const Navbar = () => {
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex items-center flex-wrap p-5 flex-col md:flex-row ">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="/picture/saylani.png" className=" max-w-min h-10" />
            <span className="sr-only">Syed Shayan</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
              className="mr-5 hover:text-white hover:cursor-pointer"
            >
              Home
            </Link>
            <Link
              href={`/Man/`}
              className="mr-5 hover:text-white hover:cursor-pointer"
            >
              Man
            </Link>
            <Link
              href="Women"
              className="mr-5 hover:text-white hover:cursor-pointer"
            >
              Women
            </Link>
            <Link
              href=""
              className="mr-5 hover:text-white hover:cursor-pointer  "
            >
              Toys
            </Link>
          </nav>
          <Link href="/startAccount/signup">
             <MdAccountCircle />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;

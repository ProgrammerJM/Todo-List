import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-center w-full h-auto md:h-24 p-4 bg-black text-white">
      <p className="text-sm mb-2 md:mb-0">
        Develop by John Mark Tizado with love
      </p>
      <p className="text-sm mx-2 hidden md:block">&bull;</p>
      <Link
        href={"https://github.com/ProgrammerJM"}
        target="_blank"
        className="text-sm mb-2 md:mb-0"
        aria-label="Github"
      >
        Github
      </Link>
      <p className="text-sm mx-2 hidden md:block">&bull;</p>
      <Link
        href={"https://x.com/xyjtiz"}
        target="_blank"
        className="text-sm mb-2 md:mb-0"
        aria-label="Twitter"
      >
        Twitter
      </Link>
      <p className="text-sm mx-2 hidden md:block">&bull;</p>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Todo App - PERN Stack
      </p>
    </footer>
  );
};

export default Footer;

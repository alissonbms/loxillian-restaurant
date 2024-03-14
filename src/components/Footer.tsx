import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="uppercase h-12 p-4 md:h-20 lg:px-16 xl:px-36 text-red-500 flex justify-between items-center border-t-2 border-t-red-500">
      <Link href="/" className="font-bold text-xl">
        Massimo
      </Link>
      <p>© ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;

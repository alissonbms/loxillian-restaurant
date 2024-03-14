import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import ContactIcon from "./ContactIcon";

const Navbar = () => {
  const temporaryUser = false;
  return (
    <nav className="h-12 p-4 text-red-500 flex justify-between items-center border-b-2 border-b-red-500 md:h-20 lg:px-16 xl:px-36 uppercase">
      {/*LEFT LINKS*/}
      <div className="hidden md:flex gap-4 flex-1 font-medium	">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/*LOGO*/}
      <div className=" text-xl font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      {/*RIGHT LINKS*/}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end font-medium">
        <ContactIcon />
        {temporaryUser ? (
          <Link href="/orders">Orders</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

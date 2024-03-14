"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";
import ContactIcon from "./ContactIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const temporaryUser = false;
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        onClick={() => setOpen(!open)}
        src={open ? "/close.png" : "/open.png"}
        alt="menu button"
        width={20}
        height={20}
        className="cursor-pointer"
      />
      {open && (
        <div className="bg-red-500 text-white absolute w-full left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => {
                setOpen(false);
              }}
            >
              {link.title}
            </Link>
          ))}
          {temporaryUser ? (
            <Link
              href="/orders"
              onClick={() => {
                setOpen(false);
              }}
            >
              Orders{" "}
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={() => {
                setOpen(false);
              }}
            >
              Login
            </Link>
          )}
          <Link
            href="/cart"
            onClick={() => {
              setOpen(false);
            }}
          >
            <CartIcon />
          </Link>

          <ContactIcon />
        </div>
      )}
    </div>
  );
};

export default Menu;

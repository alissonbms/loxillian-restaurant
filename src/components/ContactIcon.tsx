import Image from "next/image";
import React from "react";

const ContactIcon = () => {
  return (
    <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-green-500 px-1 rounded-md ">
      <Image src="/phone.png" alt="restaurant phone" width={20} height={20} />
      <span className="text-white"> 123 456 78</span>
    </div>
  );
};

export default ContactIcon;

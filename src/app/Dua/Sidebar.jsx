import Image from "next/image";
import dua from "../../../public/img/dua-logo.svg";
import home from "../../../public/img/home.svg";
import allDua from "../../../public/img/alldua.svg";
import memorize from "../../../public/img/memorize.svg";
import bookmark from "../../../public/img/bookmark.svg";
import ruqyah from "../../../public/img/ruqyah.svg";
import duaInfo from "../../../public/img/dua-info.svg";
import books from "../../../public/img/books.svg";
import other from "../../../public/img/other.png";
import './sideber.css'


import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between w-[97px] p-[16px] pb h-[93vh] overflow-y-auto overflow-x-hidden bg-white rounded-[1.5rem]">
      <div className="m-auto">
        <Image className="w-[50px]" src={dua} alt="Image" />
      </div>
      <div className="flex flex-col gap-5 m-auto">
        <div className="w-[50px] h-[50px] bg-[#E8F0F5] rounded-full flex justify-center items-center">
          <Image src={home} className="" alt="Image" />
        </div>
        <div className="w-[50px] h-[50px] bg-[#E8F0F5] rounded-full flex justify-center items-center">
          <Image src={allDua} className="bg-[#E8F0F5]" alt="Image" />
        </div>
        <div className="w-[50px] h-[50px] bg-[#E8F0F5] rounded-full flex justify-center items-center">
          <Image src={memorize} className="bg-[#E8F0F5]" alt="Image" />
        </div>
        <div className="w-[50px] h-[50px] bg-[#E8F0F5] rounded-full flex justify-center items-center">
          <Image src={bookmark} className="bg-[#E8F0F5]" alt="Image" />
        </div>
        <div className="w-[50px] h-[50px] bg-[#E8F0F5] rounded-full flex justify-center items-center">
          <Image src={ruqyah} className="bg-[#E8F0F5]" alt="Image" />
        </div>
        <div className="w-[50px] h-[50px] bg-[#E8F0F5] rounded-full flex justify-center items-center">
          <Image src={duaInfo} className="bg-[#E8F0F5]" alt="Image" />
        </div>
        <div className="w-[50px] h-[50px] bg-[#E8F0F5] rounded-full flex justify-center items-center">
          <Image src={books} className="bg-[#E8F0F5]" alt="Image" />
        </div>
      </div>
      <div className="m-auto rounded-[5px]">
      <Image src={other} className="bg-[#E8F0F5]" alt="Image" />
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import Image from "next/image";
import profile from "../../../public/img/profile.svg";
import language from "../../../public/img/language.svg";
import general from "../../../public/img/general.svg";
import alldua from "../../../public/img/alldua.svg";

const Settings = () => {
  return (
    <div className="w-[20%]">
      <div className="mb-4 flex justify-end">
        <Image src={profile} alt="image" />
      </div>
      <div className="bg-white h-[85.5vh] rounded-[16px]">
        <div className="text-center text-black pt-9 pb-6 text-xl">Settings</div>
        <div className="flex items-center bg-slate-100 text-slate-400 w-[90%] m-auto rounded-[12px] mb-3">
          <div className="p-[10px] bg-slate-300 ml-2 rounded-full">
            <Image className="" src={language} alt="img" />
          </div>
          <p className="px-[10px] py-4">Language Settings</p>
        </div>
        <div className="flex items-center bg-slate-100 text-slate-400 w-[90%] m-auto rounded-[12px] mb-3">
          <div className="p-[10px] bg-slate-300 ml-2 rounded-full">
            <Image className="" src={general} alt="img" />
          </div>
          <p className="px-[10px] py-4">General Settings</p>
        </div>
        <div className="flex items-center bg-slate-100 text-slate-400 w-[90%] m-auto rounded-[12px] mb-3">
          <div className="p-[10px] bg-slate-300 ml-2 rounded-full">
            <Image className="" src={alldua} alt="img" />
          </div>
          <p className="px-[10px] py-4">Font Settings</p>
        </div>
        <div className="flex items-center bg-slate-100 text-slate-400 w-[90%] m-auto rounded-[12px] mb-3">
          <div className="p-[10px] bg-slate-300 ml-2 rounded-full">
            <Image className="" src={alldua} alt="img" />
          </div>
          <p className="px-[10px] py-4">Appearance Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;

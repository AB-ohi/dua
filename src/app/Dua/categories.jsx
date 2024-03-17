"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../utils/categories";
import {
  getSubCategories1,
  getSubCategories10,
  getSubCategories2,
  getSubCategories3,
  getSubCategories4,
  getSubCategories5,
  getSubCategories6,
  getSubCategories7,
  getSubCategories8,
  getSubCategories9,
} from "../utils/subCategory";
import "./cate.css";
import Image from "next/image";
import dua from "../../../public/img/duar_gurutto.svg";
import zikirer from "../../../public/img/zikirer_fozilot.svg";
import duaKobul from "../../../public/img/dua_kobuler_somoy.svg";
import jaderDoaKObulHoi from "../../../public/img/jader_dua_kobul_hoy.svg";
import morning from "../../../public/img/sokal_sondha.svg";
import sleep from "../../../public/img/ghum.svg";
import cloths from "../../../public/img/poshak.svg";
import home from "../../../public/img/bari.svg";
import toilet from "../../../public/img/toilet.svg";
import azan from "../../../public/img/azan_ikamot.svg";

const Categories = () => {
  const [subCategories1, setSubCategories1] = useState([]);
  console.log(subCategories1);
  const [subCategories2, setSubCategories2] = useState([]);
  const [subCategories3, setSubCategories3] = useState([]);
  const [subCategories4, setSubCategories4] = useState([]);
  const [subCategories5, setSubCategories5] = useState([]);
  const [subCategories6, setSubCategories6] = useState([]);
  const [subCategories7, setSubCategories7] = useState([]);
  const [subCategories9, setSubCategories9] = useState([]);
  const [subCategories10, setSubCategories10] = useState([]);
  const [subCategories8, setSubCategories8] = useState([]);

  const [subCategories, setSubCategories] = useState([]);
  // console.log(categories)
  // console.log(subCategories)

  const [showDuImportance, setShowDuImportance] = useState(true);
  const [showDuExcellence, setShowDuExcellence] = useState(true);
  const [showDuTime, setShowDuTime] = useState(true);
  const [showDuAcceptance, setShowDuAcceptance] = useState(true);
  const [showDuMorning, setShowDuMorning] = useState(true);
  const [showDuSleep, setShowDuSleep] = useState(true);
  const [showDuCloths, setShowDuCloths] = useState(true);
  const [showDuHome, setShowDuHome] = useState(true);
  const [showDuToilet, setShowDuToilet] = useState(true);
  const [showAdhaan, setShowAdhaan] = useState(true);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const useData = await getCategories();
        setSubCategories(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategoriesData();
  }, []);

  useEffect(() => {
    const fetchSubCategoriesData = async () => {
      try {
        const useData = await getSubCategories1();
        setSubCategories1(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategoriesData();
  }, []);
  useEffect(() => {
    const fetchSubCategoriesData = async () => {
      try {
        const useData = await getSubCategories2();
        setSubCategories2(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategoriesData();
  }, []);
  useEffect(() => {
    const fetchSubCategoriesData = async () => {
      try {
        const useData = await getSubCategories3();
        setSubCategories3(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategoriesData();
  }, []);
  useEffect(() => {
    const fetchSubCategoriesData = async () => {
      try {
        const useData = await getSubCategories4();
        setSubCategories4(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategoriesData();
  }, []);
  useEffect(() => {
    const fetchSubCategoriesData = async () => {
      try {
        const useData = await getSubCategories5();
        setSubCategories5(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategoriesData();
  }, []);
  useEffect(() => {
    const fetchSubCategoriesData = async () => {
      try {
        const useData = await getSubCategories6();
        setSubCategories6(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategoriesData();
  }, []);
  useEffect(() => {
    const fetchSubCategoriesData = async () => {
      try {
        const useData = await getSubCategories7();
        setSubCategories7(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategoriesData();
  }, []);
  useEffect(() => {
    const fetchSubCategoriesData = async () => {
      try {
        const useData = await getSubCategories8();
        setSubCategories8(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategoriesData();
  }, []);
  useEffect(() => {
    const fetchSubCategoriesData = async () => {
      try {
        const useData = await getSubCategories9();
        setSubCategories9(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategoriesData();
  }, []);
  useEffect(() => {
    const fetchSubCategoriesData = async () => {
      try {
        const useData = await getSubCategories10();
        setSubCategories10(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategoriesData();
  }, []);
  return (
    <div className="w-[25%]">
      <div className="w-[90%] m-auto">
        <div className="text-2xl text-black mb-4">Duas Page</div>
        <div className="bg-white">
          <p
            className="bg-[#1FA45B] flex items-center w-full h-[56px] justify-center text-white"
            style={{ borderRadius: "11px 11px 0 0" }}
          >
            Categories
          </p>
          <div className="w-[95%] m-auto">
            <input
              type="text"
              name="search"
              placeholder="search"
              id=""
              className="w-[100%] mt-3 text-black bg-white rounded-[8px] "
              style={{
                padding: "8px 12px",
                border: "solid 1px green",
                outline: "solid 1px black",
              }}
            />
          </div>
          <div className="h-[82.5vh] overflow-y-auto overflow-x-hidden">
            <div className="cat-list">
              <Link href="">
                <div
                  className={`${
                    showDuImportance ? "text-black flex justify-between bg-white w-[90%] m-auto mt-3 p-2 rounded-lg hover:bg-slate-100" : "text-black hover:bg-slate-100 flex justify-between bg-slate-100 w-[90%] m-auto mt-3 p-2 rounded-lg"
                  }`}
                  onClick={() => setShowDuImportance(!showDuImportance)}
                >
                  <div className="flex items-center gap-[5px]">
                    <div className="bg-white p-2 rounded-lg">
                      <Image src={dua} alt="img" />
                    </div>

                    <div>
                      <h1 className="font-semibold text-lg">Dua Importance</h1>
                      <p className="text-slate-400 text-[15px]">
                        subcategories :7
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>21</p>
                    <p className="text-slate-400 text-[15px]">Duas</p>
                  </div>
                </div>
              </Link>
              <div className={`${showDuImportance ? "hidden" : "visible"}`}>
                {subCategories1.map((subCategory) => (
                  <div className=" w-[85%] flex m-auto  items-center" key={subCategory.id}>
                    <div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[5px] p-[2px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                    </div>
                    <p className="text-black  my-1 text-[15px] font-semibold w-96 overflow-hidden">
                      {subCategory.subcat_name_en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cat-list">
              <Link href="">
                <div
                  className={`${
                    showDuExcellence ? "text-black flex justify-between bg-white w-[90%] m-auto mt-3 p-2 rounded-lg hover:bg-slate-100" : "text-black hover:bg-slate-100 flex justify-between bg-slate-100 w-[90%] m-auto mt-3 p-2 rounded-lg"
                  }`}
                  onClick={() => setShowDuExcellence(!showDuExcellence)}
                >
                  <div className="flex items-center gap-[5px]">
                    <div className="bg-white p-2 rounded-lg">
                      <Image src={zikirer} alt="img" />
                    </div>

                    <div>
                      <h1 className="font-semibold text-lg">
                        {/* // eslint-disable-next-line react/no-unescaped-entities
                        Dua's Excellence */}
                      </h1>
                      <p className="text-slate-400 text-[15px]">
                        subcategories :1
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>15</p>
                    <p className="text-slate-400 text-[15px]">Duas</p>
                  </div>
                </div>
              </Link>
              <div className={`${showDuExcellence ? "hidden" : "visible"}`}>
                {subCategories2.map((subCategory) => (
                 <div className=" w-[85%] flex m-auto  items-center" key={subCategory.id}>
                    <div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[5px] p-[2px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                    </div>
                    <p className="text-black  my-1 text-[15px] font-semibold w-96 overflow-hidden">
                      {subCategory.subcat_name_en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cat-list">
              <Link href="">
                <div
                  className={`${
                    showDuTime ? "text-black flex justify-between bg-white w-[90%] m-auto mt-3 p-2 rounded-lg hover:bg-slate-100" : "text-black hover:bg-slate-100 flex justify-between bg-slate-100 w-[90%] m-auto mt-3 p-2 rounded-lg"
                  }`}
                  onClick={() => setShowDuTime(!showDuTime)}
                >
                  <div className="flex items-center gap-[5px]">
                    <div className="bg-white p-2 rounded-lg">
                      <Image src={duaKobul} alt="img" />
                    </div>

                    <div>
                      <h1 className="font-semibold text-lg">Time of Dua</h1>
                      <p className="text-slate-400 text-[15px]">
                        subcategories :1
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>30</p>
                    <p className="text-slate-400 text-[15px]">Duas</p>
                  </div>
                </div>
              </Link>
              <div className={`${showDuTime ? "hidden" : "visible"}`}>
                {subCategories3.map((subCategory) => (
                 <div className=" w-[85%] flex m-auto  items-center" key={subCategory.id}>
                    <div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[5px] p-[2px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                    </div>
                    <p className="text-black  my-1 text-[15px] font-semibold w-96 overflow-hidden">
                      {subCategory.subcat_name_en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cat-list">
              <Link href="">
                <div
                  className={`${
                    showDuAcceptance ? "text-black flex justify-between bg-white w-[90%] m-auto mt-3 p-2 rounded-lg hover:bg-slate-100" : "text-black hover:bg-slate-100 flex justify-between bg-slate-100 w-[90%] m-auto mt-3 p-2 rounded-lg"
                  }`}
                  onClick={() => setShowDuAcceptance(!showDuAcceptance)}
                >
                  <div className="flex items-center gap-[5px]">
                    <div className="bg-white p-2 rounded-lg">
                      <Image src={jaderDoaKObulHoi} alt="img" />
                    </div>

                    <div>
                      <h1 className="font-semibold text-lg">Dua Acceptance</h1>
                      <p className="text-slate-400 text-[15px]">
                        subcategories :1
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>14</p>
                    <p className="text-slate-400 text-[15px]">Duas</p>
                  </div>
                </div>
              </Link>
              <div className={`${showDuAcceptance ? "hidden" : "visible"}`}>
                {subCategories4.map((subCategory) => (
                 <div className=" w-[85%] flex m-auto  items-center" key={subCategory.id}>
                    <div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[5px] p-[2px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                    </div>
                    <p className="text-black  my-1 text-[15px] font-semibold w-96 overflow-hidden">
                      {subCategory.subcat_name_en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cat-list">
              <Link href="">
                <div
                  className={`${
                    showDuMorning ? "text-black flex justify-between bg-white w-[90%] m-auto mt-3 p-2 rounded-lg hover:bg-slate-100" : "text-black hover:bg-slate-100 flex justify-between bg-slate-100 w-[90%] m-auto mt-3 p-2 rounded-lg"
                  }`}
                  onClick={() => setShowDuMorning(!showDuMorning)}
                >
                  <div className="flex items-center gap-[5px]">
                    <div className="bg-white p-2 rounded-lg">
                      <Image src={morning} alt="img" />
                    </div>

                    <div>
                      <h1 className="font-semibold text-lg">
                        Morning & Evening
                      </h1>
                      <p className="text-slate-400 text-[15px]">
                        subcategories :3
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>53</p>
                    <p className="text-slate-400 text-[15px]">Duas</p>
                  </div>
                </div>
              </Link>
              <div className={`${showDuMorning ? "hidden" : "visible"}`}>
                {subCategories5.map((subCategory) => (
                 <div className=" w-[85%] flex m-auto  items-center" key={subCategory.id}>
                    <div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[5px] p-[2px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                    </div>
                    <p className="text-black  my-1 text-[15px] font-semibold w-96 overflow-hidden">
                      {subCategory.subcat_name_en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cat-list">
              <Link href="">
                <div
                  className={`${
                    showDuSleep ?"text-black flex justify-between bg-white w-[90%] m-auto mt-3 p-2 rounded-lg hover:bg-slate-100" : "text-black hover:bg-slate-100 flex justify-between bg-slate-100 w-[90%] m-auto mt-3 p-2 rounded-lg"
                  }`}
                  onClick={() => setShowDuSleep(!showDuSleep)}
                >
                  <div className="flex items-center gap-[5px]">
                    <div className="bg-white p-2 rounded-lg">
                      <Image src={sleep} alt="img" />
                    </div>

                    <div>
                      <h1 className="font-semibold text-lg">Sleep</h1>
                      <p className="text-slate-400 text-[15px]">
                        subcategories :2
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>35</p>
                    <p className="text-slate-400 text-[15px]">Duas</p>
                  </div>
                </div>
              </Link>
              <div className={`${showDuSleep ? "hidden" : "visible"}`}>
                {subCategories6.map((subCategory) => (
                 <div className=" w-[85%] flex m-auto  items-center" key={subCategory.id}>
                    <div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[5px] p-[2px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                    </div>
                    <p className="text-black  my-1 text-[15px] font-semibold w-96 overflow-hidden">
                      {subCategory.subcat_name_en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cat-list">
              <Link href="">
                <div
                  className={`${
                    showDuCloths ? "text-black flex justify-between bg-white w-[90%] m-auto mt-3 p-2 rounded-lg hover:bg-slate-100" : "text-black hover:bg-slate-100 flex justify-between bg-slate-100 w-[90%] m-auto mt-3 p-2 rounded-lg"
                  }`}
                  onClick={() => setShowDuCloths(!showDuCloths)}
                >
                  <div className="flex items-center gap-[5px]">
                    <div className="bg-white p-2 rounded-lg">
                      <Image src={cloths} alt="img" />
                    </div>

                    <div>
                      <h1 className="font-semibold text-lg">Cloths</h1>
                      <p className="text-slate-400 text-[15px]">
                        subcategories :1
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>8</p>
                    <p className="text-slate-400 text-[15px]">Duas</p>
                  </div>
                </div>
              </Link>
              <div className={`${showDuCloths ? "hidden" : "visible"}`}>
                {subCategories7.map((subCategory) => (
                 <div className=" w-[85%] flex m-auto  items-center" key={subCategory.id}>
                    <div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[5px] p-[2px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                    </div>
                    <p className="text-black  my-1 text-[15px] font-semibold w-96 overflow-hidden">
                      {subCategory.subcat_name_en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cat-list">
              <Link href="">
                <div
                  className={`${
                    showDuHome ? "text-black flex justify-between bg-white w-[90%] m-auto mt-3 p-2 rounded-lg hover:bg-slate-100" : "text-black hover:bg-slate-100 flex justify-between bg-slate-100 w-[90%] m-auto mt-3 p-2 rounded-lg"
                  }`}
                  onClick={() => setShowDuHome(!showDuHome)}
                >
                  <div className="flex items-center gap-[5px]">
                    <div className="bg-white p-2 rounded-lg">
                      <Image src={home} alt="img" />
                    </div>

                    <div>
                      <h1 className="font-semibold text-lg">Home</h1>
                      <p className="text-slate-400 text-[15px]">
                        subcategories:2
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>6</p>
                    <p className="text-slate-400 text-[15px]">Duas</p>
                  </div>
                </div>
              </Link>
              <div className={`${showDuHome ? "hidden" : "visible"}`}>
                {subCategories8.map((subCategory) => (
                 <div className=" w-[85%] flex m-auto  items-center" key={subCategory.id}>
                    <div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[5px] p-[2px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                    </div>
                    <p className="text-black  my-1 text-[15px] font-semibold w-96 overflow-hidden">
                      {subCategory.subcat_name_en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cat-list">
              <Link href="">
                <div
                  className={`${
                    showDuToilet ? "close-menu" : "open-menu"
                  }, text-black flex justify-between bg-slate-100 w-[90%] m-auto mt-3 p-2 rounded-lg`}
                  onClick={() => setShowDuToilet(!showDuToilet)}
                >
                  <div className="flex items-center gap-[5px]">
                    <div className="bg-white p-2 rounded-lg">
                      <Image src={toilet} alt="img" />
                    </div>

                    <div>
                      <h1 className="font-semibold text-lg">Toilet</h1>
                      <p className="text-slate-400 text-[15px]">
                        subcategories :1
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>2</p>
                    <p className="text-slate-400 text-[15px]">Duas</p>
                  </div>
                </div>
              </Link>
              <div className={`${showDuToilet ? "hidden" : "visible"}`}>
                {subCategories9.map((subCategory) => (
                 <div className=" w-[85%] flex m-auto  items-center" key={subCategory.id}>
                    <div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[5px] p-[2px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                    </div>
                    <p className="text-black  my-1 text-[15px] font-semibold w-96 overflow-hidden">
                      {subCategory.subcat_name_en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cat-list">
              <Link href="">
                <div
                  className={`${
                    showAdhaan ? "text-black flex justify-between bg-white w-[90%] m-auto mt-3 p-2 rounded-lg hover:bg-slate-100" : "text-black hover:bg-slate-100 flex justify-between bg-slate-100 w-[90%] m-auto mt-3 p-2 rounded-lg"
                  }`}
                  onClick={() => setShowAdhaan(!showAdhaan)}
                >
                  <div className="flex items-center gap-[5px]">
                    <div className="bg-white p-2 rounded-lg">
                      <Image src={azan} alt="img" />
                    </div>

                    <div>
                      <h1 className="font-semibold text-lg">Adhaan & Iqamah</h1>
                      <p className="text-slate-400 text-[15px]">
                        subcategories :4
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p>7</p>
                    <p className="text-slate-400 text-[15px]">Duas</p>
                  </div>
                </div>
              </Link>
              <div className={`${showAdhaan ? "hidden" : "visible"}`}>
                {subCategories10.map((subCategory) => (
                 <div className=" w-[85%] flex m-auto  items-center" key={subCategory.id}>
                    <div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[5px] p-[2px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                      <div className="w-[3px] p-[1px] rounded-full mb-1 bg-[#1FA45B]"></div>
                    </div>
                    <p className="text-black  my-1 text-[15px] font-semibold w-96 overflow-hidden">
                      {subCategory.subcat_name_en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;

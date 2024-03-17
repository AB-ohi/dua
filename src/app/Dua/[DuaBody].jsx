"use client";
import React, { useEffect, useState } from "react";
import { getDua } from "../utils/dua";
import Image from "next/image";
import card from "../../../public/img/duacard.svg";
import { getSubCategories } from "../utils/subCategory";

const DuaBody = () => {
  const [duas, setDua] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  console.log(subCategories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const useData = await getDua();
        setDua(useData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchSubCategoriesData = async () => {
      try {
        const useData = await getSubCategories();
        setSubCategories(useData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSubCategoriesData();
  }, []);
  return (
    <div className="w-[50%]">
      <div>
        <div className="w-[95%] m-auto flex justify-end items-start">
          <input
            type="text"
            name="search"
            placeholder="search"
            id=""
            className=" text-black bg-white rounded-[8px] mb-2"
            style={{
              padding: "8px 12px",
              border: "solid 1px green",
            }}
          />
        </div>
      </div>
      <div className="mr-3  overflow-y-auto overflow-x-hidden">
        {duas.map((dua) => (
          <div key={dua.id}>
            <div>
                  <div className="w-[100%] my-3 rounded-[12px] bg-white">
                    <div className="flex items-center gap-2">
                      <Image src={card} alt="img" />
                      <p className="text-[#1FA45B]">{dua.cat_id}. {dua.dua_name_en}</p>
                    </div>
                  </div>
                </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DuaBody;
// {
//   subCategories.map((subCategory)=>
//   <div key={subCategory.id}>

//   <div>
//     {duas.map((dua) => (
//       <div key={dua.id}>

//   </div>
//   )
//  }
//  <p className="bg-white p-[15px] rounded-[12px]">
//     <span className="text-[#1FA45B]">Section:</span>{subCategory.subcat_name_en}
//   </p>
//         <div className="w-[100%] my-3 rounded-[12px] bg-white">
//         <div className="flex items-center">
//           <Image src={card} alt="img" />
//           <p>{subCategory}</p>
//           <p className="text-[#1FA45B]">{dua.dua_name_en}</p>
//         </div>
//       </div>
//       </div>
//     ))}
//   </div>

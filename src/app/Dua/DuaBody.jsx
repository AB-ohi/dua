import React from "react";

const DuaBody = () => {
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
        
          <p className="bg-white p-[15px] rounded-[12px]"><span className="text-[#1FA45B]">Section:</span>The servant is dependent on his Lord</p>
       <p>lorem</p>
       {
        map
       }
      </div>
    </div>
  );
};

export default DuaBody;

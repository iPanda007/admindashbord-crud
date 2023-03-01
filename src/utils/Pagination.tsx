import React from "react";


const Pagination = ({
  pageNumbers,
  next,
  prev,
  currentPage,
  setCurrentPage,
}: any) => {
  
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center h-[42px] border-t px-[22px] bg-white">
        <div className="text-[12px] w-[50px] ">
          {currentPage} of {pageNumbers.length}
        </div>
        <div className="text-[12px] grow text-center">
          <div className="flex flex-row justify-center items-center  space-x-[10px]">
            <div onClick={() => prev()}>
                left
            </div>
            {pageNumbers &&
              pageNumbers.length > 0 &&
              pageNumbers.map((item: any, index: React.Key) => (
                <div
                  key={index}
                  className={`cursor-pointer w-[20px] h-[19px] ${
                    currentPage === item
                      ? "bg-black text-white"
                      : "bg-white text-black border border-[#000] opacity-[0.3]"
                  }  rounded-[5px]  grid place-items-center text-[12px]`}
                  onClick={() => {
                    setCurrentPage(item);
                  }}
                >
                  {item}
                </div>
              ))}
            <div onClick={() => next()}>
               Right
            </div>
          </div>
        </div>
        <div className="text-[12px] w-[50px]"></div>
      </div>
    </div>
  );
};

export default Pagination;

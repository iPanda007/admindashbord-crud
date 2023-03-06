import React from "react";
import { DOTS } from "../hook/useAdvencePaginate";

const PaginationAdvance = ({
    currentPage,
    goToNextPage,
    goToPreviousPage,
    changePage,
    paginationRange,
    pageNumbersCount,

    
}: any) => {
  
  return (
    <div className="">
      <div className="flex flex-row justify-between items-center h-[42px] border-t px-[22px] bg-white">
        <div className="text-[12px] w-[50px] ">
          {currentPage} of {pageNumbersCount.length}
        </div>
        <div className="text-[12px] grow text-center">
          <div className="flex flex-row justify-center items-center  space-x-[10px]">
            <div onClick={() => goToPreviousPage()}>
                {`<`}
            </div>
            {paginationRange &&
              paginationRange.length > 0 &&
              paginationRange?.map((item: any, index: React.Key) => {
                if (item === DOTS) {
                    return (
                      <button key={index} className={`paginationItem`}>
                        &#8230;
                      </button>
                    );
                  }
                return(
                    <div
                      key={index}
                      className={`cursor-pointer w-[20px] h-[19px] ${
                        currentPage === item
                          ? "bg-black text-white"
                          : "bg-white text-black border border-[#000] opacity-[0.3]"
                      }  rounded-[5px]  grid place-items-center text-[12px]`}
                      onClick={changePage}
                    >
                      {item}
                    </div>
                  )
              }
              
            )}
            <div onClick={() => goToNextPage()}>
               {`>`}
            </div>
          </div>
        </div>
        <div className="text-[12px] w-[50px]"></div>
      </div>
    </div>
  );
};

export default PaginationAdvance;

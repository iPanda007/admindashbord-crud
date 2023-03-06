import React, { useState, useMemo } from "react";

export const DOTS = "...";

const useAdvencePaginate = (data:any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordPerPage, setRecordPerPage] = useState(5);
  const [pageLimit, setPageLimit]: any = useState(5);
  const [siblingCount, setSiblingCount] = useState(1);
  const [buttonCount, setButtonCount] = useState(3);
  let totalPageCount: any = Math.ceil(data.length / recordPerPage);
  let pageNumbersCount = [...Array(totalPageCount + 1).keys()].slice(1);
  
  function goToNextPage(): void {
   if(currentPage !== totalPageCount)setCurrentPage((page) => page + 1);
    console.log("all")
  }
  function goToPreviousPage(): void {
    if(currentPage !== 1)   setCurrentPage((page) => page - 1);
  }

  function changePage(event: any): void {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  //rowperPagecalculate

  const getPaginatedData = (): [] => {
    // not yet implemented

    const startIndex = currentPage * recordPerPage - recordPerPage;

    const endIndex = startIndex + recordPerPage;

    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = (): number[] => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;

    return new Array(pageLimit)
      .fill(undefined)
      .map((_, idx) => start + idx + 1);
  };
  const range = (start: any, end: any) => {
    let length = end - start + 1;
    console.log(Array.from({ length }, (_, index) => index + start))
    return Array.from({ length }, (_, index) => index + start);

  };
  const paginationRange = useMemo(() => {
    const totalPageNumbers = buttonCount + 2 + siblingCount;
    if (totalPageNumbers >= totalPageCount) {
      range(1, totalPageCount);
      return pageNumbersCount
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex <= totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;


     // left
    if (!shouldShowLeftDots && shouldShowRightDots) {

      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    //right
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );

      return [firstPageIndex, DOTS, ...rightRange];
    }
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalPageCount, siblingCount, currentPage, buttonCount]);

  return {
    currentPage,
    goToNextPage,
    goToPreviousPage,
    changePage,
    getPaginatedData,
    paginationRange,
    pageNumbersCount,
    setRecordPerPage,
  };
};

export default useAdvencePaginate;

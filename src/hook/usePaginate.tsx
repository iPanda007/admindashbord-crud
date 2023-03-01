import { useState } from "react";

const usePaginate = (data: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(7);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  let currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  let nPages = Math.ceil(data.length / recordsPerPage);
  let pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return {
    currentPage,
    setCurrentPage,
    currentRecords,
    pageNumbers,
    nextPage,
    prevPage,
  };
};
export default usePaginate;
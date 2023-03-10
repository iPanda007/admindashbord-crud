import React from "react";
import edit from "../assets/resources/edit.png";
import DeleteIcon from "../assets/resources/delete.png";
import MyRipple from "./MyRipple";

interface Props {
  className: any;
  filterDelete: any;
  fetchValue: (id: string) => void;
  EditModalOpen: any;
  id: string;
  EditIndex: (index: number) => void;
  index:number;
  handleClosePopup:()=>void
}

const Popup = ({
  className,
  filterDelete,
  fetchValue,
  EditModalOpen,
  EditIndex,
  id,
  index,
  handleClosePopup
}: Props) => {
  return (
    <div className={className}>
      <MyRipple>
        <div
          className="flex space-x-3 pr-9 pl-2 py-2  cursor-pointer "
          onClick={() => {
            fetchValue(id);
            EditIndex(index)
            EditModalOpen();
            handleClosePopup();
          }}
        >
          <span>
            <img src={edit} alt="" />
          </span>
          <p>Edit</p>
        </div>
      </MyRipple>
      <hr />
      <MyRipple>
        <div
          onClick={()=>{
            filterDelete()
            handleClosePopup();
          }}
          className="flex space-x-3 pr-9 pl-2 py-2 cursor-pointer"
        >
          <span>
            <img src={DeleteIcon} alt="" />
          </span>
          <p>Delete</p>
        </div>
      </MyRipple>
    </div>
  );
};

export default Popup;

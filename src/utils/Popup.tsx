import React from "react";
import edit from "../assets/resources/edit.png";
import DeleteIcon from "../assets/resources/delete.png";
import MyRipple from "./MyRipple";

interface Props {
  className: any;
  filterDelete: any;
  fetchValue: any;
}

const Popup = ({ className, filterDelete, fetchValue }: Props) => {
  return (
    <div className={className}>
      <MyRipple>
        <div
          className="flex space-x-3 pr-9 pl-2 py-2  cursor-pointer "
          onClick={() => {
            fetchValue();
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
          onClick={filterDelete}
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

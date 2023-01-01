import React from "react";

const RadioField = ({ errors, label, register }: any) => {
  return (
    <div>
      <label
        className={`text-default  block ${
          errors ? "text-[#ff0000]" : "opacity-50"
        }`}
      >
        {label}
      </label>
      <div className=" flex items-center text-[13px] text-[#a2a2a2] justify-between">
        <div className="flex items-center space-x-2">
          <input type="radio" {...register}  value="male" checked /> <span>Male</span>
        </div>
        <div className="flex items-center space-x-2 pr-10">
          <input type="radio" {...register} value="female" /> <span>Female</span>
        </div>
      </div>
      <span className="text-xs text-danger">{errors}</span>
    </div>
  );
};

export default RadioField;

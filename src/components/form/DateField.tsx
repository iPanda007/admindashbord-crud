import React from "react";

const DateField = ({ register, label, errors }: any) => {
  return (
    <div>
      <div className="mb-[2px]">
        <label
          className={`text-default  block mb-[2px] ${
            errors ? "text-[#ff0000]" : "opacity-50"
          }`}
        >
          {label}
        </label>

        <div className="relative">
          <input
            {...register}
            type="date"
            className={`w-full text-default px-4 py-2 border font-[400] border-secondary rounded-md outline-none ${
              errors && "text-danger border-danger"
            }`}
          />
          <span className="text-default absolute right-4 top-1/2 -translate-y-1/2 opacity-50"></span>
        </div>
        <span className="text-xs text-danger">{errors}</span>
      </div>
    </div>
  );
};

export default DateField;

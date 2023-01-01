import React from "react";

interface Props {
  register?: any;
  label?: string;
  errors?: any;
  options?: any;
}

const SimpleSelect = ({ register, label, errors, options }: Props) => {
  return (
    <div>
      <label
        className={`text-default  block mb-[2px] ${
          errors ? "text-[#ff0000]" : "opacity-50"
        }`}
      >
        {label}
      </label>
      <select
        {...register}
        className={`w-full text-default px-4 py-2 border font-[400] border-secondary rounded-md outline-none ${
          errors && "text-danger border-danger"
        }`}
      >
        <option value={""}>select one</option>
        {options?.map((value: any, index: number) => (
          <option value={value} key={index}>
            {value}
          </option>
        ))}
      </select>
      <span className="text-xs text-danger">{errors}</span>
    </div>
  );
};

export default SimpleSelect;

import React from 'react'



const TextField = ({register,label,errors,errorsMessage}:any) => {
  return (
    <div>
               <div className="">
              <label
                className={`text-default  block  ${
                  errors ? "text-[#ff0000]" : "opacity-50"
                }`}
              >
                {label}
              </label>

              <div className="relative">
                <input
                    {...register}
                  type="text"
                  className={`w-full text-default px-4 py-2 border font-[400] border-secondary rounded-md outline-none ${
                    errors && "text-danger border-danger"
                  }`}
                />
                <span className="text-default absolute right-4 top-1/2 -translate-y-1/2 opacity-50"></span>
              </div>
              <span className="text-xs text-danger">
                {errorsMessage}
              </span>
            </div>
    </div>
  )
}

export default TextField

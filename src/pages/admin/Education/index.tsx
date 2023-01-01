import React from "react";
import search from '../../../assets/resources/search.png'

//54bab9
const Education = () => {
  return (
    <div className=" font-[600] mt-[2rem]">
      <header></header>
      <div className="p-4 bg-white w-[100%]">
        <h1 className="text-[#54bab9] text-lg font-[500] mb-4">Patient List</h1>
        <div className=" w-full flex items-center justify-between mb-4">
          <div>
            <div className="border  px-3 w-[100%]  rounded-full  flex items-center text-[13px] ">
              <input
                type="text"
                placeholder="search table"
                className="outline-none font-[400] bg-transparent p-1 text-[12px] w-full"
                name=""
                id=""
              />
              <img src={search} alt="" />
            </div>
          </div>
          <div className="">
            <button className="px-3 py-1 bg-[#54bab9] text-white flex space-x-2 font-[400] text-[12px] rounded-full">
              <span className="mr-1 text-[]">+</span> Add new patient
            </button>
          </div>
        </div>
        {/* dropDrown */}
        <div className="text-[12px] font-[400] text-[#a2a2a2] flex justify-between ">
          <div className="flex space-x-2">
            <div className="border rounded-full">
              <select className=" text-[12px] px-3 py-1 bg-transparent">
                <option value="" selected>
                  {" "}
                  Status All{" "}
                </option>
                <option>one</option>
                <option>two</option>
                <option>three</option>
              </select>
            </div>
            <div className="border rounded-full">
              <select className=" px-3 py-1 bg-transparent text-[12px]">
                <option value="" selected>
                  {" "}
                  Status All{" "}
                </option>
                <option>one</option>
                <option>two</option>
                <option>three</option>
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <p>Rows per pages</p>
            <div className="border rounded-full">
              <select className=" text-[#54bab9] px-1 py-1 bg-transparent text-[12px]">
                <option value="" selected>
                  {" "}
                  10{" "}
                </option>
                <option>one</option>
                <option>two</option>
                <option>three</option>
              </select>
            </div>
          </div>
        </div>

        <div className=" border-t mt-4 w-full">
          <table className="w-full">
            <thead className="text-[#54bab9] text-[13px] text-center font-[500] border-b">
              <tr className="">
                <th className="px-4 py-2">
                  <input type="checkBox" />
                </th>
                <th className="px-3 py-2">ID</th>
                <th className="px-3 py-2">Pet Name</th>
                <th className="px-3 py-2">Status</th>
                <th className="px-3 py-2"> Pawrent</th>
                <th className="px-3 py-2">Breed</th>
                <th className="px-3 py-2">Gender</th>
                <th className="px-3 py-2"> Date of Birth</th>
                <th className="px-3 py-2">Contact No.</th>
                <th className="px-3 py-2"> Address </th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-center text-[13px] font-[400]">
              {[1, 2, 3, 4, 5].map((item: any, index: number) => (
                <tr key={index} className="text-center border-b h-[36px] ">
                  <td className="">
                    <input type="checkbox" />
                  </td>
                  <td>B-0025</td>
                  <td>Milo</td>
                  <td>icon</td>
                  <td>THe Nu San</td>
                  <td>Beogle</td>
                  <td>Male</td>
                  <td>1.5.2021</td>
                  <td>09966928899</td>
                  <td>
                    တိုက်{`(၅)`} - အခန်း{`(001)`} - လိူင်သိရိအိမ်ရာ
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Education;

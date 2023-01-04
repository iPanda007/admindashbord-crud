import React, { useState } from "react";
import search from "../../../assets/resources/search.png";
import allergy from "../../../assets/resources/allergy.png";
import More from "../../../assets/resources/more.png";
import pickEater from "../../../assets/resources/pick.png";
import { createRipples } from "react-ripples";
import Popup from "../../../utils/Popup";
import PatientCreate from "../../../crud/PatientCrud/PatientCreate";

const MyRipples = createRipples({
  color: "#ffffff15",
  during: 2200,
});

type IDummpyData = {
  id: string;
  petName: string;
  status: string;
  pawrent: string;
  bread: string;
  gender: string;
  dateOfBirth: string;
  contact: string;
  address: string;
};

const dummpyData = [
  {
    id: "B-0025",
    petName: "Milo",
    status: allergy,
    pawrent: "The' Nu San",
    bread: "Beogle",
    gender: "Male",
    dateOfBirth: "1.5.2021",
    contact: "09966928899",
    address: "တိုက်(၅) - အခန်း(001) - လိူင်သိရိအိမ်ရာ",
  },
  {
    id: "S-0189",
    petName: "Milo",
    status: allergy,
    pawrent: "Nay Chi Lin",
    bread: "Beogle",
    gender: "Male",
    dateOfBirth: "1.5.2021",
    contact: "09966928899",
    address: "တိုက်(၅) - အခန်း(001) - လိူင်သိရိအိမ်ရာ",
  },
  {
    id: "G-0089",
    petName: "Milo",
    status: pickEater,
    pawrent: "Pink Pink",
    bread: "Beogle",
    gender: "Male",
    dateOfBirth: "1.5.2021",
    contact: "09966928899",
    address: "တိုက်(၅) - အခန်း(001) - လိူင်သိရိအိမ်ရာ",
  },
  {
    id: "G-0090",
    petName: "Milo",
    status: pickEater,
    pawrent: "Kyaw Myo Oo",
    bread: "Beogle",
    gender: "Male",
    dateOfBirth: "1.5.2021",
    contact: "09966928899",
    address: "တိုက်(၅) - အခန်း(001) - လိူင်သိရိအိမ်ရာ",
  },
  {
    id: "G-0091",
    petName: "Milo",
    status: pickEater,
    pawrent: "Pink Pink",
    bread: "Beogle",
    gender: "Male",
    dateOfBirth: "1.5.2021",
    contact: "09966928899",
    address: "တိုက်(၅) - အခန်း(001) - လိူင်သိရိအိမ်ရာ",
  },
  {
    id: "G-0092",
    petName: "Milo",
    status: pickEater,
    pawrent: "Pink Pink",
    bread: "Beogle",
    gender: "Male",
    dateOfBirth: "1.5.2021",
    contact: "09966928899",
    address: "တိုက်(၅) - အခန်း(001) - လိူင်သိရိအိမ်ရာ",
  },
];

//54bab9
const Education = () => {
  const [data, setData] = useState<IDummpyData[]>(dummpyData);
  const [popupOpen, setPopupOpen] = useState<string>("");
  const [modelOpen ,setModelOpen] =useState<boolean>(!!'');

  const CarryData = (getData:any):void=>{
    setData([...data,getData])
  }

  const handleCloseModal = ():void=>{
    setModelOpen(!!'')
  }

  return (
    <>
      <PatientCreate
        modelOpen ={modelOpen}
        CarryData={CarryData}
        handalCloseModal={handleCloseModal}
      />    
      <div className=" font-[600] mt-[2rem]">
        <header></header>
        <div className="p-4 bg-white w-[100%]">
          <h1 className="text-[#54bab9] text-lg font-[500] mb-4">
            Patient List
          </h1>
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
            <div className="overflow-hidden">
              <MyRipples>
                <button 
                 onClick={()=>{
                   setModelOpen(true)
                 }}
                className="px-3 py-1 bg-[#54bab9] text-white  flex space-x-2 font-[400] text-[12px] rounded-full">
                  <span className="mr-1 text-[]">+</span> Add new patient
                </button>
              </MyRipples>
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
              <thead className="text-[#54bab9] text-[13px] text-left font-[500] border-b">
                <tr className="">
                  <th className="px-4 py-2 text-center">
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
              <tbody className=" text-[13px] font-[400]">
                {data.map((item: any, index: number) => (
                  <tr
                    key={index}
                    className=" border-b h-[36px] align-middle relative  "
                  >
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="text-center">{item.id}</td>
                    <td className="text-center">{item.petName}</td>
                    <td className="text-center ">
                      <img src={item.status} />
                    </td>
                    <td>{item.pawrent}</td>
                    <td>{item.bread}</td>
                    <td>{item.gender}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td>
                      <img
                        src={More}
                        width={15}
                        className="cursor-pointer"
                        onClick={() => setPopupOpen(item.id)}
                        onBlurCapture={() => {
                           setTimeout(()=>{
                              setPopupOpen('')
                           },1000)
                        }}
                        tabIndex={0}
                      />

                      <Popup
                         filterDelete={()=>{
                          
                         }}
                        className={`
                         flex flex-col absolute top-0 text-[12px] bg-white shadow-lg rounded-[5px]  right-0 z-50  transition-all duration-300  ease-in-out ${
                           popupOpen === item.id ? "scale-100" : "scale-0"
                         } `}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;

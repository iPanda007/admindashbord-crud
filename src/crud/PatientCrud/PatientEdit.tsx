import React,{useEffect} from "react";
import uuid from "react-uuid";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "../../components/form/TextField";
import SimpleSelect from "../../components/form/SimpleSelect";
import RadioField from "../../components/form/RadioField";
import DateField from "../../components/form/DateField";
import { IDummpyData } from "../../pages/admin/Education";

const StatusData = ["one","two","three"]

const schema = yup.object().shape({
  petName: yup.string().required("Pet Name is required"),
  status: yup.string().required("Status is required"),
  pawrent: yup.string().required("Status is required"),
  breed: yup.string().required("Breed is required"),
  gender: yup.string(),
  date: yup.string().required("Date is required"),
  contact: yup.string().required("Contact is required"),
  address: yup.string().required("Address is required"),
});

interface Props{
  CarryData: any,
  modelOpen: boolean
  handalCloseModal: any;
  editValue:any
}

const PatientEdit = ({
  CarryData,
  modelOpen,
  handalCloseModal,
  editValue
}:Props) => {
  const {
    handleSubmit,
    register,
    watch,
    setError,
    setValue,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
  });

  useEffect(()=>{
     setValue('petName',editValue?.petName);

     setValue('pawrent',editValue?.pawrent);
     
     setValue('gender',editValue?.gender);
     setValue('date',editValue?.dateOfBirth);
     setValue('contact',editValue?.contact);
     setValue('address',editValue?.address);
  },[editValue])

  const GenderChoice = watch("gender");

  const sumbitHandler = (data: any) => {
    if (GenderChoice === "undefined" || GenderChoice === "null") {
      setError("gender", {
        type:"custom",
        message:"Gender is required"
      });
    }
  const setData ={
    id: uuid().substring(0,4),
    petName: data.petName,
    status: data.status,
    pawrent: data.pawrent,
    bread: data.breed,
    gender: data.gender,
    dateOfBirth:data.date,
    contact: data.contact,
    address: data.address,
  }
  CarryData(setData)
  handalCloseModal()
  };
  return (
    <div className={` w-full h-screen duration-300 transition-all ease-in-out flex items-center justify-center absolute top-0 left-0  ${
      modelOpen ? " bg-[#00000040] z-40 opacity-100" : "-z-10  opacity-100"
    }`}>
      <div className={`bg-white w-[650px] h-auto px-10 duration-500 transition-all ease-in-out delay-300 py-4 ${modelOpen ? "scale-100 " : "scale-0"}`}>
        <div className=" text-center mb-4">
          <h1 className="text-[#54bab9] text-lg font-[500]">Add New patient</h1>
          <p className="text-[13px] text-[#a2a2a2]">
            Enter new Patient information below
          </p>
        </div>
        <form
          onSubmit={handleSubmit(sumbitHandler)}
          className="grid grid-cols-2 gap-5 "
        >
          <div>
            <TextField
              register={{ ...register("petName") }}
              label={"Pet Name"}
              errors={errors?.petName}
              errorsMessage={errors?.petName?.message}
              defaultValue={editValue}
            />
          </div>
          <div>
            <SimpleSelect
              label="Status"
              register={{ ...register("status") }}
              errors={errors?.status?.message}
              options={StatusData}
            />
          </div>
          <div>
            <TextField
              register={{ ...register("pawrent") }}
              label="Pawrent"
              errors={errors?.pawrent}
              errorsMessage={errors?.pawrent?.message}
            />
          </div>
          <div>
            <SimpleSelect
              label="Breed"
              register={{ ...register("breed") }}
              errors={errors?.breed?.message}
              options={StatusData}
            />
          </div>
          <div>
            <RadioField
              label="Gender"
              register={{ ...register("gender") }}
              errors={errors?.gender?.message}
            />
          </div>
          <div>
            <DateField
              label={"Date of Birth"}
              register={{ ...register("date") }}
              errors={errors?.date?.message}
            
            />
          </div>
          <div>
            <TextField
              label={"Contact Phone No"}
              register={{ ...register("contact") }}
              errors={errors?.contact}
              errorsMessage={errors?.contact?.message}
            />
          </div>
          <div>
            <TextField
              label={"Address"}
              register={{ ...register("address") }}
              errors={errors?.address}
              errorsMessage={errors?.address?.message}
            />
          </div>
          <div className="col-span-2">
            <div className="flex justify-center items-center space-x-3">
              <button
                className="px-12 py-2 bg-[#54bab9] rounded-[0.25rem]"
                type="submit"
              >
                Save
              </button>
              <div
               onClick={()=>{
                 handalCloseModal()
               }}
                 className="px-12 py-2 rounded-[0.25rem] border cursor-pointer">
                Cancel
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientEdit;

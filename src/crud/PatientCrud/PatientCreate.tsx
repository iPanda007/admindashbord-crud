import React from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "../../components/form/TextField";
import SimpleSelect from "../../components/form/SimpleSelect";
import RadioField from "../../components/form/RadioField";
import DateField from "../../components/form/DateField";

const schema = yup.object().shape({
  petName: yup.string().required("Pet Name is required"),
  status:yup.string().required('Status is required'),
  pawrent:yup.string().required('Status is required'),
  breed:yup.string().required('Breed is required'),
  gender:yup.string().required('Gender is required'),
  date:yup.date().required('Date is required')

});

const PatientCreate = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),

  });
  return (
    <div className="bg-[#00000040] w-full h-screen flex items-center justify-center absolute top-0 left-0 z-40">
      <div className="bg-white w-[650px] h-[500px] px-10">
        <div className=" text-center mb-4">
          <h1 className="text-[#54bab9] text-lg font-[500]">Add New patient</h1>
          <p className="text-[13px] text-[#343434]">
            Enter new Patient information below
          </p>
        </div>
        <form className="grid grid-cols-2 gap-5">
          <div>
            <TextField
              register={{ ...register("petName") }}
              label={"Pet Name"}
              errors={errors?.petName}
              errorsMessage={errors?.petName?.message}
            />
          </div>
          <div>
            <SimpleSelect label="Status" register={{...register('status')}} errors={errors?.status?.message} />
          </div>
          <div>
             <TextField
              register={{...register('pawrent')}}
              label = "Pawrent"
              errors={errors?.pawrent}
              errorsMessage = {errors?.pawrent?.message}
             />
          </div>
          <div>
            <SimpleSelect
             label="Breed"
             register={{...register('breed')}}
             errors={errors?.breed?.message}

            />
          </div>
          <div>
             <RadioField
              label="Gender"
              register={{...register('gender')}}
              errors={errors?.gender?.message}
             />
          </div>
          <div>
                <DateField
                 label={"Date of Birth"}
                 register={{...register('date')}}
                 errors={errors?.date?.message}
                />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientCreate;

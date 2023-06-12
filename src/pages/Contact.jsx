import React from "react";

const Contact = () => {
  return (
    <div className="h-[100vh] px-28 ">
      <form className="bg-white contactFormShadow flex flex-col justify-start p-5 gap-6 items-center h-[80%] mt-[5%] w-[80%] ml-[10%] rounded-lg">
        <h1 className="text-[45px] font-bold">Contact us !</h1>
        <div className="flex items-center justify-between w-full gap-3">
          <input
            placeholder="First Name"
            className="bg-blue-50 w-[49%] px-10 py-6 rounded-md border-blue-100 border outline-none"
          />
          <input
            placeholder="Last name"
            className="bg-blue-50 w-[49%] px-10 py-6 rounded-md border-blue-100 border outline-none"
          />
        </div>

        <input
          placeholder="Contact number"
          className="w-full bg-blue-50 py-6 px-10 rounded-md border-blue-100 border outline-none"
        />
        <input
          placeholder="Email id"
          className="w-full bg-blue-50 py-6 px-10 rounded-md border-blue-100 border outline-none"
        />
        <button className="bg-[#0051b6] w-[30%] text-white border-none px-12 py-4 shadow-lg rounded-full text-lg  submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

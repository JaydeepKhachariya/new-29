import React from "react";
import { MdClose } from "react-icons/md";
const Checkout = ({ open }) => {
  return (
    <>
      {open ? (
        <div className="bg-black w-[300px] h-full">
          <MdClose color="white" />
        </div>
      ) : null}
    </>
  );
};

export default Checkout;

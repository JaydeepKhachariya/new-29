import React from "react";

const CustomePlan = ({ setCustomePlan }) => {
  return (
    <div className="bg-[##000000b5] backdrop-blur-md w-full h-full flex justify-center items-center absolute top-0 left-0 mx-auto">
      <button onClick={() => setCustomePlan(false)}>Close</button>
    </div>
  );
};

export default CustomePlan;

import React from "react";

const Home = () => {
  return (
    <div>
      <p className="absolute bottom-[35px] left-[155px] text-[22px] font-semibold text-white">
        Generations past, with tales that inspire. For times to come, let’s add
        to the lore
      </p>
      <video
        className="object-cover w-[100vw] h-[100vh] z-[-1] fixed"
        autoPlay
        muted
        loop
      >
        <source src="/Media1.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;

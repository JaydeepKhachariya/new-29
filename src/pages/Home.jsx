import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div>
      <p className="absolute bottom-[35px] left-[155px] text-[22px] font-semibold text-white">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Generations past, with tales that inspire. For times to come, let’s add to the lore"
              )
              .pauseFor(2000)
              .start();
          }}
        />
      </p>
      <img
        className="object-cover w-[100vw] h-[100vh] z-[-1] fixed"
        src="/homebg.webp"
      />
      {/* <video
        className="object-cover w-[100vw] h-[100vh] z-[-1] fixed"
        autoPlay
        muted
        loop
      >
        <source src="/Media1.mp4" type="video/mp4" />
      </video> */}
    </div>
  );
};

export default Home;

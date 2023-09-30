import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data scientist",
          "Entrepreneurship enthusiast",
          "Civil society activist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

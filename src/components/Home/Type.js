import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data science Engineering Student",
          "Entrepreneurship enthusiast",
          "Civil society activist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;

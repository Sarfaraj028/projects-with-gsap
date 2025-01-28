import React, { useRef, useState } from "react";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const App = () => {
  const [size, setSize] = useState();
  // video minutes = 28
  const random = gsap.utils.random(-400, 500, 5);

  useGSAP(() => {
    gsap.to(".circle", {
      width: size,
      height: size,
      x: size,
      duration: 0.1,
    });
  }, [size]);

  return (
    <main>
      <button
        onClick={() => {
          setSize(random);
          console.log("klau " + random);
        }}
      >
        Animate
      </button>
      <div className="circle"></div>
    </main>
  );
};

export default App;

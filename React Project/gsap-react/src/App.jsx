/* eslint-disable no-unused-vars */
import "./index.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const boxRef = useRef();

  // Define random functions
  const randomX = () => gsap.utils.random(-500, 200, 100);
  const randomRotate = () => gsap.utils.random(-360, 360, 100);
  const randomY = () => gsap.utils.random(-500, 500, 10);

  // State variables
  const [xValue, setXValue] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Effect to handle animation
  useEffect(() => {
    if (isAnimating) {
      gsap.to(boxRef.current, {
        x: xValue,
        y: yValue,
        rotate: rotate,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setIsAnimating(false);
        },
      });
    }
  }, [xValue, rotate, isAnimating, yValue]);

  return (
    <main>
      <button
        onClick={() => {
          if (!isAnimating) {
            setIsAnimating(true);
            setXValue(randomX());
            setRotate(randomRotate());
            setYValue(randomY());
          }
        }}
        disabled={isAnimating}
      >
        Animate
      </button>
      <div className="box" ref={boxRef}>
        <img
          src="https://p7.hiclipart.com/preview/111/635/809/bird-icon-birds-birds-thumbnail.jpg"
          style={{ objectFit: "cover" }}
        />
      </div>
    </main>
  );
};

export default App;

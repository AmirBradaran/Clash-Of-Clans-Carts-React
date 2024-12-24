import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Arrows from "./Arrows";

export default function Slider() {
  const [heroes, setHeroes] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3000/heroes`);
        const data = await res.json();
        setHeroes(data);
      } catch (error) {
        console.log(Error - Fetch);
      }
    })();
  }, []);
  const handleClickNext = () => {
    setCurrentIndex(currentIndex == heroes.length - 1 ? 0 : currentIndex+1);
  };
  const handleClickPrev = () => {
    setCurrentIndex(currentIndex == 0 ? heroes.length - 1 : currentIndex-1);
  };
  return (
    <div class="slide-container">
      <div class="wrapper">
        {heroes ? (
          <>
            <Arrows handleClick={handleClickPrev} direction={'prev'}/>
            <Cart hero={heroes[currentIndex]} />
            <Arrows handleClick={handleClickNext} direction={'next'}/>
          </>
        ) : (
          <div className="loader"> Loading ... </div>
        )}
      </div>
    </div>
  );
}

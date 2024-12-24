import React, { useEffect, useState } from "react";
import Cart from "./Cart";

export default function Slider() {
    const [heroes , setHeroes]=useState(0)
    const [currentIndex,setCurrentIndex]=useState()
    useEffect(()=>{
        (async()=>{
            try {
                const res=await fetch(`http://localhost:3000/heroes`)
                const data=await res.json()
                setHeroes()
            } catch (error) {
                console.log(Error - Fetch)
            }
        })()
    },[])
  return (
    <div class="slide-container">
      <div class="wrapper">
        <div class="arrow-wrapper">
          <div class="round">
            <div id="cta">
              <span class="arrow prev"></span>
            </div>
          </div>
        </div>
        <Cart hero={heroes[currentIndex]} />
        <div class="arrow-wrapper">
          <div class="round">
            <div id="cta">
              <span class="arrow next"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

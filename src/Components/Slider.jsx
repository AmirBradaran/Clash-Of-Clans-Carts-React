import React from "react";
import Cart from "./Cart";

export default function Slider() {
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
        <Cart />
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

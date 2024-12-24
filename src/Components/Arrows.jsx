import React from "react";

export default function Arrows({ handleClick, direction }) {
  return (
    <div class="arrow-wrapper" onClick={handleClick}>
      <div class="round">
        <div id="cta">
          <span class={`arrow ${direction}`}></span>
        </div>
      </div>
    </div>
  );
}

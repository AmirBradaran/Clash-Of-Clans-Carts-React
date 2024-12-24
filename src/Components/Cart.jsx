import React from "react";
import Units from "./Units";

export default function Cart({ hero }) {
  const { name, level, img, units, description } = hero;
  const unites = units?.map((e, index) => (
    <Units key={index} state={e.state} value={e.value} />
  ));
  return (
    <div class={`clash-card ${name}`}>
      <div class={`clash-card__image clash-card__image--${name}`}>
        <img src={img} alt={`${name}`} />
      </div>
      <div class={`clash-card__level clash-card__level--${name}`}>{level}</div>
      <div class={`clash-card__unit-name`}>The {name}</div>
      <div class={`clash-card__unit-description`}>{description}</div>

      <div
        class={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}
      >
        {unites}
      </div>
    </div>
  );
}

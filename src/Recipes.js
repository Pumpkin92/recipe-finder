import React, { useState } from "react";

export default function Recipes(props) {
  if (props.recipes) {
    return (
      <div>
        <section>
          {props.recipes.map(function (recipe, index) {
            return (
              <div key={index}>
                {recipe.title}
                <img src={recipe.image} />
                {recipe.summary}
                <a href={recipe.sourceUrl}>Recipe here!</a>
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}

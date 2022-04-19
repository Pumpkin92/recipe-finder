import React, { useState } from "react";
import "./recipes.css";

export default function Recipes(props) {
  if (props.recipes) {
    return (
      <div>
        <section>
          {props.recipes.map(function (recipe, index) {
            return (
              <div key={index}>
                {" "}
                <br />
                <h2>{recipe.title} </h2>
                <a href={recipe.sourceUrl}>Recipe here!</a> <br />
                <img src={recipe.image} className="recipePicture" /> <br />
                <div className="recipeInfoDiv">
                  <ul className="recipeInfo">
                    <li>Servings: {recipe.servings}</li>
                    <li>Average rating: {recipe.spoonacularScore} </li>
                  </ul>
                  <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                  <br />
                </div>
                <hr></hr>
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

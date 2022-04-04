import React, { useState } from "react";
import axios from "axios";
import Recipes from "./Recipes";

export default function RecipeSearch(props) {
  let [searchResult, setSearchResult] = useState(props.default);
  let [loaded, setLoaded] = useState(false);
  let [recipes, setRecipes] = useState(null);

  function handleUpdate(response) {
    console.log(response.data.results);
    setRecipes(response.data.results);
  }

  function search() {
    let apiKey = "16fc38902d074c0a8b4b6cde2b677493";
    let apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${searchResult}&addRecipeInformation=true&apiKey=${apiKey}`;
    axios.get(apiUrl).then(handleUpdate);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchResult(event) {
    setSearchResult(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="container">
        <section>
          <h1>Recipe Finder</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleSearchResult}
              placeholder="Search for an ingredient or recipe"
            ></input>
          </form>
        </section>
        <Recipes recipes={recipes} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}

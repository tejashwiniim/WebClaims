import React from "react";
import { FavouritesCard } from "./FavouritesCard";
import "./Favourites.css";

export function Favourites(props) {
  return (
    <div className="favourites">
      <h4>Favourites</h4>
      <div className="favourites-card-container">
        <FavouritesCard name="Favourite name goes here" proc="" dx="" />
        <FavouritesCard name="Favourite name goes here" proc="" dx="" />
        <FavouritesCard name="Favourite name goes here" proc="" dx="" />
      </div>
    </div>
  );
}

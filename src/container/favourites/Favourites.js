import React from "react";
import { FavouritesCard } from "./FavouritesCard";
import "./Favourites.css";

export function Favourites(props) {
  return (
    <div className="favourites">
      <h4>Favourites</h4>
      <div className="favourites-card-container">
        <FavouritesCard name="Favourite name goes here" proc="12345" dx="12345" />
        <FavouritesCard name="Favourite name goes here" proc="12342" dx="24532" />
        <FavouritesCard name="Favourite name goes here" proc="23456" dx="12345" />
      </div>
    </div>
  );
}

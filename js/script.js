// Copyright (c) 2020 Mr.Coxall All rights reserved
//
// Created by: Tim Brady
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

/**
 * This function calculates the movie rating
 */
function myButtonClicked() {
  const userAge = document.getElementById("age").value;
  document.getElementById("age").innerHTML = userAge;

  if (userAge >= 17) {
    document.getElementById("movie-rating").innerHTML =
      "You can see any movie.";
  } else if (userAge >= 13) {
    document.getElementById("movie-rating").innerHTML =
      "You can see a PG 13 rated movie.";
  } else if (userAge >= 5) {
    document.getElementById("movie-rating").innerHTML =
      "You can see up to a PG or G rated movie.";
  } else {
    document.getElementById("movie-rating").innerHTML =
      "You are too young for most movies.";
  }
}
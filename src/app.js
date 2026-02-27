import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 
  // build card generator

// step 1. build values & suit arrays

  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['♠', '♥', '♣', '♦']; //alt codes

  let randomValue = Math.floor(Math.random() * values.length);

  let randomSuit = Math.floor(Math.random() * suits.length)

  console.log(suits[randomSuit], values[randomValue], suits[randomSuit]);



};

import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
 
  // build card generator

// build values & suit arrays

  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['♠', '♥', '♣', '♦']; //alt codes


  //generate random munbers from array lengths to select a value & suit
  let randomValue = Math.floor(Math.random() * values.length);
  let randomSuit = Math.floor(Math.random() * suits.length);

  //console.log(suits[randomSuit], values[randomValue], suits[randomSuit]);


  //grab html elements needed to inject suit & value into the dom
  
  let htmlTopSuitElement = document.querySelector('.top-suit');
  let htmlValueElement = document.querySelector('.value');
  let htmlBottomSuitElement = document.querySelector('.bottom-suit');
  
  htmlTopSuitElement.innerHTML = suits[randomSuit];
  htmlValueElement.innerHTML = values[randomValue];
  htmlBottomSuitElement.innerHTML = suits[randomSuit];

  //generate correct suit colors  (heart, diamond -red; spade, club,- black)

  if (suits[randomSuit] === '♥' || suits[randomSuit] === '♦') {
    htmlTopSuitElement.style.color = 'red';
    htmlValueElement.style.color = 'red';
    htmlBottomSuitElement.style.color = 'red';
  } else {
    htmlTopSuitElement.style.color = 'black';
    htmlValueElement.style.color = 'black';
    htmlBottomSuitElement.style.color = 'black';
  }
 

  
}

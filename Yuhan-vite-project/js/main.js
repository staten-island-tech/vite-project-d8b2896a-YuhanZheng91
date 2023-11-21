import '../css/style.css'; // ../ means to exit this folder (and, in this context, to enter css folder into style.css file)
import { stars } from './menu.js';

const allConstell = stars.map((el)=> el.name !== "Dokja");
const aEvil = stars.filter((el)=> el.stand === "Absolute Evil");
const aGood = stars.filter((el)=> el.stand === "Absolute Good");
const neutral = stars.filter((el)=> el.stand !== "Absolute Evil" || "Absolute Good");

document.querySelector(".alll-b").addEventListener('click', function(){
  console.log('"all" button clicked');
/*   if(document.body.classList.contains("goodconst" || "badconst" || "stand-none")){
    document.body.classList.add("stand-all");
    document.body.classList.remove("goodconst" || "badconst" || "stand-none");
  } else {
    
  } */

  if(document.body.classList.contains("goodconst")){
    document.body.classList.remove("goodconst");
    document.body.classList.add("stand-any");
  } else if(document.body.classList.contains("badconst")){
    document.body.classList.remove("badconst");
    document.body.classList.add("stand-any");
  } else {
    document.body.classList.remove("stand-none");
    document.body.classList.add("stand-any");
  }
  cards();
})

document.querySelector(".ab-good-b").addEventListener('click', function(){
  console.log(`"Absolute Good" button was clicked`);
  if(document.body.classList.contains("stand-any")){
    document.body.classList.remove("stand-any");
    document.body.classList.add("goodconst");
  } else if(document.body.classList.contains("badconst")){
    document.body.classList.remove("badconst");
    document.body.classList.add("goodconst");
  } else {
    document.body.classList.remove("stand-none");
    document.body.classList.add("goodconst");
  }
})

document.querySelector(".ab-evil-b").addEventListener('click', function(){
  console.log(`'absolute evil' button was clicked`);
  if(document.body.classList.contains("stand-all" || "goodconst" || "stand-none")){
    document.body.classList.add("badconst");
    document.body.classList.remove("stand-all" || "goodconst" || "stand-none");
  }
})

document.querySelector(".neither-b").addEventListener('click', function(){
  console.log(`'others' button was clicked`);
  if(document.body.classList.contains("stand-all" || "goodconst" || "badconst")){
    document.body.classList.add("stand-none");
    document.body.classList.remove("stand-all" || "goodconst" || "badconst");
  }
})

function smth(){
}

function cards(){
    const allC = `<div class= "container"> 
    <div id="card">
      <h2> erfr</h2>
    </div>

    <div id="card">
      <h2>wedfewfre</h2>
    </div>

    <div id="card">
      <h2>wedewd</h2>
    </div>

    <div id="card">
      <h2>erferf</h2>
    </div>
    
    <div id="card">
      <h2>wedwe</h2>
    </div>
    
    <div id="card">
      <h2></h2>
    </div>
    
    <div id="card">
      <h2></h2>
    </div>
    
    <div id="card">
      <h2></h2>
    </div>
    
    <div id="card">
      <h2></h2>
    </div>
    
    <div id="card">
      <h2></h2>
    </div>
    
    <div id="card">
      <h2></h2>
    </div>
    
    <div id="card">
      <h2></h2>
    </div>
    
    <div id="card">
      <h2></h2>
    </div>
    
  </div>`
    document.querySelector("body").insertAdjacentHTML('afterend', allC);
}

function displayFilterg(){
}
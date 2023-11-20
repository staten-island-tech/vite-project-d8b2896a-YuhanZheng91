import '../css/style.css'; // ../ means to exit this folder (and, in this context, to enter css folder into style.css file)
import { stars } from './menu.js';

const allConstell = stars.map((el)=> el.name !== "Dokja");
const aEvil = stars.filter((el)=> el.stand === "Absolute Evil");
const aGood = stars.filter((el)=> el.stand === "Absolute Good");
const neutral = stars.filter((el)=> el.stand !== "Absolute Evil" || "Absolute Good");

const DOMSelectors = {
    form: document.querySelector("#formm"),
};

DOMSelectors.form.addEventListener('click', function(){
    console.log('A button clicked');

    cards();
})

function cards(){
    const allC = `<div class= "container"> 
    <div id="card">
      <h2> something </h2>
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
    DOMSelectors.form.insertAdjacentHTML('afterend', allC);
}
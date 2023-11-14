import '../css/style.css'; // ../ means to exit this folder (and, in this context, to enter css folder into style.css file)
import { stars } from './menu.js';

const aEvil = stars.filter((el)=> el.stand === "Absolute Evil");
const aGood = stars.filter((el)=> el.stand === "Absolute Good");
const Neutral = stars.filter((el)=> el.stand === "Lone");

const DOMSelectors = {
    form: document.querySelector("#formm"),
    
}

DOMSelectors.form.addEventListener('submit', function(){
    
})
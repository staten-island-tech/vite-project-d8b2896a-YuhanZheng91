import '../css/style.css'; // ../ means to exit this folder (and, in this context, to enter css folder into style.css file)
import { stars } from './menu.js';

const allConstell = stars.filter((el)=> el.name !== "Dokja");
const aEvil = stars.filter((el)=> el.stand === "Absolute Evil");
const aGood = stars.filter((el)=> el.stand === "Absolute Good");
const neutral = stars.filter((el)=> el.stand === "None" || el.stand === "Neither" || el.stand === "Lone");

document.querySelector(".alll-b").addEventListener('click', function(){
  console.log('"alll" button clicked');
  console.log(allConstell);
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

  allCards();
  
  const littleCards = document.querySelectorAll(".card");
  littleCards.forEach((card)=>{
  if(card.classList.contains("amazinggood")){
    card.classList.remove("amazinggood");
    card.classList.add("card");
  } else if (card.classList.contains('amazingbad')){
    card.classList.remove("amazingbad");
    card.classList.add("card");
  } else {
    card.classList.remove("amazing");
    card.classList.add('card');
  }
  })
})

document.querySelector(".ab-good-b").addEventListener('click', function(){
  console.log(`"Absolute Good" button was clicked`);
  console.log(aGood);
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

  goodCards();

  const littleCards = document.querySelectorAll(".card");
  littleCards.forEach((card)=>{
  if(card.classList.contains("card")){
    card.classList.remove("card");
    card.classList.add("amazinggood");
  } else if (card.classList.contains('amazingbad')){
    card.classList.remove("amazingbad");
    card.classList.add("amazinggood");
  } else {
    card.classList.remove("amazing");
    card.classList.add('amazinggood');
  }
  })
})

document.querySelector(".ab-evil-b").addEventListener('click', function(){
  console.log(`'absolute evil' button was clicked`);
  console.log(aEvil);
  if(document.body.classList.contains("stand-any")){
    document.body.classList.remove("stand-any");
    document.body.classList.add("badconst");
  } else if(document.body.classList.contains("goodconst")){
    document.body.classList.remove("goodconst");
    document.body.classList.add("badconst");
  } else {
    document.body.classList.remove("stand-none");
    document.body.classList.add("badconst");
  }

  evilCards();

  const littleCards = document.querySelectorAll(".card");
  littleCards.forEach((card)=>{
  if(card.classList.contains("card")){
    card.classList.remove("card");
    card.classList.add("amazingbad");
  } else if (card.classList.contains('amazinggood')){
    card.classList.remove("amazinggood");
    card.classList.add("amazingbad");
  } else {
    card.classList.remove("amazing");
    card.classList.add('amazingbad');
  }
  })
})

document.querySelector(".neither-b").addEventListener('click', function(){
  console.log(`'others' button was clicked`);
  console.log(neutral);
  if(document.body.classList.contains("stand-any")){
    document.body.classList.remove("stand-any");
    document.body.classList.add("stand-none");
  } else if(document.body.classList.contains("badconst")){
    document.body.classList.remove("badconst");
    document.body.classList.add("stand-none");
  } else {
    document.body.classList.remove("goodconst");
    document.body.classList.add("stand-none");
  }

  okCards();

  const littleCards = document.querySelectorAll(".card");
  littleCards.forEach((card)=>{
    if(card.classList.contains("card")){
      card.classList.remove("card");
      card.classList.add("amazing");
    } else if (card.classList.contains('amazingbad')){
      card.classList.remove("amazingbad");
      card.classList.add("amazing");
    } else {
      card.classList.remove("amazinggood");
      card.classList.add('amazing');
    }
  })
})

//below are functions to sort and "filter" cards
function allCards(){
  const container = document.querySelector(".container");
  container.innerHTML = '';

  stars.forEach((star) => {
    container.innerHTML += `
      <div class="card">
        <h2> ${star.modifier} </h2>
        <h4> ${star.stand} </h4>
        <img src="${star.imageURL}" alt="${star.imageDesc}">
        <h5> ${star.name} </h5>
      </div>`
  });
}

function goodCards(){
  const container = document.querySelector(".container");
  container.innerHTML = '';

  aGood.forEach((aGood)=> {
    container.innerHTML +=`
    <div class="card">
    <h2> ${aGood.modifier} </h2>
    <h4> ${aGood.stand} </h4>
    <img src="${aGood.imageURL}" alt="${aGood.imageDesc}">
    <h5> ${aGood.name} </h5>
    </div>`
    
  })
}

function evilCards(){
  const container = document.querySelector(".container");
  container.innerHTML = '';

  aEvil.forEach((aEvil)=>{
    container.innerHTML += `
    <div class="card">
    <h2> ${aEvil.modifier} </h2>
    <h4> ${aEvil.stand} </h4>
    <img src="${aEvil.imageURL}" alt="${aEvil.imageDesc}">
    <h5> ${aEvil.name} </h5>
  </div>`
  })
}

function okCards(){
  const container = document.querySelector(".container");
  container.innerHTML = '';

  neutral.forEach((neutral)=>{
    container.innerHTML +=`
    <div class="card">
    <h2> ${neutral.modifier} </h2>
    <h4> ${neutral.stand} </h4>
    <img src="${neutral.imageURL}" alt="${neutral.imageDesc}">
    <h5> ${neutral.name} </h5>
  </div>`
  })
}
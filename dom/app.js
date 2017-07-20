// ==============================
//       Characters and places
// ==============================

const hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

const lands = [
  'the-shire',
  'rivendell',
  'mordor'
];

// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log('Trying to make middle earth.');
  // create a section tag with an id of middle-earth
  let middleEarth = document.createElement('section');
  middleEarth.setAttribute('id', 'middle-earth');
  // add each land to the section as article tags-- try using a loop
  document.body.appendChild(middleEarth);

  for (let i = 0; i < lands.length; i++) {
    // console.log(lands[i]);
    let place = document.createElement('article');
    // console.log(place);
    // assign the id of the corresponding article tag as the name of the land
    place.setAttribute('id', lands[i]);
    // console.log(place);
    // inside each article tag include an h1 with the name of the land
    middleEarth.appendChild(place);
    let nameOfLand = document.createElement('h1');
    // console.log(nameOfLand);
    nameOfLand.innerHTML = lands[i];
    // console.log(nameOfLand);
    place.appendChild(nameOfLand);
  }
  // append the section to the body of the DOM with: document.body.appendChild( // variable name )
}

function makeHobbits() {
  console.log('Make hobbits');
  // display an unordered list of hobbits in the shire
  let theHobbits = document.createElement('ul');
  // give each hobbit a class of "hobbit"
  theHobbits = setAttribute('id', 'theHobbits')
  let the_shire = document.getElementById = ('theHobbits');
  let the_shire = appendChild('theHobbits');
   // console.log(hobbits);
   for (let i = 0; i < theHobbits.length; i++);
   let person = document.createElement('li');
  // give each hobbit a class of "hobbit"
   person.setAttribute('class', 'hobbit');
 // inside each li tag include an h1 with the name of the hobbits
 theHobbits.appendChild(person);
 let nameofhobbits = document.createElement('h1');
 let nameofhobbits.innerHTML = hobbits[i];
 nameOfhobbit.innerHTML = hobbits[i];
 person.appendChild(nameOfhobbit);
  }
  }
  // list the hobbits alphabetically.  Maybe use the .sort() method.
 Array.sort();
 //not sure how to apply this at all

function keepItSecretKeepItSafe() {
  console.log('keep It Secret Keep It Safe');

  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  let the_ring = document.createElement('div')
  the_ring = document.setAttribute('id', 'the-ring')
  the_ring.innerHTML = "<h1>The Ring </h1>"
  // add the ring as a child of Frodo
  let ringkeeper = document.getElementsByClassName('hobbit');
   ringkeeper[0].appendChild(thering);
}

function makeBaddies() {
  // display an unordered list of baddies in Mordor
  let makeBaddies = document.createElement('ul');
  let mordor = document.getElementById = ('baddies');
  let mordor = appendChild('baddies');
  // give each of the baddies a class of "baddy"
  makeBaddies= setAttribute('id', 'baddies')
  for (let i = 0; i < baddies.length; i++) {
  let baddie = document.createElement('li');
  baddie.setAttributej('class', 'baddy');
      // console.log(place);

}

function makeBuddies() {
  // create an aside tag and append it below mordor
  let Buddiesgang = document.createElement('aside');
  document.body.appendChild(Buddiesgang);
  // display an unordered list of buddies in the aside
  let Buddies = document.createElement('ul');
  // give each of the buddies a class of "buddy"
  Buddies.setAttribute('id', 'buddy');
  Buddiesgang.appendChild(Buddies);
  for (let i = 0; i < buddies.length; i++) {
    // console.log(buddies)
  let person = document.createElement('li');
  //console.log(person)
  // give each of the buddies a class of "buddy"
  person.setAttribute('class', 'buddy');
  Buddies.appendChild(person);
  let buddyName = document.createElement('h1');
  buddyName.innerHTML = buddies[i];
  person.appendChild(buddyName);

}

function leaveTheShire() {
  // grab the hobbits and move them to Rivendell
  let Thehobbits = document.getElementById('hobbits');
  let rivendell = document.getElementById('rivendell');
 
  Rivendell.appendChild(Thehobbits);
}

function beautifulStranger() {
  // change the buddy 'Strider' node to "Aragorn"
  let person = document.getElementsByClassName('buddy');
  person[3].innerHTML="<h1>Aragorn</h1>";
}

function forgeTheFellowShip() {
  // move the hobbits and the buddies to Rivendell
  let hobbits=document.getElementById('hobbits');
  let buds=document.getElementsByTagName('aside')[0];
  let Rivendell = document.getElementById('rivendell');
  Rivendell.appendChild(buds);
  // create a new div called 'the-fellowship'
  let the_fellowship = document.createElement('div');
  the_fellowship.setAttribute('id', 'the-fellowship');
  // add an h1 with the text 'The Fellowship' to this new div
  the_fellowship.innerHTML="<h1>The Fellowship</h1>";
  Rivendell.appendChild(the_fellowship);
  hobbits=Array.from(document.getElementsByClassName('hobbit'));
  let buddies=Array.from(document.getElementsByClassName('buddy'));
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  for(var i=0 ; i<hobbits.length; i++)
  {
    the_fellowship.appendChild(hobbits[i]);
    alert(`${hobbits[i].innerText} has joined.`);
  }
  for( i=0 ; i<buddies.length; i++)
  {
    the_fellowship.appendChild(buddies[i]);
   
    alert(`${buddies[i].innerText} has joined.`);
  }
}

function theBalrog() {
   console.log("Gandalf the White");
  // change the inner HTML of the 'Gandalf' node to 'Gandalf the White'
  let person = document.getElementsByClassName('buddy');
  person[0].innerHTML="<h1>Gandalf the White</h1>";
  // add a class "the-white" to this element
  person[0].classList.add('the-white');
  // in the style.css file, add a css rule for the class "the-white"
  // have a white background and a grey border
}

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  window.alert("The horn of gondor has been blown");
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
document.getElementsByTagName("h1")[13].style.textDecoration="line-through";

  // Remove the Uruk-Hai from the Baddies on the page
  let child= document.getElementsByClassName('baddy')[2];
  let parent = document.getElementById('baddies');
  parent.removeChild(child);
}

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  let frodo = document.getElementsByClassName('hobbit')[0];
  let sam = document.getElementsByClassName('hobbit')[3];
  let theMordor = document.getElementById('mordor');
  theMordor.appendChild(frodo);
  theMordor.appendChild(sam);
  // add a div with an id of 'mount-doom' to Mordor
}

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if
  // it is a child of the div with the id 'gollum'
  // Move Gollum into Mount Doom
}

function thereAndBackAgain() {
  // remove Gollum and the Ring from the DOM
  // remove all the baddies from the DOM
  // Move all the hobbits back to the shire
}

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  document.querySelector('#b1').addEventListener('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b4').addEventListener('click', makeBaddies);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b7').addEventListener('click', beautifulStranger);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b9').addEventListener('click', theBalrog);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};
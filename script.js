console.log("Script Running");

const changePosition = (horse, position) => (position <= 5 ? horse.style.setProperty('grid-column', position) : null);

let blue_position = 1;
let pink_position = 1;
let brown_position = 1;


// Query Selectors Here
const blueButton = document.querySelector("#blue-button");
const blueHorse = document.querySelector("#blue-horse");

const pinkButton = document.querySelector("#pink-button"); 
const pinkHorse = document.querySelector("#pink-horse");

const brownButton = document.querySelector("#brown-button"); 
const BrownHorse = document.querySelector("#brown-horse")

const winner = document.querySelector("#winner")

// OnClick Functions Here
const advanceBlue = (e) => {
  blue_position += 1;
  changePosition(blueHorse, blue_position);
  checkWinner();
};
const advancePink = (e) => {
  pink_position += 1;
  changePosition(pinkHorse, pink_position);
  checkWinner();
};


const advanceBrown = (e) => {
  brown_position += 1; 
  changePosition(BrownHorse, brown_position);
  checkWinner();
};




// Check for a winner
const checkWinner = (position, color) => {
  if (blue_position == 5){
    winner.innerHTML = "blue is the winner";
  }
  else if (pink_position == 5 ){
    winner.innerHTML = "pink is the winner";
  }
  else if (brown_position == 5){
   winner.innerHTML = "brown is the winner";
  }
  else{
    winner.innerHTML = "no winner yet";
  }

};

console.log(checkWinner);



// Event Listeners Here
blueButton.addEventListener("click", advanceBlue);
pinkButton.addEventListener("click", advancePink);
brownButton.addEventListener("click", advanceBrown);


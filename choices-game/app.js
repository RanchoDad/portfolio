const cohort = [];

const remainingCohort = document.querySelector('#words-list');
const addWordButtonElement = document.querySelector("#cohort-survivor");
const addChoiceButton = document.querySelector("#add-choice");
const insertChoice = document.createElement('h2');

function renderList(){
  remainingCohort.innerHTML = '';
  cohort.forEach(name => {
    const nameElement = document.createElement('li');
    nameElement.innerText = name;
    remainingCohort.appendChild(nameElement);
  });
}

function addChoice() {
  const choiceInput = document.querySelector("#choices");
  const choice = choiceInput.value.trim();
  if (choice) {
    cohort.push(choice);
    choiceInput.value = "";
    renderList();
  } 
}

function removeRandomName(){
    if(cohort.length === 1){
        const theWinner = document.createElement('h1');
        theWinner.innerText = `${cohort[0]} was always the obvious choice! Right?`;
        document.querySelector('main').appendChild(theWinner);
        clearCohort();
    }else{
  const randomIndex = Math.floor(Math.random() * cohort.length);
  const removedName = cohort.splice(randomIndex, 1)[0];
  const displayRemovedName = document.createElement('h2');
  displayRemovedName.innerText = `${removedName} was always a bad idea, good riddance.`;
  document.body.appendChild(displayRemovedName);
  renderList();
  return removedName;
}
}

function respondToSubmission(){
  if (!cohort || cohort.length === 0){
    insertChoice.innerText = `Add your choices!`;
    document.querySelector('main').appendChild(insertChoice);
  }else {
    const existingInsertChoice = document.querySelector('main h2');
    if (existingInsertChoice) {
      existingInsertChoice.remove();
    }
    removeRandomName(); }  
}

function clearCohort() {
  cohort.length = 0;
  remainingCohort.innerHTML = '';
  const tryAgain = document.createElement('h2');
  tryAgain.innerText = "Enter your options again to see if you get the same result. Or did you have another choice to make?";
}

addWordButtonElement.addEventListener("click", respondToSubmission);
addChoiceButton.addEventListener("click", addChoice);
// addWordButtonElement.addEventListener("keypress",function (e){
//   if(e.key === 'Enter'){
//       respondToSubmission();
//   }
// })
// addChoiceButton.addEventListener("keypress", function (e){
//   if(e.key === 'Enter'){
//       addChoice();
//   }
// })

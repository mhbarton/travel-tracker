// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { fetchData } from './apiCalls.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import './images/worldwide-logo.png';
import './images/world-background.jpg';


console.log('This is the JavaScript entry file - your code begins here.');
// GLOBAL VARIABLES
let allTravelerData;
let allTripData;
let allDestinationData;
let currentTraveler;


//FETCH PROMISE:
function startData() {
    Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
      .then((dataSet) => {
        allTravelerData = dataSet[0];
        allTripData = dataSet[1];
        allDestinationData = dataSet[2];
        // generatePageLoad(allUserData);
        console.log(allTravelerData)
  })
};
//
// function updateData() {
//   Promise.all([fetchData('sleep', 'sleepData'), fetchData('hydration', 'hydrationData'), fetchData('activity', 'activityData')])
//     .then((dataSet) => {
//       allSleepData = dataSet[0];
//       allHydrationData = dataSet[1];
//       allActivityData = dataSet[2];
//   })
// };


//QUERY SELECTORS:


//EVENT LISTENERS:
window.addEventListener('load', startData);



//FUNCTIONS:
function generatePageLoad(userData) {
  currentUser = generateRandomUser(userData.userData);
  welcomeUser(currentUser)
  renderMyInfo(currentUser);
  renderMyFriends(currentUser, userData.userData);
  renderMyStepGoal(currentUser);
  renderAvgStepGoal(userData);
}

function generateRandomUser(travelerData) {
  let currentTravelerObj = travelerData[Math.floor(Math.random() * travelerData.length)];
  return currentTraveler = new Traveler(currentTravelerObj);
};

function welcomeUser() {
  welcomeUserName.innerText = `Hi, ${currentUser.returnUserFirstName()}!`
};

//HELPER FUNCTIONS
function hide(element) {
  element.classList.add('hide');
};

function unhide(element) {
  element.classList.remove('hide');
};

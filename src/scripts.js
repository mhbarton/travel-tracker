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


//QUERY SELECTORS


//EVENT LISTENERS:
window.addEventListener('load', startData);






// function generateRandomUser(userData) {
//   let currentUserObj = userData[Math.floor(Math.random() * userData.length)];
//   return currentUser = new User(currentUserObj);
// };
//
// function welcomeUser() {
//   welcomeUserName.innerText = `Hi, ${currentUser.returnUserFirstName()}!`
// };

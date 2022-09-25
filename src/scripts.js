// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { fetchData } from './apiCalls.js';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'
import './images/worldwide-logo.png';
import './images/world-background.jpg';
import Traveler from './Traveler.js';
import Trip from './Trip.js';
import Destination from './Destination';


// GLOBAL VARIABLES
let allTravelerData;
let allTripData;
let allDestinationData;
let currentTraveler;
let currentTrip;


//FETCH PROMISE:
function startData() {
    Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
      .then((dataSet) => {
        allTravelerData = dataSet[0].travelers;
        allTripData = dataSet[1].trips;
        allDestinationData = dataSet[2].destinations;
        // currentTrip = allTripData.map(trip => new Trip(trip))
        currentTrip = new Trip(allTripData)
        generatePageLoad();
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
let welcomeTraveler = document.getElementById('welcomeTravelerMessage');
let pastBookings = document.getElementById('pastBookingsInfo');
let upcomingBookings = document.getElementById('upcomingBookingsInfo');
let pendingBookings = document.getElementById('pendingBookingsInfo');
let totalAmount = document.getElementById('totalAmount');


//EVENT LISTENERS:
window.addEventListener('load', startData);


//FUNCTIONS:
function generatePageLoad() {
  renderRandomUser();
  renderWelcomeTraveler()
  renderPastBookings();
  renderUpcomingBookings();
  renderPendingBookings();
  renderTotalAmount();
}

function renderRandomUser() {
  let currentTravelerObj = allTravelerData[Math.floor(Math.random() * allTravelerData.length)];
  return currentTraveler = new Traveler(currentTravelerObj);
  // console.log(allTravelerData[1])
  // currentTraveler = new Traveler(allTravelerData[1])
};

function renderWelcomeTraveler() {
  welcomeTraveler.innerText = `Welcome, ${currentTraveler.returnTravelerFirstName()}!`
};

function renderPastBookings(){
  const travelerPastTrips = currentTraveler.returnPastTrips(allTripData).filter(trip => {
    allDestinationData.forEach(destination => {
      if(destination.id === trip.destinationID) {
        pastBookings.innerHTML += `<img class="destination-image" src="${destination.image}">
        <h4 class="destination-name"> ${destination.destination}</h4>`
      }
    })
  })
  return travelerPastTrips;
};

function renderUpcomingBookings(){
  const travelerUpcomingTrips = currentTraveler.returnUpcomingTrips(allTripData).filter(trip => {
    allDestinationData.forEach(destination => {
      if(destination.id === trip.destinationID) {
        upcomingBookings.innerHTML += `<img class="destination-image" src="${destination.image}">
        <h4 class="destination-name"> ${destination.destination}</h4>`
      }
    })
  })
  return travelerUpcomingTrips;
};

function renderPendingBookings(){
  const travelerPendingTrips = currentTraveler.returnPendingTrips(allTripData).filter(trip => {
    allDestinationData.forEach(destination => {
      if(destination.id === trip.destinationID) {
        pendingBookings.innerHTML += `<img class="destination-image" src="${destination.image}">
        <h4 class="destination-name"> ${destination.destination}</h4>`
      }
    })
  })
  return travelerPendingTrips;
};

function renderTotalAmount() {
  console.log('jello')
  const totalSpent = currentTrip.returnTotalCostPastYear(currentTraveler, allTripData, allDestinationData)
  totalAmount.innerHTML += `<h4 class="total-spent"> $ ${totalSpent} </h4> `
}

//HELPER FUNCTIONS
function hide(element) {
  element.classList.add('hide');
};

function unhide(element) {
  element.classList.remove('hide');
};

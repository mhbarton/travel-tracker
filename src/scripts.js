// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { fetchData, fetchPost } from './apiCalls.js';

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

//FETCH PROMISE:
function startData() {
    Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
      .then((dataSet) => {
        allTravelerData = dataSet[0].travelers;
        allTripData = dataSet[1].trips;
        allDestinationData = dataSet[2].destinations;
        generatePageLoad();
  })
};

function updateData() {
  Promise.all([fetchData('travelers'), fetchData('trips'), fetchData('destinations')])
    .then((dataSet) => {
      allTravelerData = dataSet[0].travelers;
      allTripData = dataSet[1].trips;
      allDestinationData = dataSet[2].destinations;
      renderNewPendingBookings()
  })
};

//QUERY SELECTORS:
let welcomeTraveler = document.getElementById('welcomeTravelerMessage');
let pastBookings = document.getElementById('pastBookingsInfo');
let upcomingBookings = document.getElementById('upcomingBookingsInfo');
let pendingBookings = document.getElementById('pendingBookingsInfo');
let totalAmount = document.getElementById('totalAmount');
let destinationOptions = document.getElementById('destinations');
let loginButton = document.getElementById('login');
let logoutButton = document.getElementById('logout');
let estimatedCostButton = document.getElementById('estimatedCostButton');
let bookItButton = document.getElementById('bookItButton');
let keepSearchingButton = document.getElementById('keepSearchingButton');
let durationInput = document.getElementById('durationAmount');
let numTravelersInput = document.getElementById('numTravelers');
let estimatedNewTripCost = document.getElementById('newTripCost');
let estimatedCostContainer = document.getElementById('estimatedCostContainer');
let planningChoicesForm = document.getElementById('planningChoicesForm');
let tripDateInput = document.getElementById('travelDate');

//EVENT LISTENERS:
window.addEventListener('load', startData);
estimatedCostButton.addEventListener('click', showEstimate);
bookItButton.addEventListener('click', bookNewTrip);
keepSearchingButton.addEventListener('click', refreshForm);


//FUNCTIONS:
function generatePageLoad() {
  renderRandomTraveler();
  renderWelcomeTraveler()
  renderPastBookings();
  renderUpcomingBookings();
  renderPendingBookings();
  renderTotalAmount();
  populateDestinationOptions()
  hide(loginButton);
  unhide(logoutButton);
}

function renderRandomTraveler() {
  let currentTravelerObj = allTravelerData[Math.floor(Math.random() * allTravelerData.length)];
  return currentTraveler = new Traveler(currentTravelerObj);
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
  const presentYear = (new Date()).getFullYear().toString();
  const amount = currentTraveler.returnTravelerTrips(allTripData).reduce((total, trip) => {
    allDestinationData.forEach(destination => {
      if((trip.destinationID === destination.id) && (trip.date.split("/")[0]) === presentYear) {
      total += ((trip.duration * destination.estimatedLodgingCostPerDay) +
        (trip.travelers * destination.estimatedFlightCostPerPerson)) * 1.1;
      }
    })
    return total
  }, 0)
  return totalAmount.innerHTML += `<h4 class="total-spent"> $ ${amount.toFixed(2)} </h4>`
};

function populateDestinationOptions() {
    allDestinationData.forEach(destination => {
        destinationOptions.innerHTML +=  `<option>${destination.destination}</option>`
    });
};

function showEstimate(event) {
  event.preventDefault();
  createNewTrip();
  unhide(estimatedCostContainer);
};

function createNewTrip() {
 const returnDestinations = allDestinationData.find(destination => destination.destination === destinationOptions.value);
 const newTripEstimate =  ((returnDestinations.estimatedLodgingCostPerDay * durationInput.value) +
     (returnDestinations.estimatedFlightCostPerPerson * numTravelersInput.value) * 1.1);

     return estimatedNewTripCost.innerHTML = `$ ${newTripEstimate.toFixed(2)}`
};

function bookNewTrip() {
  const tripID = allTripData.sort((a,b) => b.id -a.id)[0].id + 1;
  const travelerID = currentTraveler.id;
  const destinationID = allDestinationData.find(destination => destination.destination === destinationOptions.value).id;
  const formattedDate = tripDateInput.value.split("-").join("/")
  let newTripData = {id:tripID, userID: travelerID, destinationID: destinationID, travelers: parseInt(numTravelersInput.value), date: formattedDate, duration: parseInt(durationInput.value), status: "pending", suggestedActivities: []}
  fetchPost('trips', newTripData)
    // .then(data => showConfirmationMessage())
    .then(data => updateData())
  clearForm();
  hide(estimatedCostContainer);
};

function renderNewPendingBookings() {
  pendingBookings.innerHTML = ''
  const newPendingTrips = currentTraveler.returnPendingTrips(allTripData).filter(trip => {
    allDestinationData.forEach(destination => {
      console.log('trip', trip)
      console.log('ct', currentTraveler.returnPendingTrips(allTripData))
      if(destination.id === trip.destinationID && (!currentTraveler.returnPendingTrips(allTripData).includes(trip.id))) {
        pendingBookings.innerHTML += `<img class="destination-image" src="${destination.image}">
        <h4 class="destination-name"> ${destination.destination}</h4>`
      }
    })
  })
  return newPendingTrips;
};

function refreshForm() {
  clearForm();
  hide(estimatedCostContainer);
};

//HELPER FUNCTIONS
function clearForm() {
  planningChoicesForm.reset();
};

function hide(element) {
  element.classList.add('hide');
};

function unhide(element) {
  element.classList.remove('hide');
};


// push new trip newTripData into the array of traveler's trips

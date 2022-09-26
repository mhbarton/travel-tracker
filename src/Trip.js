class Trip {
  constructor(tripDetails){
    this.tripID = tripDetails.id;
    this.userID = tripDetails.userID;
    this.destinationID = tripDetails.destinationID;
    this.travelers = tripDetails.travelers;
    this.date = tripDetails.date;
    this.duration = tripDetails.duration;
    this.status = tripDetails.status;
    this.suggestedActivities = [];
  }

  findDestination(traveler, tripsData, destinationsData){
    const newDestination = destinationsData.reduce((acc, current) => {
      traveler.returnTravelerTrips(tripsData).find(trip => {
        if(trip.destinationID === current.destinationID){
          acc = current
        }
      })
      return acc
    }, {})
    return newDestination
  }

  // returnCostPerTrip(traveler, tripsData, destinationsData){
  //   const neededDestinationData = this.findDestination(traveler, tripsData, destinationsData);
  //
  //   const lodgingEachDay = neededDestinationData.estimatedLodgingCost;
  //   const flightEachPerson = neededDestinationData.estimatedFlightCost;
  //
  //   const costOfLodging = lodgingEachDay * this.duration;
  //   const costOfFlight = flightEachPerson * this.travelers;
  //
  //   const totalCost = (costOfLodging + costOfFlight) * 1.1;
  //   return totalCost
  // };

  calculateCostPerTrip(destinationsData, destination, people, days){
    const calculation = destinationsData.reduce((acc, current) => {
      if(destination.destination === current.destination) {
        acc += (destination.estimatedLodgingCost * days + destination.estimatedFlightCost * people) * 1.1;
      }
      return acc;
    }, 0);
    return parseFloat(calculation).toFixed(2);
  }



  returnTotalCostPastYear(traveler, tripsData, destinationsData){
    const presentYear = (new Date()).getFullYear().toString();
    const neededData = this.findDestination(traveler, tripsData, destinationsData);
    const allTripCost = traveler.returnPastTrips(tripsData).reduce((acc, current) => {
      if(neededData.destinationID === current.destinationID && (current.date.split("/")[0]) === presentYear){
        acc += this.returnCostPerTrip(traveler, tripsData, destinationsData)
      }
    return acc
    }, 0)
    return allTripCost
  }

// returnTotalCostPastYear(traveler, tripsData, destinationsData){
//     const presentYear = (new Date()).getFullYear().toString();
//     const allTripCost = traveler.returnPastTrips(tripsData).reduce((acc, current) => {
//       destinationsData.forEach(destination => {
//         if((current.date.split("/")[0]) === presentYear && destination.id === current.destinationID) {
//           console.log('func', this.returnCostPerTrip(traveler, tripsData, destinationsData))
//           acc += this.returnCostPerTrip(traveler, tripsData, destinationsData)
//         }
//       })
//       console.log(acc)
//     return acc
//     }, 0)
//
//     return allTripCost
//   }
};

export default Trip;


/// trip.destinationID needs to compared to destination.destinationID
// trip.userID needs to compared to traveler.id

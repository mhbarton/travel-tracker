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

  // findPastTrips(){
  //
  // }

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


  returnCostPerTrip(traveler, tripsData, destinationsData){
    const neededDestinationData = this.findDestination(traveler, tripsData, destinationsData);

    const lodgingEachDay = neededDestinationData.estimatedLodgingCost;
    const flightEachPerson = neededDestinationData.estimatedFlightCost;

    const costOfLodging = lodgingEachDay * this.duration;
    const costOfFlight = flightEachPerson * this.travelers;

    const totalCost = (costOfLodging + costOfFlight) * 1.1;
    return totalCost
  };

  returnCostForAllTrips(){

  }
};

export default Trip;


/// trip.destinationID needs to compared to destination.destinationID
// trip.userID needs to compared to traveler.id

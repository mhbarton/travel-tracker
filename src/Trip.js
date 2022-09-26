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
  };

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
  };

  returnCostPerTrip(traveler, tripsData, destinationsData){
    const neededDestinationData = this.findDestination(traveler, tripsData, destinationsData);

    const lodgingEachDay = neededDestinationData.estimatedLodgingCost;
    const flightEachPerson = neededDestinationData.estimatedFlightCost;

    const costOfLodging = lodgingEachDay * this.duration;
    const costOfFlight = flightEachPerson * this.travelers;

    const totalCost = (costOfLodging + costOfFlight) * 1.1;
    return totalCost
  };

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
};

export default Trip;

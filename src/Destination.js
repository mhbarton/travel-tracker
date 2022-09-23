class Destination {
  constructor(destinationDetails){
    this.destinationID = destinationDetails.id;
    this.destination = destinationDetails.destination;
    this.estimatedLodgingCost = destinationDetails.estimatedLodgingCostPerDay;
    this.estimatedFlightCost = destinationDetails.estimatedFlightCostPerPerson;
    this.image = destinationDetails.image;
    this.altText = destinationDetails.alt;
  }
}


export default Destination;

class Traveler {
  constructor(travelerDetails){
    this.id = travelerDetails.id;
    this.name = travelerDetails.name;
    this.travelerType = travelerDetails.travelerType;
  }

  returnTravelerFirstName() {
    let firstName = this.name.split(" ");
    return firstName[0];
  };

  returnTravelerTrips(tripsData){
    const allTrips = tripsData.filter(trip => this.id === trip.userID)
    // console.log(allTrips)
    return allTrips
  }

};




export default Traveler;

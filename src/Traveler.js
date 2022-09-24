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
  };

  returnPastTrips(tripsData) {
    const presentYear = (new Date()).getFullYear().toString();

    const pastTrips = this.returnTravelerTrips(tripsData).filter(trip => (trip.date.split('/')[0]) < presentYear)
    return pastTrips
  };

  returnUpcomingTrips(tripsData) {
    const presentYear = (new Date()).toString();
    console.log(presentYear)

    const upcomingTrips = this.returnTravelerTrips(tripsData).filter(trip => (trip.date.split('/')[0]) > presentYear)
    return pastTrips
  };

};




export default Traveler;

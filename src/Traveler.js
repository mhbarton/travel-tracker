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
    return allTrips
  };

  findCurrentDate() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    return today;
  };

  returnPastTrips(tripsData) {
    const pastTrips = this.returnTravelerTrips(tripsData).filter(trip => trip.date < this.findCurrentDate())
    return pastTrips
  };

  returnUpcomingTrips(tripsData) {
    const currentDate = this.findCurrentDate()

    const upcomingTrips = this.returnTravelerTrips(tripsData).filter(trip => trip.date > currentDate)
    return upcomingTrips
  };

  returnPendingTrips(tripsData){
    const pendingTrips = this.returnTravelerTrips(tripsData).filter(trip => trip.status === 'pending')
    return pendingTrips
  };
};

export default Traveler;

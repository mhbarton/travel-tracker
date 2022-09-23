class Trip {
  constructor(tripDetails){
    this.tripID = tripDetails.id;
    this.userID = tripDetails.id;
    this.destinationID = tripDetails.destinationID;
    this.travelers = tripDetails.travelers;
    this.date = tripDetails.date;
    this.duration = tripDetails.duration;
    this.status = tripDetails.status
    this.suggestedActivities = [];
  }
}

export default Trip;

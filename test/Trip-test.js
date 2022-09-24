import { expect } from 'chai';
import Trip from '../src/Trip.js'
import Destination from '../src/Destination.js'
import Traveler from '../src/Traveler.js'

describe('Trip', () => {
  let trip1, trip2, trip3;
  let tripArray;
  let destination1, destination2, destination3;
  let destinationArray;
  let traveler1;

  beforeEach(() => {
    trip1 = new Trip({
              id: 1,
              userID: 1,
              destinationID: 49,
              travelers: 1,
              date: "2022/09/16",
              duration: 8,
              status: "approved",
              suggestedActivities: [ ]
            });
    trip2 = new Trip ({
              id: 2,
              userID: 2,
              destinationID: 25,
              travelers: 5,
              date: "2022/10/04",
              duration: 18,
              status: "pending",
              suggestedActivities: [ ]
            });
    trip3 = new Trip ({
              id: 3,
              userID: 3,
              destinationID: 22,
              travelers: 4,
              date: "2022/05/22",
              duration: 17,
              status: "approved",
              suggestedActivities: [ ]
            });

    tripArray = [trip1, trip2, trip3];

    destination1 = new Destination ({
                    id: 1,
                    destination: "Lima, Peru",
                    estimatedLodgingCostPerDay: 70,
                    estimatedFlightCostPerPerson: 400,
                    image: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
                    alt: "overview of city buildings with a clear sky"
                  });
    destination2 = new Destination ({
                    id: 2,
                    destination: "Stockholm, Sweden",
                    estimatedLodgingCostPerDay: 100,
                    estimatedFlightCostPerPerson: 780,
                    image: "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                    alt: "city with boats on the water during the day time"
                  });
    destination3 = new Destination ({
                    id: 49,
                    destination: "Sydney, Austrailia",
                    estimatedLodgingCostPerDay: 130,
                    estimatedFlightCostPerPerson: 950,
                    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                    alt: "opera house and city buildings on the water with boats"
                  });

    destinationArray = [destination1, destination2, destination3];

    traveler1 = new Traveler ({id: 1, name: "Ham Leadbeater", travelerType: "relaxer"});
  });

  it('Should be a function', () => {
      expect(Trip).to.be.a('function');
  });

  it('Should be an instance of Trip', () => {
      expect(trip1).to.be.an.instanceOf(Trip);
      expect(trip2).to.be.an.instanceOf(Trip);
  });

  it('Should have a unique ID', () => {
      expect(trip1.tripID).to.equal(1);
      expect(trip2.tripID).to.equal(2);
  });

  it('Should have a unique user ID', () => {
    expect(trip1.userID).to.equal(1);
    expect(trip2.userID).to.equal(2);
  });

  it('Should have a unique destination ID', () => {
    expect(trip1.destinationID).to.equal(49);
    expect(trip2.destinationID).to.equal(25);
  });

  it('Should have a date', () => {
    expect(trip1.date).to.equal("2022/09/16");
    expect(trip2.date).to.equal("2022/10/04");
  });

  it('Should have a duration amount', () => {
    expect(trip1.duration).to.equal(8);
    expect(trip2.duration).to.equal(18);
  });

  it('Should have a status', () => {
    expect(trip1.status).to.equal('approved');
    expect(trip2.status).to.equal('pending');
  });

  it('Should be able to store and begin with an empty array of suggested activities', () => {
    expect(trip1.suggestedActivities).to.deep.equal([]);
    expect(trip2.suggestedActivities).to.deep.equal([]);
  });

  it('Should find the destination', () => {
    expect(trip1.findDestination(traveler1, tripArray, destinationArray)).to.deep.equal(destination3);
  });

  it('Should return the cost of a single trip', () => {
    expect(trip1.returnCostPerTrip(destination1)).to.equal(1056);
  });
});

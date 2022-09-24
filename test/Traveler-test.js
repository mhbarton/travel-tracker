import { expect } from 'chai';
import Traveler from '../src/Traveler.js';
import Trip from '../src/Trip.js';

describe('Traveler', () => {
  let traveler1, traveler2, traveler3, traveler4, traveler5;
  let travelerArray;
  let trip1, trip2, trip3;
  let tripArray;

  beforeEach(() => {
    traveler1 = new Traveler ({id: 1, name: "Ham Leadbeater", travelerType: "relaxer"});
    traveler2 = new Traveler ({id: 2, name: "Rachael Vaughten", travelerType: "thrill-seeker"});
    traveler3 = new Traveler ({id: 3, name: "Sibby Dawidowitsch", travelerType: "shopper"});
    traveler4 = new Traveler ({id: 4, name: "Leila Thebeaud", travelerType: "photographer"});
    traveler5 = new Traveler ({id: 5, name: "Tiffy Grout", travelerType: "thrill-seeker"});
    travelerArray = [traveler1, traveler2, traveler3, traveler4, traveler5];
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
              userID: 1,
              destinationID: 22,
              travelers: 4,
              date: "2022/05/22",
              duration: 17,
              status: "approved",
              suggestedActivities: [ ]
            });

    tripArray = [trip1, trip2, trip3];
  });

  it('Should be a function', () => {
      expect(Traveler).to.be.a('function');
  });

  it('Should be an instance of Traveler', () => {
      expect(traveler1).to.be.an.instanceOf(Traveler);
      expect(traveler2).to.be.an.instanceOf(Traveler);
  });

  it('Should have a unique ID', () => {
      expect(traveler1.id).to.equal(1);
      expect(traveler2.id).to.equal(2);
  });

  it('Should have a name', () => {
    expect(traveler1.name).to.equal('Ham Leadbeater');
    expect(traveler2.name).to.equal('Rachael Vaughten');
  });

  it('Should have a type of traveler', () => {
    expect(traveler1.travelerType).to.equal('relaxer');
    expect(traveler2.travelerType).to.equal('thrill-seeker');
  });

  it('Should return a traveler\'s first name', () => {
    expect(traveler1.returnTravelerFirstName()).to.equal('Ham');
    expect(traveler2.returnTravelerFirstName()).to.equal('Rachael');
  });

  it('Should return all trips for a traveler', () => {
    expect(traveler1.returnTravelerTrips(tripArray)).to.deep.equal([trip1, trip3]);
  });

});

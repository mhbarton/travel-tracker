import { expect } from 'chai';
import Trip from '../src/Trip.js'

describe('Trip', () => {
  let trip1, trip2, trip3;
  let tripArray;

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
  });

  it('Should be a function', () => {
      expect(Trip).to.be.a('function');
  });

  it('Should be an instance of Trip', () => {
      expect(trip1).to.be.an.instanceOf(Trip);
      expect(trip2).to.be.an.instanceOf(Trip);
  });

  it('Should have a unique ID', () => {
      expect(trip1.id).to.equal(1);
      expect(trip2.id).to.equal(2);
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
    expect(trip2.suggestedActivities).to.equal([]);
  });
});

import { expect } from 'chai';
import Traveler from '../src/Traveler.js'

describe('Traveler', () => {
  let traveler1, traveler2, traveler3, traveler4, traveler5;
  let travelerArray;

  beforeEach(() => {
    traveler1 = new Traveler ({id: 1, name: "Ham Leadbeater", travelerType: "relaxer"});
    traveler2 = new Traveler ({id: 2, name: "Rachael Vaughten", travelerType: "thrill-seeker"});
    traveler3 = new Traveler ({id: 3, name: "Sibby Dawidowitsch", travelerType: "shopper"});
    traveler4 = new Traveler ({id: 4, name: "Leila Thebeaud", travelerType: "photographer"});
    traveler5 = new Traveler ({id: 5, name: "Tiffy Grout", travelerType: "thrill-seeker"});

    travelerArray = [traveler1, traveler2, traveler3, traveler4, traveler5];
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

});

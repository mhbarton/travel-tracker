import { expect } from 'chai';
import Destination from '../src/Destination.js'

describe('Destination', () => {
  let destination1, destination2, destination3
  let destinationArray;

  beforeEach(() => {
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
                          id: 3,
                          destination: "Sydney, Austrailia",
                          estimatedLodgingCostPerDay: 130,
                          estimatedFlightCostPerPerson: 950,
                          image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                          alt: "opera house and city buildings on the water with boats"
                        });

    destinationArray = [destination1, destination2, destination3];
  });

  it('Should be a function', () => {
      expect(Destination).to.be.a('function');
  });

  it('Should be an instance of Destination', () => {
      expect(destination1).to.be.an.instanceOf(Destination);
      expect(destination2).to.be.an.instanceOf(Destination);
  });

  it('Should have a unique ID', () => {
      expect(destination1.destinationID).to.equal(1);
      expect(destination2.destinationID).to.equal(2);
  });

  it('Should have a destination', () => {
    expect(destination1.destination).to.equal('Lima, Peru');
    expect(destination2.destination).to.equal('Stockholm, Sweden');
  });

  it('Should have an estimated lodging cost per day', () => {
    expect(destination1.estimatedLodgingCost).to.equal(70);
    expect(destination2.estimatedLodgingCost).to.equal(100);
  });

  it('Should have an estimated cost of flight per person', () => {
    expect(destination1.estimatedFlightCost).to.equal(400);
    expect(destination2.estimatedFlightCost).to.equal(780);
  });

  it('Should have an image', () => {
    expect(destination1.image).to.equal('https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80');
    expect(destination2.image).to.equal("https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
  });

  it('Should have an alt text for the destination image', () => {
    expect(destination1.altText).to.equal("overview of city buildings with a clear sky");
    expect(destination2.altText).to.equal("city with boats on the water during the day time");
  });

});

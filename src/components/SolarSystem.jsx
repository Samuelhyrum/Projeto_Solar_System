import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const all = planets.map((plan) => (
      <PlanetCard
        key={ plan.name }
        planetName={ plan.name }
        planetImage={ plan.image }
      />));
    return (
      <section>
        <div className='div1' data-testid="solar-system">
          <Title headline="Planetas" />
          <br></br>
          <div className='div3'>
            {/* <br></br> */}
          {all}
          </div>
        </div>
      </section>
    );
  }
}
export default SolarSystem;

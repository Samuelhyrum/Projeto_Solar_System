import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Missions from './Missions';

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
        <div data-testid="solar-system">
          <Title headline="Planetas" />
          {all}
        </div>
        <div>
          <Missions />
        </div>
      </section>
    );
  }
}
export default SolarSystem;

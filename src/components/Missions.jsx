import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const mission = missions.map((mis) => (
      <MissionCard
        key={ mis.name }
        name={ mis.name }
        year={ mis.year }
        country={ mis.country }
        destination={ mis.destination }
      />));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {mission}
      </div>
    );
  }
}
export default Missions;

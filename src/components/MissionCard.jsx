import React from "react";

class MissionCard extends React.Component {
    render() {
        const { name } = this.props;
        const { year } = this.props;
        const { country } = this.props;
        const { destination } = this.props;

        return (
            <div data-testid="mission-card">
                <p data-testid="mission-name">
                    {name}
                </p>
                <p data-testid="mission-year">
                    {year}
                </p>
                <p data-testid="mission-country">
                    {country}
                </p>
                <p data-testid="mission-destination">
                    {destination}
                </p>
            </div>

        );
    }
}

export default MissionCard;
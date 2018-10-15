import React from 'react';
import Card from './Card.js';

const CardList = (props) => {
    const { robots } = props;
    return robots.map(robot => <Card key={robot.id} robot={robot} />)
}

export default CardList;
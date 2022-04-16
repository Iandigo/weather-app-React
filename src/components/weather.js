import React from "react";
import { Card } from "semantic-ui-react";

const Weather = ({ weatherdata }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header classname="header">{weatherdata.name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default Weather;

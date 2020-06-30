import React from "react";

import { Cards, Card, P, Ps, Title, Try } from "../styles/styled";

import { Icon } from "@iconify/react";
import magnifyingGlass from "@iconify/icons-entypo/magnifying-glass";
import powerman from "../imgs/powerman.jpg";

export default function Workout() {
  const level = "Advanced";
  const title = "Strong And Big Chest";
  const equipment = "Full";
  const type = "Strength";
  const time = 45;

  return (
    <>
      <h3>TRAIN LIKE ROBERT BLAZEVIC</h3>
      <div className="exercises">
        <h1>Exercises</h1>
        <Icon icon={magnifyingGlass} width="30" height="30" style={{cursor: "pointer"}}/>
      </div>
      <Cards>
        <Card
          style={{
            backgroundImage: `url(${powerman})`,
            backgroundSize: "100%",
          }}
        ><h3>{`${level} Level`}</h3>
          <Title>{`${title}`}</Title>
          <div style={{display: "flex", justifyContent: "space-between" ,alignItems: "flex-end"}}>
            
          <Ps>
            <P>{`${equipment} Equipment`}</P>
            <P>{`${type}`}</P>
            <P>{`Total Time: ${time.toString()} minutes`}</P>
          </Ps>

          <Try>TRY</Try>
          </div>
          
        </Card>
        <Card
          style={{
            backgroundImage: `url(${powerman})`,
            backgroundSize: "100%",
          }}
        >
          <Try>TRY</Try>
        </Card>
        <Card
          style={{
            backgroundImage: `url(${powerman})`,
            backgroundSize: "100%",
          }}
        >
          <Try>TRY</Try>
        </Card>
        <Card
          style={{
            backgroundImage: `url(${powerman})`,
            backgroundSize: "100%",
          }}
        >
          <Try>TRY</Try>
        </Card>
        <Card
          style={{
            backgroundImage: `url(${powerman})`,
            backgroundSize: "100%",
          }}
        >
          <Try>TRY</Try>
        </Card>
      </Cards>
    </>
  );
}

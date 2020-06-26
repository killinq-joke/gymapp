import React from "react";

import { Cards, Card } from "../styles/styled";

import { Icon } from "@iconify/react";
import magnifyingGlass from "@iconify/icons-entypo/magnifying-glass";
import powerman from "../imgs/powerman.jpg";

export default function Workout() {

  const level = "Advanced"
  return (
    <>
      <h3>TRAIN LIKE ROBERT BLAZEVIC</h3>
      <div className="exercises">
        <h1>Exercises</h1>
        <Icon icon={magnifyingGlass} width="30" height="30" />
      </div>
      <Cards>
        <Card
          style={{
            backgroundImage: `url(${powerman})`,
            backgroundSize: "100%",
          }}
        >
          <h3>{`${level} Level` }</h3>
          
          <button>salut</button>
        </Card>
        <Card
          style={{
            backgroundImage: `url(${powerman})`,
            backgroundSize: "100%",
          }}
        >
          <button>salut</button>
        </Card>
        <Card
          style={{
            backgroundImage: `url(${powerman})`,
            backgroundSize: "100%",
          }}
        >
          <button>salut</button>
        </Card>
        <Card
          style={{
            backgroundImage: `url(${powerman})`,
            backgroundSize: "100%",
          }}
        >
          <button>salut</button>
        </Card>
        <Card
          style={{
            backgroundImage: `url(${powerman})`,
            backgroundSize: "100%",
          }}
        >
          <button>salut</button>
        </Card>
      </Cards>
    </>
  );
}

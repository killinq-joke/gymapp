import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import magnifyingGlass from "@iconify/icons-entypo/magnifying-glass";
import powerman from "../imgs/powerman.jpg";

export default function Workout() {
  return (
    <>
      <h3>TRAIN LIKE ROBERT BLAZEVIC</h3>
      <div className="exercises">
        <h1>Exercises</h1>
        <Icon icon={magnifyingGlass} width="30" height="30" />
      </div>
      <div style={{ backgroundImage:`url(${powerman})`, "background-size": "200px", height: "100px" }}>
        <button>salut</button>
      </div>
    </>
  );
}

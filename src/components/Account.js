import React, { useState } from "react";
import { Icon } from "@iconify/react";
import arrowLeftShort from "@iconify/icons-bi/arrow-left-short";

import { GenderButton } from "../styles/styled";

export default function Account() {

  const [height, setHeight] = useState(150);
  const [birthYear, setBirthYear] = useState(2000)
  const [weight, setWeight] = useState(80)

  const name = "Mark Summerby";

  return (
    <>
      <Icon
        style={{ margin: "5% 0 0 2%" }}
        icon={arrowLeftShort}
        width="40"
        height="40"
      />
      <h1 style={{ marginLeft: "5%" }}>{name}</h1>
      <div style={{ display: "flex", flexFlow: "column" }}>
        <h2 style={{ marginLeft: "5%" }}>Gender</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <GenderButton>
            <img alt="" /> Male
          </GenderButton>
          <GenderButton>
            <img alt="" />
            Female
          </GenderButton>
        </div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 5%",
          }}
        >
          <p>I was born in</p>
          <p>{birthYear}</p>
        </div>
        <input
          style={{ width: "95%" }}
          name="foo"
          type="range"
          min="1920"
          max={`${new Date().getFullYear() - 7}`}
          defaultValue="2000"
          onChange={(e) => setBirthYear(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 5%",
          }}
        >
          <p>My Height</p>
          <p>{height}cm</p>
        </div>
        <input
          style={{ width: "95%" }}
          name="foo"
          type="range"
          min="100"
          max="250"
          defaultValue="150"
          onChange={(e) => setHeight(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 5%",
          }}
        >
          <p>My Weight</p>
          <p>{weight}kg</p>
        </div>
        <input
          style={{ width: "95%" }}
          name="foo"
          type="range"
          min="40"
          max="250"
          defaultValue="80"
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
    </>
  );
}

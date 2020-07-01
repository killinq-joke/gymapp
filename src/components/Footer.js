import React from "react";
import { Link } from "react-router-dom";

import { FooterLink } from "../styles/styled"

import dumbell from "../imgs/dumbell.png";
import dumbell1 from "../imgs/dumbell (1).png";
import diamond from "../imgs/diamond.png";
import diamond1 from "../imgs/diamond2.png";
import user from "../imgs/user.png";
import user1 from "../imgs/user (1).png";
import dish from "../imgs/dish.png";
import dish1 from "../imgs/dish (1).png";

export default function Footer() {
  return (
    <>
      <footer className="Bottom">
        <Link to="/workout">
          <FooterLink
            alt="card"
            src={window.location.pathname === "/workout" ? dumbell1 : dumbell}
          />
        </Link>
        <Link to="/nutrition">
          <FooterLink
            alt="card"
            src={window.location.pathname === "/nutrition" ? dish1 : dish}
          />
        </Link>
        <Link to="/premium">
          <FooterLink
            alt="card"
            src={window.location.pathname === "/premium" ? diamond1 : diamond}
          />
        </Link>
        <Link to="/account">
          <FooterLink
            alt="card"
            src={window.location.pathname === "/account" ? user1 : user}
          />
        </Link>
      </footer>
      ;
    </>
  );
}

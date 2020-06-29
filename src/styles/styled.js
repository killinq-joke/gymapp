import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 15vh;
`;

export const Card = styled.a({
  "text-align": "left",
  "border-radius": "15px",

  cursor: "pointer",
  height: "20%",
  width: "85%",
  "margin-bottom": "5%",
  color: "hsla(0, 0%, 100%, 0.87)",
  
});

export const Title = styled.h2`
  margin-left: 5%;
`;

export const Try = styled.button`
  border: 0;
  border-radius: 30px;
  padding: 6px 6%;
  font-weight: bolder;
  background-color: rgba(76, 217, 100);
  margin: 0 5% 10px 0;
  cursor: pointer;
`;

export const P = styled.p`
  font-size: 0.7rem;
`;
export const Ps = styled.div`
  margin-left: 5%;
`;

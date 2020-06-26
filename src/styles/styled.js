import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 15vh;
`;

export const Card = styled.div`
  border-radius: 15px;
  height: 20vh;
  width: 85%;
  margin-bottom: 5%;
  color: hsla(0, 0%, 100%, 0.87);
`;

export const Title = styled.h2`
  margin-left: 5%;
`;

export const Try = styled.button`
  border: 0;
  border-radius: 30px;
  padding: 5px 20px;
  font-weight: bolder;
  background-color: rgba(76, 217, 100);
  cursor: pointer;
`;
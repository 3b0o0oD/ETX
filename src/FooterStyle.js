// components/FooterStyles.js
import styled from "styled-components";

export const Box = styled.div`
  padding: 5px 5px;
  background: black;
  position: absolute;
  width: 100%;
  bottom: 10px;

  @media (max-width: 1000px) {
    padding: 50px 10px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column; /* Changed from row for better stacking */
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  transparent: 0.3s ease-in-out;  
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 10px 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: green;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
`;

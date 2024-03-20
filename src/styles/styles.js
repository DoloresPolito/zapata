import styled from "styled-components";

export const H1 = styled.h1`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 50px;
  font-weight: 400;
`;

export const H2 = styled.h2`
  font-family: "Roboto", sans-serif;
  color: #281a0f;
  font-size: 38px;
  font-weight: 400;
`;

export const H3 = styled.h3`
  font-family: "Roboto", sans-serif;
  color: #281a0f;
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;
`;

export const Text = styled.p``;

export const SectionLinks = styled.div`
  display: inline-flex;
  align-items: center;
  height: 20px;
  border-bottom: 0.8px solid black;

  h6 {
    font-family: "Roboto", sans-serif;
    color: #182e50;
    font-size: 12px;
  }

  img {
    height: 12px;
    width: 20px;
  }
`;

export const Section = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  height: 100%;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1600px;
`;

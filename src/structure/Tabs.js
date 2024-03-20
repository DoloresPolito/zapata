import React from "react";
import styled from "styled-components";
import Link from "next/link";
// import { useTranslation } from "next-i18next";

const Tabs = ({ mode }) => {
//   const { t: translate } = useTranslation("navbar");

  return (
    <>
      <TabsBox mode={mode}>
        <Link href="/procedures">
          {/* <p>{translate("cero")}</p> */}
          <p>procedimientos</p>
        </Link>
        <Link href="/about">
          {/* <p>{translate("one")}</p> */}
          <p>staff</p>
        </Link>
        <Link href="/contact">
          {/* <p>{translate("two")}</p> */}
          <p>espacio</p>
        </Link>
        <Link href="/space">
          {/* <p>{translate("three")}</p> */}
          <p>contacto</p>
        </Link>
      </TabsBox>
    </>
  );
};

const TabsBox = styled.div`
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  z-index: 5;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    a {
      height: 15px;
    }
  }
`;

export default Tabs;

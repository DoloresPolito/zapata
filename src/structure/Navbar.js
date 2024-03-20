import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Hamburger from "hamburger-react";
import Menu from "@/structure/Menu";
import Tabs from "@/structure/Tabs";

function Navbar() {
  const [width, setWidth] = useState(null);
  const { locale, locales, push } = useRouter();
  const { t: translate } = useTranslation("navbar");
  const handleClick = (l) => () => {
    push("/", undefined, { locale: l });
  };

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isOpen, setOpen] = useState(false);
  const medium = 1045;

  return (
    <>
      <NavbarSection>
        <NavbarContainer>
          <LogoContainer>
            <Link href="/">
              <h2>Federico Zapata</h2>
            </Link>
          </LogoContainer>

          {width >= medium ? (
            <>
            <LinkContainer>
              <Tabs mode="large" />
     
              </LinkContainer>
                       <LanguageContainer>
                       <div className="languages">
                  <button onClick={handleClick(locales[0])}>
                    {translate("spanish")}
      
                  </button>
                  <button onClick={handleClick(locales[1])}>
                    {translate("english")}
    
                  </button>
                </div>
              </LanguageContainer>
            </>
          ) : (
            <>
              <Hamburger toggled={isOpen} toggle={setOpen} />
              <Menu open={isOpen} setOpen={setOpen} />
            </>
          )}
        </NavbarContainer>
      </NavbarSection>
    </>
  );
}


const NavbarSection = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ece8e5;
  display: flex;
  justify-content: center;



  .hamburger-react {
    position: relative;
    z-index: 3;
    color: #182e50;
  }
`;

const NavbarContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;



  p {
    font-family: "Roboto", sans-serif;
    color: #182e50;
    padding-left: 40px;
  }
`;

const LinkContainer = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
`;

const LogoContainer = styled.div`
  width: 20%;
  height: 50px;
  display: flex;
  align-items: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-size: 20px;
  }
`;

const LanguageContainer = styled.div`
  width: 20%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    border: none;
    cursor: pointer;
  }
`;
export default Navbar;

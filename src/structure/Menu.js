import React from "react";
import styled from "styled-components";
import Tabs from "./Tabs";

const Menu = ({ open, setOpen }) => {



    return(<>
      <StyledMenu open={open} >
      <Tabs open={open} setOpen={setOpen} />
      </StyledMenu>
    </>)
}



export const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: flex-start;
background-color: #ece8e5;
text-align: left;
padding: 150px 100px 30px 30px;
position: fixed;
z-index: 1;
top: 0;
right: 0;
transition: transform 0.3s ease-in-out;
transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
height: 100vh;
`;

export default Menu;
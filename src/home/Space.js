import React from "react";
import styled from "styled-components";
import {Section, Container} from "../styles/styles"


function Space() {
    return(<>

    <SpaceSection>
        <SpaceContainer>
            
        </SpaceContainer>
    </SpaceSection>
    
    </>)
}


const SpaceSection = styled(Section)`
  height: 100vh;
  background-color: white;
`;

const SpaceContainer = styled(Container)`
`

export default Space;
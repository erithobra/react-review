import React from "react";
import styled from "styled-components";

const HomePaneDiv = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: solid black 3px;
`

function Home() {
 
    return (
        <HomePaneDiv>
            <div>
                Select a movie to get started
            </div>
        </HomePaneDiv>
    )
}

export default Home;
import React from "react";
import styled from "styled-components";

const ShowPaneDiv = styled.div`
    width: 74%;
    height: 100%;
    display: flex;
    flex-flow: column;
    border-left: solid black 3px;
    
`

const ContentDiv = styled.div`
    padding: 10px;
    display: flex;
    flex-flow: column;
`
const CoverImg = styled.img`
    width: 100%;
    object-fit: contain;
    margin: 0;
`

const CharDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
`
const Character = styled.div`
    padding: 8px;
    width: 30%;
`
const Title = styled.h1`
    font-size: 50px;
    padding: 15px;
    text-align: center;
`
const Par = styled.p`
    line-height: 2;
    
`
function ShowPane(props) {
    const index = props.movies.findIndex(movie => movie.episode_number === props.match.params.episode);
    const showMovie = props.movies[index];
    console.log(showMovie.hero_image)

    const imagePath = require(`../images/${showMovie.hero_image}`);


    return (
        <ShowPaneDiv>
            <CoverImg src={imagePath} alt="Movie Hero" />
            <ContentDiv>
                <Title>{showMovie.title}</Title>
                <div>
                    <h3>Characters</h3>
                    <CharDiv>
                            {showMovie.main_characters.map((character,index) => {
                                return(
                                <Character key={index}>
                                    {character}
                                </Character>
                                )
                            })}
                    </CharDiv>
                </div>
                <div>
                    <h3>Description</h3>
                    <Par>{showMovie.description}</Par>
                </div>
            </ContentDiv>
        </ShowPaneDiv>
    )
}

export default ShowPane;
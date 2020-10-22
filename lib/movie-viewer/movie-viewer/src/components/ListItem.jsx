import React from "react";
import styled from "styled-components";

const ListDiv = styled.div`
    height: 85px;
    display: flex;
    align-items: center;
    padding: 8px;
    text-decoration: none;
    &:hover {
        background: black;
        color: white;
    }
    &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const ListImg = styled.img`
    height: 75px;
    object-fit: contain;
    margin: 5px;
`
const ListTitle = styled.h3`
    
`

function ListItem(props) {
    const imagePath = require(`../images/${props.poster}`);
    
    return (
        <ListDiv>
            <ListImg src={imagePath} alt={props.title} />
            <ListTitle>{props.title}</ListTitle>
        </ListDiv>
    )
}

export default ListItem;
import React from "react";
import ListItem from "./ListItem";
import styled from "styled-components";
import {Link} from "react-router-dom";

const SideBarDiv = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
`

const LinkStyle = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

function SideBar(props) {
    return (
        <SideBarDiv>
            {props.movies.map((movie,index)=> {
                const route = `/${movie.episode_number}`
                return(
                    <LinkStyle to={route}>
                        <ListItem title={movie.title} poster={movie.poster} key={index}/>
                    </LinkStyle>
                ) 
            })}
        </SideBarDiv>
    )
}

export default SideBar;

import CustomNavbar from "../components/NavBar";
import Container from '@mui/material/Container';
import VideoGameList from "../containers/VideoGameList";
import VideoGameFormContainer from "../containers/VideoGameFormContainer";
import {UserLogin} from "../models/videogame";
import React from "react";


const Games: React.FC<UserLogin> = ({username, password} : UserLogin) : React.ReactElement => {

    return (
        <>
            <CustomNavbar username={username} password={password}/>
            <Container className="pt-5">
                <h4 className='my-3'><center>Current Game: </center></h4>
                <VideoGameFormContainer/>
                <VideoGameList/>
            </Container>

        </>
    );
}

export default Games;


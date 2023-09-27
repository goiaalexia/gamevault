import React from 'react';
import Container from '@mui/material/Container';
import {AppBar, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {UserLogin} from "../../models/videogame";
import {AccountCircle} from "@mui/icons-material";
import Grid from "@mui/material/Grid";

const CustomNavbar: React.FC<UserLogin> = ({username, password} : UserLogin) : React.ReactElement => {
    return (

        <AppBar position={"static"} style={{ background: '#2E3B55' }}>
            <Toolbar>
            <Container >
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        mr: 2,
                        display: {xs: 'none', md: 'flex'},
                        fontWeight: 700,
                        letterSpacing: '.1rem',
                        color: 'black',
                        textDecoration: 'none',
                    }}>VIDEO GAMES LIST</Typography>
                        <NavLink  style={({ isActive, isPending }) => {
                            return {
                                margin: "7px",
                                textDecoration: isActive ? "" : "none",
                                color: isActive ? "lightcoral" : "white",
                            };
                        }} to="/">Video Games</NavLink>
                        <NavLink style={({ isActive, isPending }) => {
                            return {
                                margin: "7px",
                                textDecoration: isActive ? "" : "none",
                                color: isActive ? "lightcoral" : "white",
                            };
                        }} to="/wishlist">Wishlist</NavLink>
                <Grid container justifyContent={"flex-end"}><AccountCircle/>user: {username}</Grid>
            </Container>
            </Toolbar>
        </AppBar>

    );
}

export default CustomNavbar;

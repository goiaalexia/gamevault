import React, {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {FrontLexStore, Game} from "../../models/store";
import {getGames} from "../../store/videogames/operations";
import Games from "../../pages/Games";
import {Button, Col, Form, Row, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {createGame, updateGame} from "../../store/videogames/actions";
import VideoGameForm from "../../components/VideoGameForm";
import {updateWishlistGame} from "../../store/wishlist/actions";

const VideoGameFormContainer: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch();
    const {
        gameState: {game},
        videoGames: {games},
        wishlistState: {wishlist}
    } = useSelector((state: FrontLexStore) => state);

    const handleUpdate = (g: Game) => {
        if (g.isWishlist) {
            dispatch(updateGame(g))
            dispatch(updateWishlistGame(g))
        } else dispatch(updateGame(g))
    }

    const handleCreate = (g: Game) => {
        dispatch(createGame(g))
    }

    return (
        <VideoGameForm
            gameID={game.gameID}
            platform={game.platform}
            gameName={game.gameName}
            sales={game.sales}
            releaseYear={game.releaseYear}
            company={game.company}
            rating={game.rating}
            imageLink={game.imageLink}
            description={game.description}
            isWishlist={game.isWishlist}
            createCallback={(game) => {
                handleCreate(game)
            }}
            updateCallback={(game) => {
                handleUpdate(game)
            }}
        />
    )
}

export default VideoGameFormContainer;

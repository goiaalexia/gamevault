import {Table} from "react-bootstrap";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FrontLexStore} from "../../models/store";
import VideoGameTableRow from "../../components/VideoGameTableRow";
import {Game} from "../../models/store";
import Grid from '@mui/material/Grid';
import {deleteGame, updateGame} from "../../store/videogames/actions";
import {setGame} from "../../store/videogameform/actions";
import VideoGameCard from "../../components/VideoGameCard";
import {addWishlistGame, deleteWishlistGame} from "../../store/wishlist/actions";
import {getGames} from "../../store/videogames/operations";

const VideoGameList: React.FC = (): React.ReactElement => {
    const {
        videoGames: {games},
        gameState: {game},
        wishlistState: {wishlist}
    } = useSelector((state: FrontLexStore) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        if (games.length === 0)
            // @ts-ignore
            dispatch(getGames())
    }, [])

    const handleDeleteGame = (id: number) => {
        dispatch(deleteGame(id));
        dispatch(deleteWishlistGame(id));
    }

    const handleWishlistUpdate = (g: Game) => {
        dispatch(updateGame(g))
        g.isWishlist ? dispatch(addWishlistGame(g)) : dispatch(deleteWishlistGame(g.gameID))
    }

    const handleOnClick = (g: Game) => {
        console.log(g.gameID)
        dispatch(setGame(g))
    }


    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {games.map(({
                            platform,
                            gameID,
                            gameName,
                            sales,
                            releaseYear,
                            company,
                            rating,
                            imageLink,
                            description,
                            isWishlist
                        }, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <VideoGameCard key={index}
                                   platform={platform}
                                   gameName={gameName}
                                   sales={sales}
                                   gameID={gameID}
                                   releaseYear={releaseYear}
                                   company={company}
                                   rating={rating}
                                   onClickCallback={({
                                                               gameID,
                                                               gameName,
                                                               sales,
                                                               releaseYear,
                                                               company,
                                                               rating,
                                                               platform,
                                                               description,
                                                               imageLink,
                                                               isWishlist
                                                           }) => handleOnClick({
                                       gameID: gameID,
                                       gameName: gameName,
                                       sales,
                                       releaseYear,
                                       company,
                                       rating,
                                       platform,
                                       imageLink,
                                       description,
                                       isWishlist
                                   })}
                                   deleteGameCallback={(gameID) => handleDeleteGame(gameID)}
                                   wishlistCallback={({
                                                          gameID,
                                                          gameName,
                                                          sales,
                                                          releaseYear,
                                                          company,
                                                          rating,
                                                          platform,
                                                          description,
                                                          imageLink, isWishlist
                                                      }) => handleWishlistUpdate({
                                       gameID,
                                       gameName,
                                       sales,
                                       releaseYear,
                                       company,
                                       rating,
                                       platform,
                                       description,
                                       imageLink, isWishlist
                                   })}
                                   imageLink={imageLink}
                                   description={description}
                                   isWishlist={isWishlist}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default VideoGameList;
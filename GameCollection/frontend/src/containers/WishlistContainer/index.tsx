import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FrontLexStore, Game} from "../../models/store";
import Grid from '@mui/material/Grid';
import VideoGameCard from "../../components/VideoGameCard";
import {addWishlistGame, deleteWishlistGame} from "../../store/wishlist/actions";
import {updateGame} from "../../store/videogames/actions";

const WishlistContainer: React.FC = (): React.ReactElement => {
    const {
        videoGames: {games},
        gameState: {game},
        wishlistState: {wishlist}
    } = useSelector((state: FrontLexStore) => state);

    const dispatch = useDispatch();

    const handleDeleteGame = (id: number) => {
        alert("Cannot delete game in wishlist menu!")
    }

    const handleWishlist = (g: Game) => {
        if(g.isWishlist)
            dispatch(addWishlistGame(g));
        else{
            dispatch(deleteWishlistGame(g.gameID));
            dispatch(updateGame(g))
        }
    }

    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {wishlist.map(({
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
                                   onClickCallback={() => null}
                                   deleteGameCallback={(gameID) => handleDeleteGame(gameID)}
                                   wishlistCallback={({
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
                                                      }) => handleWishlist({
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

export default WishlistContainer;
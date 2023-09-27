import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {VideoGameCardProps} from "../../models/videogame";
import {Rating} from "@mui/material";

const VideoGameCard: React.FC<VideoGameCardProps> = ({
                                                         gameID,
                                                         gameName,
                                                         releaseYear,
                                                         company,
                                                         rating,
                                                         sales,
                                                         platform,
                                                         onClickCallback,
                                                         wishlistCallback,
                                                         deleteGameCallback,
                                                         imageLink,
                                                         description,
                                                         isWishlist
                                                     }: VideoGameCardProps): React.ReactElement => {


    let randomColor = require('randomcolor');

    const handleDeleteGameCallback = () => {
        gameID && deleteGameCallback(gameID);
    }

    const handleWishlistCallback = () => {
        isWishlist = !isWishlist;

        wishlistCallback({
            gameID,
            gameName,
            releaseYear,
            company,
            rating,
            sales,
            platform,
            imageLink,
            description,
            isWishlist
        })
    }
    const handleClickCallback = (e: any) => {
        e.preventDefault()
        onClickCallback({
            gameID: gameID,
            gameName: gameName,
            releaseYear,
            company,
            rating,
            sales,
            platform,
            imageLink,
            description,
            isWishlist
        })
    }

    return (
        <Card sx={{maxWidth: 345}} onClick={handleClickCallback}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: randomColor({seed: gameName})}} aria-label="game">
                        {gameName.charAt(0)}
                    </Avatar>
                }
                title={gameName}
                style={{whiteSpace: 'pre-line'}}
                subheader={"released: " + releaseYear + `\ncompany: ` + company + `\n`}
            />
            <Rating name="read-only" value={rating} style={{margin:'0 0 0 20px'}} readOnly/>
            <CardMedia
                component="img"
                height="194"
                image={imageLink}
                alt={gameName}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleWishlistCallback}>
                    <FavoriteIcon style={isWishlist ? {fill: "red"} : {fill: "grey"}}/>
                </IconButton>
                <IconButton aria-label="delete" onClick={handleDeleteGameCallback}>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default VideoGameCard;
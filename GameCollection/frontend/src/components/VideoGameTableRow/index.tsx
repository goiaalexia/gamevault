import React, {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import {GameTableRowProps} from "../../models/videogame";


const VideoGameTableRow: React.FC<GameTableRowProps> = ({
                                                            gameID,
                                                            gameName,
                                                            releaseYear,
                                                            company,
                                                            rating,
                                                            sales,
                                                            platform,
                                                            onClickCallback,
                                                            deleteGameCallback,
                                                            isFiltered,
                                                            noDelete,
                                                            imageLink, description,
                                                            isWishlist
                                                        }: GameTableRowProps): React.ReactElement => {


    const handleDeleteGameCallback = () => {
        gameID && deleteGameCallback(gameID);
    }
    const handleClick = (e: any) => {
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
        <tr key={gameID} onClick={handleClick}>
            {isFiltered ? <td>{releaseYear}</td> : null}
            <td>{gameName}</td>
            <td>{releaseYear}</td>
            <td>{company}</td>
            <td>{rating}</td>
            <td>{sales}</td>
            <td>{platform}</td>
            {!noDelete ?
                <td><Button className="p-2 my-2 w-100 btn-danger"
                            onClick={() => handleDeleteGameCallback()}>Delete</Button></td> : null}
        </tr>
    );
}

export default VideoGameTableRow;

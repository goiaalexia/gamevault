import {ADD_GAME_WISHLIST, UPDATE_GAME_WISHLIST, DELETE_GAME_WISHLIST} from "./types";
import {Game} from "../../models/store";

const addWishlistGame = (data: Game) => {
    return {
        type: ADD_GAME_WISHLIST,
        payload: data
    };
};

const deleteWishlistGame = (data: number|null) => {
    return {
        type: DELETE_GAME_WISHLIST,
        payload: data
    };
};

const updateWishlistGame = (data: Game) => {
    return {
        type: UPDATE_GAME_WISHLIST,
        payload: data

    };
};


export {addWishlistGame, deleteWishlistGame, updateWishlistGame};
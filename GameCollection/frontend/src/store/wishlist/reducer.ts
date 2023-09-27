import {ADD_GAME_WISHLIST, UPDATE_GAME_WISHLIST, DELETE_GAME_WISHLIST} from "./types";
import {Game, VideoGamesState, WishListState} from "../../models/store";


const initialState = {
    wishlist: [],
    num: 0
};

const wishlistReducer = (state: WishListState = initialState, action: any): WishListState => {
        const {type, payload} = action;
        console.log("WISHLIST", action)

        switch (type) {
            case ADD_GAME_WISHLIST:
                state.num += 1;
                return {
                    ...state,
                    wishlist: [...state.wishlist, action.payload],
                }
            case DELETE_GAME_WISHLIST:
                state.num -= 1;
                return {
                    ...state,
                    wishlist: [...state.wishlist.filter(game => game.gameID !== action.payload)]
                };

            case UPDATE_GAME_WISHLIST:
                return {
                    ...state,
                    wishlist: [
                        ...state.wishlist.map(game => {
                                if (game.gameID === action.payload.gameID) {
                                    game.gameName = action.payload.gameName;
                                    game.rating = action.payload.rating
                                    game.company = action.payload.company
                                    game.sales = action.payload.sales
                                    game.releaseYear = action.payload.releaseYear
                                    game.platform = action.payload.platform
                                    game.imageLink = action.payload.imageLink
                                    game.description = action.payload.description
                                }
                                return game;
                            }
                        )]
                };

            default:
                return state;
        }
    }
;

export default wishlistReducer;
import {CREATE_GAME, DELETE_GAME, UPDATE_GAME} from "./types";
import {Game, VideoGamesState} from "../../models/store";
import {SET_GAMES} from "./types";


const initialState = {
    games: [],
    num: 0
};

const gameReducer = (state: VideoGamesState = initialState, action: any): VideoGamesState => {
        const {type, payload} = action;
        console.log("VIDEOGAMES", action)

        switch (type) {
            case SET_GAMES:
                console.log(state)
                return {
                    games: payload.data as Game[],
                    num: state.games.length
                };
            case CREATE_GAME:
                state.num += 1;
                action.payload.gameID = Math.floor(Math.random() * 1000);

                return {
                    ...state,
                    games: [...state.games, action.payload],
                }
            case DELETE_GAME:
                state.num -= 1;
                return {
                    ...state,
                    games: [...state.games.filter(game => game.gameID !== action.payload)]
                };

            case UPDATE_GAME:
                return {
                    ...state,
                    games: [
                        ...state.games.map(game => {
                                if (game.gameID === action.payload.gameID) {
                                    game.gameName = action.payload.gameName;
                                    game.rating = action.payload.rating
                                    game.company = action.payload.company
                                    game.sales = action.payload.sales
                                    game.releaseYear = action.payload.releaseYear
                                    game.platform = action.payload.platform
                                    game.imageLink = action.payload.imageLink
                                    game.description = action.payload.description
                                    game.isWishlist = action.payload.isWishlist

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

export default gameReducer;
import {SET_GAME, CLEAR_GAME} from "./types";
import {Game} from "../../models/store";

export interface VideoGameFormActions {
    type: string,
    payload: {
        data: Game
    }
}
const setGame = (data: Game) : VideoGameFormActions => {
    return {
        type: SET_GAME,
        payload: {data}
    };
};

const clearGame = (data: Game) : VideoGameFormActions => {
    return {
        type: CLEAR_GAME,
        payload: {data}
    };
};

export {setGame, clearGame};
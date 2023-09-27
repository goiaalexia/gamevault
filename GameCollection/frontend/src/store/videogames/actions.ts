import {CREATE_GAME, UPDATE_GAME, DELETE_GAME, SET_GAMES} from "./types";
import {Game} from "../../models/store";

export interface SetVideoGamesActions {
    type: string,
    payload: {
        data: Game[]
    }
}
const setGames = (data: Game[]) : SetVideoGamesActions => {
    return {
        type: SET_GAMES,
        payload: {data}
    };
};
const createGame = (data: Game) => {
    return {
        type: CREATE_GAME,
        payload: data
    };
};

const deleteGame = (data: number) => {
    return {
        type: DELETE_GAME,
        payload: data

    };
};

const updateGame = (data: Game) => {
    return {
        type: UPDATE_GAME,
        payload: data
    };
};


export {createGame, deleteGame, updateGame, setGames};
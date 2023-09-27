import {Dispatch} from "redux";
import {setGames, SetVideoGamesActions} from "./actions";
import {getVideoGamesAPI} from "../../client/VideoGame/index";

export const getGames = () =>
    async (dispatch: Dispatch<SetVideoGamesActions>) => {
        try {
            const videoGameResponse = await getVideoGamesAPI();
            dispatch(setGames(videoGameResponse));


        } catch (e) {
            console.log(e)
        }
    }


export default {getGames};

import {Game} from "../../models/store";

export const getVideoGamesAPI = async (): Promise<any> => {
    try {
        // call to backend
        const dummyResponse = [{
            gameID: 1,
            gameName: 'Dota2',
            releaseYear: 2000,
            company: 'Marvel',
            rating: 3,
            sales: 3,
            platform: 'PC',
            imageLink: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg",
            description: "placeholder description for Dota2",
            isWishlist: false

        }, {
            gameID: 2,
            gameName: 'LoL',
            releaseYear: 2000,
            company: 'Marvel',
            rating: 3,
            sales: 3,
            platform: 'PC',
            imageLink: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt5c7e20ba1bcc0a56/5f4df068b4ebcc25c4c57a4b/FunCompetition_Poster.jpg",
            description: "placeholder description for LoL",
            isWishlist: false
        }, {
            gameID: 3,
            gameName: 'Fifa',
            releaseYear: 2000,
            company: 'Marvel',
            rating: 3,
            sales: 3,
            platform: 'PC',
            imageLink: "https://cdn.akamai.steamstatic.com/steam/apps/1506830/capsule_616x353.jpg?t=1678115961",
            description: "placeholder description for Fifa",
            isWishlist: false

        }] as Game[]

        return Promise.resolve(dummyResponse);
    } catch (e) {
        console.log(e)
    }
}
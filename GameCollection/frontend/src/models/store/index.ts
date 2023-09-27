export interface VideoGamesState {
    games: Game[]
    num: number

}

export interface WishListState {
    wishlist: Game[]
    num: number
}

export interface VideoGameState {
    game: Game

}

export interface Game {
    gameID: number | null,
    gameName: string,
    releaseYear: number | null,
    company: string,
    rating: number | null,
    sales: number | null,
    platform: string,
    imageLink: string,
    description: string
    isWishlist: boolean
}

export interface FrontLexStore {
    videoGames: VideoGamesState
    gameState: VideoGameState
    wishlistState: WishListState
}


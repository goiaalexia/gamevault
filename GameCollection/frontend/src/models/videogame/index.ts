import {IconButtonProps} from "@mui/material/IconButton"

export interface ErrorMessages {
    name?: string,
    message?: string
}

export interface UserLogin {
    username?: string,
    password?: string
}

interface Game {
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

export interface GameTableRowProps extends Game {
    onClickCallback: (placeholder: Game) => void,
    deleteGameCallback: (id: number) => void,
    isFiltered?: boolean,
    noDelete?: boolean
}

export interface GameFormProps extends Game {
    updateCallback: (game: Game) => void

    createCallback: (game: Game) => void
}

export interface LoginProps {
    setUserLoginCallback : (data: UserLogin) => void
}

export interface VideoGameCardProps extends IconButtonProps, GameTableRowProps {
    wishlistCallback: (game: Game) => void
}


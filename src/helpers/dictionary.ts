export enum Category {
    MOVIE = 'movies',
    SERIES = 'series',
    GAME = 'games',
    BOOK = 'books',
    PODCAST = 'podcast',
    VARIETY = 'variety',
}

export enum ReviewValue {
    BIEN_PLUS = 'BIEN_PLUS',
    BIEN = 'BIEN',
    NORMAL = 'NORMAL',
    MAL = 'MAL',
    MAL_PLUS = 'MAL_PLUS',
}

export interface RawEntry {
    id: string
    title: string
    version?: string
    season?: number
    review?: number
    date?: string
    moreInfoURL: string
    isRewatch?: boolean
}

export interface Entry {
    id: string
    category: Category
    title: string
    version: string | undefined
    season: string | undefined
    review: ReviewValue | undefined
    date: Date
    posterURL: string
    moreInfoURL: string
    isRewatch: boolean
}

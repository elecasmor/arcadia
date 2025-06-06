export enum Category {
    MOVIE = 'MOVIE',
    GAME = 'GAME',
    BOOK = 'BOOK',
}

export interface RawEntry {
    id: string
    title: string
    date: string
}

export interface Entry {
    id: string
    category: Category
    title: string
    date: Date
}

import { Category } from '@arcadia/dictionary'

export function getCategoryLabel(category: Category, isPlural = false) {
    switch (category) {
        case Category.ANIME:
            return 'Anime'
        case Category.MOVIES:
            return isPlural ? 'Pelis' : 'Peli'
        case Category.SERIES:
            return isPlural ? 'Series' : 'Serie'
        case Category.GAMES:
            return isPlural ? 'Juegos' : 'Juego'
        case Category.BOOKS:
            return isPlural ? 'Libros' : 'Libro'
        case Category.PODCASTS:
            return isPlural ? 'Podcasts' : 'Podcast'
        case Category.VARIETY:
            return isPlural ? 'Otros' : 'Otro'
        default:
            return 'TBD'
    }
}

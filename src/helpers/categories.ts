import { Category } from '@arcadia/dictionary'

export function getCategoryLabel(category: Category, isPlural = false) {
    switch (category) {
        case Category.MOVIE:
            return isPlural ? 'Pelis' : 'Peli'
        case Category.SERIES:
            return isPlural ? 'Series' : 'Serie'
        case Category.GAME:
            return isPlural ? 'Juegos' : 'Juego'
        case Category.BOOK:
            return isPlural ? 'Libros' : 'Libro'
        default:
            return 'TBD'
    }
}

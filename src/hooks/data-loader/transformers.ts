import { orderBy } from 'lodash'

import { Category, Entry, RawEntry, ReviewValue } from '@arcadia/dictionary'

function slugify(text: string) {
    return text
        .toLowerCase() // Convierte a minúsculas primero
        .normalize('NFD') // Separa los caracteres con tildes
        .replace(/[\u0300-\u036f]/g, '') // Elimina signos diacríticos
        .replace(/ñ/g, 'n') // Sustituye ñ por n
        .replace(/[^a-z0-9\s-]/g, '') // Elimina caracteres no alfanuméricos (excepto espacio y guion)
        .replace(/[\s/]+/g, '-') // Sustituye espacios y / por guiones
        .replace(/-+/g, '-') // Elimina múltiples guiones seguidos
        .replace(/^-+|-+$/g, '') // Elimina guiones al principio o al final
}

function initDate(date: RawEntry['date'], year: string) {
    const [day, month] = date.split('-')
    return new Date(`${year}-${month}-${day}T01:00:00`)
}

function initPoster(
    title: RawEntry['title'],
    version: RawEntry['version'],
    category: Entry['category']
) {
    const toSlugify = undefined !== version ? `${title} ${version}` : title

    return `${import.meta.env.BASE_URL}posters/${category}/${slugify(toSlugify)}.jpg`
}

function initReviewValue(review: RawEntry['review'] | undefined) {
    if (undefined === review) return undefined

    if (5 === review) {
        return ReviewValue.BIEN_PLUS
    }

    if (review >= 3.5) {
        return ReviewValue.BIEN
    }

    if (review >= 2.5) {
        return ReviewValue.NORMAL
    }

    if (review >= 1.5) {
        return ReviewValue.MAL
    }

    return ReviewValue.MAL_PLUS
}

export function initRawData(
    raw: RawEntry[],
    year: string,
    category: Category
): Entry[] {
    return raw
        .filter((entry) => undefined !== entry.date)
        .map((entry) => ({
            id: entry.id,
            category,
            title: entry.title,
            version: entry.version,
            season: entry.season ? `T${entry.season}` : undefined,
            review: initReviewValue(entry.review),
            date: initDate(entry.date, year),
            posterURL: initPoster(entry.title, entry.version, category),
            moreInfoURL: entry.moreInfoURL,
            isRewatch: entry.isRewatch ?? false,
        }))
}

export function sortEntries(entries: Entry[]) {
    return orderBy(entries, ['date', 'id'], ['desc', 'desc'])
}

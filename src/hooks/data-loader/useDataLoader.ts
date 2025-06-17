import { useEffect, useState } from 'react'

import { Category, Entry, RawEntry } from '@arcadia/dictionary'

import { initRawData, sortEntries } from './transformers'

export default function useDataLoader(year: string) {
    const [data, setData] = useState<Entry[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const [countByCategory, setCountByCategory] = useState<
        Record<Category, number>
    >({
        [Category.MOVIE]: 0,
        [Category.SERIES]: 0,
        [Category.GAME]: 0,
        [Category.BOOK]: 0,
        [Category.PODCAST]: 0,
        [Category.VARIETY]: 0,
    })

    useEffect(() => {
        setIsLoading(true)

        Promise.all([
            fetch(`${import.meta.env.BASE_URL}data/${year}/movies.json`).then(
                (res) => {
                    if (!res.ok) throw new Error('Failed to load movies')
                    return res.json() as unknown as RawEntry[]
                }
            ),
            fetch(`${import.meta.env.BASE_URL}data/${year}/series.json`).then(
                (res) => {
                    if (!res.ok) throw new Error('Failed to load series')
                    return res.json() as unknown as RawEntry[]
                }
            ),
            fetch(`${import.meta.env.BASE_URL}data/${year}/games.json`).then(
                (res) => {
                    if (!res.ok) throw new Error('Failed to load games')
                    return res.json() as unknown as RawEntry[]
                }
            ),
            fetch(`${import.meta.env.BASE_URL}data/${year}/books.json`).then(
                (res) => {
                    if (!res.ok) throw new Error('Failed to load books')
                    return res.json() as unknown as RawEntry[]
                }
            ),
            fetch(`${import.meta.env.BASE_URL}data/${year}/podcasts.json`).then(
                (res) => {
                    if (!res.ok) throw new Error('Failed to load podcasts')
                    return res.json() as unknown as RawEntry[]
                }
            ),
            fetch(`${import.meta.env.BASE_URL}data/${year}/variety.json`).then(
                (res) => {
                    if (!res.ok) throw new Error('Failed to load variety')
                    return res.json() as unknown as RawEntry[]
                }
            ),
        ])
            .then(([_movies, _series, _games, _books, _podcasts, _variety]) => {
                const movies = initRawData(_movies, year, Category.MOVIE)
                const series = initRawData(_series, year, Category.SERIES)
                const games = initRawData(_games, year, Category.GAME)
                const books = initRawData(_books, year, Category.BOOK)
                const podcasts = initRawData(_podcasts, year, Category.PODCAST)
                const variety = initRawData(_variety, year, Category.VARIETY)

                const all = [
                    ...movies,
                    ...series,
                    ...games,
                    ...books,
                    ...podcasts,
                    ...variety,
                ]
                const ordered = sortEntries(all)

                setData(ordered)
                setCountByCategory({
                    [Category.MOVIE]: movies.length,
                    [Category.SERIES]: series.length,
                    [Category.GAME]: games.length,
                    [Category.BOOK]: books.length,
                    [Category.PODCAST]: podcasts.length,
                    [Category.VARIETY]: variety.length,
                })
            })
            .catch(setError)
            .finally(() => setIsLoading(false))
    }, [year])

    return { data, isLoading, error, countByCategory }
}

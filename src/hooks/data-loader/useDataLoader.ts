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
        [Category.ANIME]: 0,
        [Category.MOVIES]: 0,
        [Category.SERIES]: 0,
        [Category.GAMES]: 0,
        [Category.BOOKS]: 0,
        [Category.PODCASTS]: 0,
        [Category.VARIETY]: 0,
    })

    useEffect(() => {
        setIsLoading(true)

        Promise.all([
            fetch(
                `${import.meta.env.BASE_URL}data/${year}/${Category.ANIME}.json`
            ).then((res) => {
                if (!res.ok)
                    throw new Error(`Failed to load: ${Category.ANIME}.json`)
                return res.json() as unknown as RawEntry[]
            }),
            fetch(
                `${import.meta.env.BASE_URL}data/${year}/${Category.MOVIES}.json`
            ).then((res) => {
                if (!res.ok)
                    throw new Error(`Failed to load: ${Category.MOVIES}.json`)
                return res.json() as unknown as RawEntry[]
            }),
            fetch(
                `${import.meta.env.BASE_URL}data/${year}/${Category.SERIES}.json`
            ).then((res) => {
                if (!res.ok)
                    throw new Error(`Failed to load: ${Category.SERIES}.json`)
                return res.json() as unknown as RawEntry[]
            }),
            fetch(
                `${import.meta.env.BASE_URL}data/${year}/${Category.GAMES}.json`
            ).then((res) => {
                if (!res.ok)
                    throw new Error(`Failed to load: ${Category.GAMES}.json`)
                return res.json() as unknown as RawEntry[]
            }),
            fetch(
                `${import.meta.env.BASE_URL}data/${year}/${Category.BOOKS}.json`
            ).then((res) => {
                if (!res.ok)
                    throw new Error(`Failed to load: ${Category.BOOKS}.json`)
                return res.json() as unknown as RawEntry[]
            }),
            fetch(
                `${import.meta.env.BASE_URL}data/${year}/${Category.PODCASTS}.json`
            ).then((res) => {
                if (!res.ok)
                    throw new Error(`Failed to load: ${Category.PODCASTS}.json`)
                return res.json() as unknown as RawEntry[]
            }),
            fetch(
                `${import.meta.env.BASE_URL}data/${year}/${Category.VARIETY}.json`
            ).then((res) => {
                if (!res.ok)
                    throw new Error(`Failed to load: ${Category.VARIETY}.json`)
                return res.json() as unknown as RawEntry[]
            }),
        ])
            .then(
                ([
                    _anime,
                    _movies,
                    _series,
                    _games,
                    _books,
                    _podcasts,
                    _variety,
                ]) => {
                    const anime = initRawData(_anime, year, Category.ANIME)
                    const movies = initRawData(_movies, year, Category.MOVIES)
                    const series = initRawData(_series, year, Category.SERIES)
                    const games = initRawData(_games, year, Category.GAMES)
                    const books = initRawData(_books, year, Category.BOOKS)
                    const podcasts = initRawData(
                        _podcasts,
                        year,
                        Category.PODCASTS
                    )
                    const variety = initRawData(
                        _variety,
                        year,
                        Category.VARIETY
                    )

                    const all = [
                        ...anime,
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
                        [Category.ANIME]: anime.length,
                        [Category.MOVIES]: movies.length,
                        [Category.SERIES]: series.length,
                        [Category.GAMES]: games.length,
                        [Category.BOOKS]: books.length,
                        [Category.PODCASTS]: podcasts.length,
                        [Category.VARIETY]: variety.length,
                    })
                }
            )
            .catch(setError)
            .finally(() => setIsLoading(false))
    }, [year])

    return { data, isLoading, error, countByCategory }
}

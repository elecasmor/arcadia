import { useEffect, useState } from 'react'
import { orderBy } from 'lodash'

import { Category, Entry, RawEntry } from '@arcadia/dictionary'

export default function useDataLoader(year: string) {
    const [data, setData] = useState<Entry[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        setIsLoading(true)

        Promise.all([
            fetch(`/data/${year}/games.json`).then((res) => {
                if (!res.ok) throw new Error('Failed to load games')
                return res.json() as unknown as RawEntry[]
            }),
            fetch(`/data/${year}/movies.json`).then((res) => {
                if (!res.ok) throw new Error('Failed to load movies')
                return res.json() as unknown as RawEntry[]
            }),
        ])
            .then(([_games, _movies]) => {
                const games = initRawData(_games, year, Category.GAME)
                const movies = initRawData(_movies, year, Category.MOVIE)

                const all = [...games, ...movies]
                const ordered = orderBy(all, ['date'], ['desc'])

                setData(ordered)
            })
            .catch(setError)
            .finally(() => setIsLoading(false))
    }, [year])

    return { data, isLoading, error }
}

function initRawData(
    raw: RawEntry[],
    year: string,
    category: Category
): Entry[] {
    return raw.map((entry) => ({
        id: entry.id,
        category,
        title: entry.title,
        date: initDate(entry.date, year),
    }))
}

function initDate(date: string, year: string) {
    const [day, month] = date.split('-')
    return new Date(`${year}-${month}-${day}T01:00:00`)
}

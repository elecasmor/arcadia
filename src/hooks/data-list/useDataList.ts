import { useEffect, useState } from 'react'
import { isEmpty } from 'lodash'

import { Category, Entry } from '@arcadia/dictionary'

export function useDataList(source: Entry[]) {
    const [filtered, setFiltered] = useState(source)
    const [filterBy, setFilterBy] = useState<Category[]>([])

    useEffect(() => {
        if (isEmpty(filterBy)) {
            setFiltered(source)
            return
        }

        setFiltered(source.filter((entry) => filterBy.includes(entry.category)))
    }, [filterBy])

    return {
        filtered,
        filterBy: {
            state: filterBy,
            setFilterBy,
        },
    }
}

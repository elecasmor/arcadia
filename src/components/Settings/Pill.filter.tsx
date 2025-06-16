import { Dispatch, SetStateAction } from 'react'
import clsx from 'clsx'
import { isEmpty } from 'lodash'

import { Category } from '@arcadia/dictionary'

import { getCategoryLabel } from '../../helpers/categories'

export function PillFilter(props: Props) {
    const isAll = 'ALL' === props.category

    const isActive =
        (isAll && isEmpty(props.filterBy)) ||
        props.filterBy.includes(props.category as Category)

    const label = isAll
        ? 'Todo'
        : getCategoryLabel(props.category as Category, true)

    return (
        <button
            type="button"
            className={clsx(
                'cursor-pointer transition shadow-lg hover:shadow-primary/50 rounded-full uppercase text-xs font-bold text-primary-contrast px-2 py-1',
                isActive && 'bg-primary shadow-primary/25',
                !isActive && 'bg-white shadow-transparent'
            )}
            onClick={() => {
                if (isAll) {
                    props.onSetFilterBy([])
                    return
                }

                if (isActive) {
                    props.onSetFilterBy((prev) =>
                        prev.filter((_category) => _category !== props.category)
                    )
                    return
                }

                const numberOfCategories = Object.values(Category).length

                if (numberOfCategories === props.filterBy.length + 1) {
                    props.onSetFilterBy([])
                    return
                }

                props.onSetFilterBy((prev) => [
                    ...prev,
                    props.category as Category,
                ])
            }}
        >
            {`${label}.- ${props.count}`}
        </button>
    )
}

interface Props {
    category: Category | 'ALL'
    count: number
    filterBy: Category[]
    onSetFilterBy: Dispatch<SetStateAction<Category[]>>
}

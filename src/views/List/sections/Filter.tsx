import { Dispatch, SetStateAction } from 'react'
import { MultiSelect } from 'primereact/multiselect'

import { PillFilter } from '@arcadia/components/Settings/Pill.filter'
import { Category, Entry as EntryType } from '@arcadia/dictionary'

import { getCategoryLabel } from '../../../helpers/categories'

export function Filter({
    data,
    filterBy,
    onSetFilterBy,
    countByCategory,
}: Props) {
    return (
        <section>
            <div className="md:hidden">
                <MultiSelect
                    options={Object.values(Category).map((category) => ({
                        value: category,
                        label: getCategoryLabel(category, true),
                    }))}
                    value={filterBy}
                    onChange={(event) => onSetFilterBy(event.value)}
                    className="w-full"
                />
            </div>
            <div className="hidden md:flex items-center justify-center gap-sm">
                <PillFilter
                    category="ALL"
                    count={data.length}
                    filterBy={filterBy}
                    onSetFilterBy={onSetFilterBy}
                />
                {Object.values(Category).map((category) => (
                    <PillFilter
                        key={`filterBy__${category}`}
                        category={category}
                        count={countByCategory[category]}
                        filterBy={filterBy}
                        onSetFilterBy={onSetFilterBy}
                    />
                ))}
            </div>
        </section>
    )
}

interface Props {
    data: EntryType[]
    countByCategory: Record<Category, number>
    filterBy: Category[]
    onSetFilterBy: Dispatch<SetStateAction<Category[]>>
}

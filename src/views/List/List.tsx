import { Entry } from '@arcadia/components/Entry/Entry'
import { Category, Entry as EntryType } from '@arcadia/dictionary'
import { useDataList } from '@arcadia/hooks/data-list/useDataList'
import { Filter } from '@arcadia/views/List/sections/Filter'

export function List({ data, countByCategory }: Props) {
    const { filtered, filterBy } = useDataList(data)

    return (
        <main className="flex flex-col gap-md">
            <Filter
                data={data}
                countByCategory={countByCategory}
                filterBy={filterBy.state}
                onSetFilterBy={filterBy.setFilterBy}
            />
            <section className="grid grid-flow-row grid-cols-[repeat(2,_150px)] md:grid-cols-[repeat(3,_200px)] lg:grid-cols-[repeat(4,_200px)] gap-sm mx-auto">
                {filtered.map((entry) => (
                    <Entry key={entry.id} {...entry} />
                ))}
            </section>
        </main>
    )
}

interface Props {
    data: EntryType[]
    countByCategory: Record<Category, number>
}

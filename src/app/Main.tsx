import { Message } from 'primereact/message'
import { ProgressSpinner } from 'primereact/progressspinner'

import useDataLoader from '@arcadia/hooks/data-loader/useDataLoader'
import { Footer } from '@arcadia/layout/Footer'
import { Header } from '@arcadia/layout/Header'
import { List } from '@arcadia/views/List/List'

export default function Main() {
    const {
        data: entries,
        isLoading,
        error,
        countByCategory,
    } = useDataLoader('2025')

    if (isLoading) {
        return <ProgressSpinner />
    }

    if (error) {
        return <Message severity="error" text={`Error: ${error.message}`} />
    }

    return (
        <div className="w-[85%] lg:w-[65%] flex flex-col mx-auto">
            <div className="flex flex-col flex-1">
                <Header />
                <List entries={entries} countByCategory={countByCategory} />
                <Footer />
            </div>
        </div>
    )
}

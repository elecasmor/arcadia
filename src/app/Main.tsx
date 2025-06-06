import { Card } from 'primereact/card'
import { Message } from 'primereact/message'
import { ProgressSpinner } from 'primereact/progressspinner'

import useDataLoader from '@arcadia/hooks/useDataLoader'

export default function Main() {
    const { data, isLoading, error } = useDataLoader('2025')

    if (isLoading) {
        return <ProgressSpinner />
    }

    if (error) {
        return <Message severity="error" text={`Error: ${error.message}`} />
    }

    return (
        <div>
            {data.map((entry) => (
                <Card title={entry.category} key={entry.id}>
                    <p className="m-0">{entry.title}</p>
                </Card>
            ))}
        </div>
    )
}

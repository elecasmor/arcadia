import { render } from 'preact'

import useDataLoader from '@arcadia/hooks/useDataLoader'

import './style.css'

export function App() {
    const { data, isLoading, error } = useDataLoader('2025')

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: ${error.message}</div>
    }

    return (
        <div>
            {data.map((entry) => (
                <div key={entry.id}>{entry.title}</div>
            ))}
        </div>
    )
}

render(<App />, document.getElementById('app'))

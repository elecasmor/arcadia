import { render } from 'preact'

import Main from './app/Main'
import Providers from './providers'

import './style.css'
import 'primereact/resources/themes/lara-dark-pink/theme.css'
import 'primereact/resources/primereact.min.css'

export function App() {
    return (
        <Providers>
            <Main />
        </Providers>
    )
}

render(<App />, document.getElementById('app'))

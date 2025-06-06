import { render } from 'preact'

import Main from './app/Main'
import Providers from './providers'

import './style.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css

export function App() {
    return (
        <Providers>
            <Main />
        </Providers>
    )
}

render(<App />, document.getElementById('app'))

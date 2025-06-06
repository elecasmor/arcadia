import React from 'react'
import { PrimeReactProvider } from 'primereact/api'

export default function Providers({ children }: Readonly<Props>) {
    return <PrimeReactProvider>{children}</PrimeReactProvider>
}

interface Props {
    children: React.ReactNode
}

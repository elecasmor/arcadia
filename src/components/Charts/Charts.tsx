import { useState } from 'react'

import { Modal } from '@arcadia/components/Charts/_Modal'
import { Entry } from '@arcadia/dictionary'

import { Button } from './_Button'

export function Charts(props: Props) {
    const [showCharts, setShowCharts] = useState(false)

    return (
        <>
            <Modal
                visible={showCharts}
                setVisible={setShowCharts}
                entries={props.entries}
            />
            <Button onClick={() => setShowCharts((prev) => !prev)} />
        </>
    )
}

interface Props {
    entries: Entry[]
}

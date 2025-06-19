import { Dispatch, SetStateAction } from 'react'
import { Chart } from 'primereact/chart'
import { Dialog } from 'primereact/dialog'

import { useCharts } from '@arcadia/components/Charts/useCharts'
import { Entry } from '@arcadia/dictionary'

export function Modal(props: Props) {
    const chart = useCharts(props.entries)

    return (
        <Dialog
            maximizable
            header="Estadísticas"
            visible={props.visible}
            style={{ width: '50vw' }}
            onHide={() => {
                if (!props.visible) return
                props.setVisible(false)
            }}
        >
            <Chart
                type={chart.type}
                data={chart.data}
                options={chart.options}
            />
        </Dialog>
    )
}

interface Props {
    visible: boolean
    setVisible: Dispatch<SetStateAction<boolean>>
    entries: Entry[]
}

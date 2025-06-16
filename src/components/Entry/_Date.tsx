import { format } from 'date-fns'
import { Recycle } from 'lucide-react'

import { Entry } from '@arcadia/dictionary'

export function Date(props: Props) {
    return (
        <div className="flex items-center gap-xs">
            <div className={`text-sm ${props.textClassNames}`}>
                {format(props.date, 'dd/MM')}
            </div>
            {props.isRewatch && (
                <Recycle
                    size={20}
                    strokeWidth={2}
                    className="text-green-400 filter-shadow"
                />
            )}
        </div>
    )
}

type Props = Pick<Entry, 'date' | 'isRewatch'> & {
    textClassNames: string
}

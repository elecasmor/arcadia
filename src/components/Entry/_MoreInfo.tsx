import { ExternalLink } from 'lucide-react'

import { Entry } from '@arcadia/dictionary'

export function MoreInfo(props: Props) {
    return (
        <div className="flex items-center gap-xxs">
            <a
                href={props.moreInfoURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline hover:no-underline ml-xxs"
            >
                + info
            </a>
            <ExternalLink size={14} />
        </div>
    )
}

type Props = Pick<Entry, 'moreInfoURL'>

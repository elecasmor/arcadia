import { Entry } from '@arcadia/dictionary'

export function Title(props: Props) {
    return (
        <div className="">
            <h5
                title={props.title}
                className={`line-clamp-3 text-xl ${props.textClassNames}`}
            >
                {`${props.title}${props.season ? ` ${props.season}` : ''}`}
            </h5>
            {props.version && (
                <span className="uppercase text-xs">({props.version})</span>
            )}
        </div>
    )
}

type Props = Pick<Entry, 'title' | 'season' | 'version'> & {
    textClassNames: string
}

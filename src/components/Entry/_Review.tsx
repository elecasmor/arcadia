import { Entry } from '@arcadia/dictionary'

import { ReviewIcon } from './icons/_Review.icon'

export function Review(props: Props) {
    return (
        <div
            className={`${props.review}-gradient w-12 h-12 rounded-full shadow-lg flex justify-center items-center border-5`}
        >
            <ReviewIcon review={props.review} />
        </div>
    )
}

type Props = Pick<Entry, 'review'>

import { BookOpenText, Film, Gamepad2, Tv } from 'lucide-react'

import { Category, Entry } from '@arcadia/dictionary'

export function CategoryIcon({ category }: Props) {
    const props = {
        size: 24,
    }

    switch (category) {
        case Category.MOVIE:
            return <Film {...props} />
        case Category.SERIES:
            return <Tv {...props} />
        case Category.GAME:
            return <Gamepad2 {...props} />
        case Category.BOOK:
            return <BookOpenText {...props} />
        default:
            return <span>TBD</span>
    }
}

type Props = Pick<Entry, 'category'>

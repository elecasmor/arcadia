import {
    BookOpenText,
    Film,
    Gamepad2,
    Image,
    Radio,
    Rainbow,
    Tv,
} from 'lucide-react'

import { Category, Entry } from '@arcadia/dictionary'

export function CategoryIcon({ category }: Props) {
    const props = {
        size: 24,
    }

    switch (category) {
        case Category.ANIME:
            return <Image {...props} />
        case Category.MOVIES:
            return <Film {...props} />
        case Category.SERIES:
            return <Tv {...props} />
        case Category.GAMES:
            return <Gamepad2 {...props} />
        case Category.BOOKS:
            return <BookOpenText {...props} />
        case Category.PODCASTS:
            return <Radio {...props} />
        case Category.VARIETY:
            return <Rainbow {...props} />
        default:
            return <span>TBD</span>
    }
}

type Props = Pick<Entry, 'category'>

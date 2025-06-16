import { Angry, Annoyed, Laugh, PartyPopper, Smile } from 'lucide-react'

import { ReviewValue } from '@arcadia/dictionary'

export function ReviewIcon({ review }: { review: ReviewValue }) {
    const props = {
        size: 24,
    }

    if (ReviewValue.BIEN_PLUS === review) {
        return <PartyPopper {...props} />
    }

    if (ReviewValue.BIEN === review) {
        return <Laugh {...props} className="-rotate-25" />
    }

    if (ReviewValue.NORMAL === review) {
        return <Smile {...props} className="-rotate-25" />
    }

    if (ReviewValue.MAL === review) {
        return <Annoyed {...props} className="-rotate-25" />
    }

    return <Angry {...props} className="-rotate-25" />
}

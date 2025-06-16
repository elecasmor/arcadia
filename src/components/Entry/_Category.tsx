import { Entry } from '@arcadia/dictionary'

import { CategoryIcon } from './icons/_Category.icon'

import { getCategoryLabel } from '../../helpers/categories'

export function Category(props: Props) {
    return (
        <div
            className={`${props.category}-gradient shadow-lg rounded-full flex items-center justify-center gap-xs px-xs py-xxs`}
        >
            <CategoryIcon category={props.category} />
            <span className="text-sm hidden md:block">
                {getCategoryLabel(props.category)}
            </span>
        </div>
    )
}

type Props = Pick<Entry, 'category'>

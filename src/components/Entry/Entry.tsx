import { Title } from '@arcadia/components/Entry/_Title'
import { Entry as EntryProps } from '@arcadia/dictionary'

import { Category } from './_Category'
import { Date } from './_Date'
import { MoreInfo } from './_MoreInfo'
import { Review } from './_Review'

const textClassNames = 'font-bold text-white text-shadow-sm text-shadow-black'

export function Entry(props: EntryProps) {
    return (
        <div
            className="h-[250px] md:h-[300px] relative rounded-lg overflow-hidden flex bg-cover bg-center shadow-xl shadow-blue-600/5"
            style={{
                backgroundImage: `url(${props.posterURL})`,
            }}
        >
            <div className="absolute inset-x-0 flex items-center justify-between p-xs md:p-sm">
                <Category category={props.category} />
                <Date
                    date={props.date}
                    textClassNames={textClassNames}
                    isRewatch={props.isRewatch}
                />
            </div>
            <div className="bg-white/25 w-full h-[150px] mt-auto p-xs md:p-sm">
                <div className="relative h-full">
                    {props.review && (
                        <div className="absolute bottom-0 left-0">
                            <Review review={props.review} />
                        </div>
                    )}
                    <div className="absolute bottom-0 right-0">
                        <MoreInfo moreInfoURL={props.moreInfoURL} />
                    </div>
                    <Title
                        textClassNames={textClassNames}
                        title={props.title}
                        season={props.season}
                        version={props.version}
                    />
                </div>
            </div>
        </div>
    )
}

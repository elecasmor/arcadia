import { ChartColumnIncreasing } from 'lucide-react'

export function Button(props: Props) {
    return (
        <button
            type="button"
            aria-label="Ver estadísticas"
            className="bg-white text-primary transition-all border-2 hover:border-4 focus:outline-2 border-primary w-12 h-12 flex items-center justify-center cursor-pointer rounded-full shadow-lg p-xxs"
            onClick={props.onClick}
        >
            <ChartColumnIncreasing />
        </button>
    )
}

interface Props {
    onClick(): void
}

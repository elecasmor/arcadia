import {
    CHART_TYPE,
    initColors,
    initDatasets,
    MONTHS_LABELS,
    STACKED_STATE,
} from '@arcadia/components/Charts/helpers'
import { Entry } from '@arcadia/dictionary'

export function useCharts(entries: Entry[]) {
    const { color, gridColor, categories } = initColors()

    const data = {
        labels: MONTHS_LABELS,
        datasets: initDatasets(entries, categories),
    }

    const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            legend: {
                labels: {
                    color,
                },
            },
        },
        scales: {
            x: {
                stacked: STACKED_STATE[CHART_TYPE],
                ticks: {
                    color,
                },
                grid: {
                    color: gridColor,
                },
            },
            y: {
                stacked: STACKED_STATE[CHART_TYPE],
                ticks: {
                    color,
                },
                grid: {
                    color: gridColor,
                },
            },
        },
    }

    return { data, options, type: CHART_TYPE }
}

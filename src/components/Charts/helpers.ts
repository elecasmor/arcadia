import { groupBy } from 'lodash'

import { Category, Entry } from '@arcadia/dictionary'

import { getCategoryLabel } from '../../helpers/categories'

type AvailableChartTypes = 'bar' | 'line'

export const CHART_TYPE = 'bar' as AvailableChartTypes

export const STACKED_STATE: Record<AvailableChartTypes, boolean> = {
    bar: true,
    line: false,
}

export const MONTHS_LABELS = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
]

export function initColors() {
    const documentStyle = getComputedStyle(document.documentElement)

    const color = documentStyle.getPropertyValue('--text-color')
    const gridColor = documentStyle.getPropertyValue('--surface-border')

    const movies = documentStyle.getPropertyValue('--color-movies')
    const series = documentStyle.getPropertyValue('--color-series')
    const games = documentStyle.getPropertyValue('--color-games')
    const books = documentStyle.getPropertyValue('--color-books')
    const podcast = documentStyle.getPropertyValue('--color-podcast')
    const variety = documentStyle.getPropertyValue('--color-variety')

    return {
        color,
        gridColor,
        categories: {
            movies,
            series,
            games,
            books,
            podcast,
            variety,
        },
    }
}

export function initDatasets(
    entries: Entry[],
    colorsByCategory: Record<Category, string>
) {
    return Object.values(Category).map((category) => ({
        label: getCategoryLabel(category, true),
        data: categoryDataByMonth(entries, category),
        fill: false,
        backgroundColor: colorsByCategory[category],
        borderColor: colorsByCategory[category],
        tension: 0.2,
    }))
}

function categoryDataByMonth(entries: Entry[], category: Category) {
    const inCategory = entries.filter((entry) => category === entry.category)

    const groupedByMonth = groupBy(inCategory, (entry) => entry.date.getMonth())

    const monthsArr: (number | undefined)[] = []

    Array.from({ length: 12 }).forEach((_, index) => {
        monthsArr.push(
            groupedByMonth[index] ? groupedByMonth[index].length : undefined
        )
    })

    return monthsArr
}

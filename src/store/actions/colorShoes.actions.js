export const FILTER_COLOR = 'FILTER_COLOR'
export const SHOES_COLOR = 'SHOES_COLOR'


export const shoesColor = (id) => ({
    type: SHOES_COLOR,
    shoesColorId: id
})

export const filterColor = (id) => ({
    type: FILTER_COLOR,
    shoesColorFilter: id
})
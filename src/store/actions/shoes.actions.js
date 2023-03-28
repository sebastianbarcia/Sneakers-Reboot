export const FILTER_SHOES = 'FILTER_SHOES'
export const SHOES_MODEL = 'SHOES_MODEL'

export const filterShoes = (id) => ({
    type: FILTER_SHOES,
    shoesId: id
})

export const filterModel = (id) => ({
    type: SHOES_MODEL,
    modelId : id
})
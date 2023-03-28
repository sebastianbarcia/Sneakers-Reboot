export const FILTER_SIZES = 'FILTER_SIZES'
export const FIND_SIZES = 'FIND_SIZES'


export const sizesShoes = (id) => ({
    type: FILTER_SIZES,
    sizeId: id
})

export const findSizes = (id) => ({
    type: FIND_SIZES,
    findSizeId : id
})
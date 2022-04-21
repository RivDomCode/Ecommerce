
export const getProductByName = (searchValue="", products) => {
    if(searchValue === " ") {
        return products
    }

    searchValue = searchValue.toLocaleLowerCase();

    return products.filter(product => product.title.toLowerCase().includes(searchValue))
}
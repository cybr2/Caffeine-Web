const fetchProductItem = (coffees) => {
    
    const productsInfo = [];

    for (const productName in coffees) {
        // if (coffees.hasOwnProperty(productName)) {
        //     const product = coffees[productName];
        //     const ingredients = product.ingredients.join(', ');
        //     productsInfo.push(`Product: ${productName}, Ingredients: ${ingredients}`);
        // }
        const product = coffees[productName];
        productsInfo.push(productName);
    }

    return productsInfo;

};


export default fetchProductItem;
const product = {
    sku: "1234",
    title: "Basketball Jersey",
    description: "This is a jersey of this famous NBA player",
    color: ["blue", "red", "black"],
    price: 90.99,
};

const keys = ["sku", "title", "price"];

function filterProductByKeys(product, keys) {
    const filteredProduct = {};

    keys.forEach((key) => {
        if (product.hasOwnProperty(key)) {
            filteredProduct[key] = product[key];
        }
    });

    return filteredProduct;
}

console.log(filterProductByKeys(product, keys));

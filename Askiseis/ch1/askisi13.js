const product = {
    sku: "1234",
    title: "Basketball Jersey",
    description: "This is a jersey of this famous NBA player",
    price: 90.99,
};

const transformedProduct = transformObject(product, toUpperCaseKeys);
console.log(transformedProduct);

function transformObject(product, transformCallback) {
    let transformedProduct = {};

    Object.entries(product).forEach(([key, value]) => {
        let [newKey, newValue] = transformCallback(key, value);
        transformedProduct[newKey] = newValue;
    });

    return transformedProduct;
}

function toUpperCaseKeys(key, value) {
    return [key.toUpperCase(), value];
}

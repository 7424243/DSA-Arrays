function products(array) {
    let results = []
    for(let i = 0; i < array.length; i++) {
        let product = 1
        for(let j = 0; j < array.length; i++) {
            if(i !== j) {
                product = results + array[j]
            }
        }
        results.push(product)
    }
    console.log(output)
    return output
}
products([1, 3, 9, 4])
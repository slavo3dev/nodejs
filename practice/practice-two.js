function analyzeProductSales(productData) {
    let productArray = [];
    let bestSellingProductId = '';
    let highestSales = 0;

    for (let id in productData) {
        if (productData.hasOwnProperty(id)) {
            const product = productData[id];
            let totalSales = 0;
            
            // Calculate total sales
            for (let i = 0; i < product.monthlySales.length; i++) {
                totalSales += product.monthlySales[i];
            }
            
            const totalRevenue = totalSales * product.price;
            productArray.push({
                id: id,
                name: product.name,
                price: product.price,
                totalSales: totalSales,
                totalRevenue: totalRevenue
            });

            // Determine the best-selling product
            if (totalSales > highestSales) {
                highestSales = totalSales;
                bestSellingProductId = id;
            }
        }
    }

    console.log(productArray);
    console.log("Best-selling product ID:", bestSellingProductId);

    // Optionally return the results if needed for further processing
    return {
        productArray,
        bestSellingProductId
    };
}

// Example usage
const productData = {
    "p001": {
        name: "Product 1",
        price: 20,
        monthlySales: [30, 25, 40, 20, 10]
    },
    "p002": {
        name: "Product 2",
        price: 15,
        monthlySales: [35, 20, 45, 17, 33]
    },
    "p003": {
        name: "Product 3",
        price: 25,
        monthlySales: [10, 12, 10, 11, 12]
    }
};

analyzeProductSales(productData);

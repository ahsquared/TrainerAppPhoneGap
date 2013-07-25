//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.

app.service('dataService', function ($http, $q) {
    var self = this;
    this.data = null;

    this.getData = function () {
        return self.data;
    };
    
    this.storeData = function(d) {
        self.data = d;
    };

    this.getBestSellers = function () {
        console.log(self.data);
        var bestSellers = [];
        var products = self.data.products;
        var productsLen = self.data.products.length;
        for (var i = 0; i < productsLen; i++) {
            var p = products[i];
            if (p.bestSeller) {
                var categoryName = self.data.categories[p.categoryId].name;
                p.categoryName = categoryName;
                bestSellers.push(p);
            }
        }
        return bestSellers;
    };

    this.getProduct = function (productId) {
        var products = self.data.products;
        var productsLen = self.data.products.length;
        for (var i = 0; i < productsLen; i++) {
            var p = products[i];
            if (p.id === productId) {
                return self.data.products[productId];
            }
        }
        return null;
    };

    this.getAccessories = function (accessoryIds) {
        if (accessoryIds !== null && accessoryIds !== undefined) {
            var products = self.data.products;
            var productsLen = self.data.products.length;
            var accessories = [];
            var accessoriesLen = accessoryIds.length;
            for (var i = 0; i < accessoriesLen; i++) {
                var pId = accessoryIds[i];
                for (var i = 0; i < productsLen; i++) {
                    var p = products[i];
                    if (p.id === pId) {
                        accessories.push(p);
                    }
                }
            }
            return accessories;
        }
        return null;
    };

});

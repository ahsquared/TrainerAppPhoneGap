/***********************************
Controllers

**************************************/
// controller that loads the data for the app
var appInit = app.controller("AppInit", function ($scope, $route, dataService) {
    if (dataService.getData() === null) {
        $scope.$on('$routeChangeSuccess', function(ev, current, prev) {
            dataService.storeData($route.current.locals.loadData);
        });
        $scope.$on('$routeChangeError', function (ev, current, prev, rejection) {
            console.log(rejection);
            $scope.error = rejection;
        });
    }
});

appInit.loadData = function ($q, $http) {
    var defer = $q.defer();
    // TODO check if online
    
    // load the current data
    $http.get('Assets/js/data.js').success(function(jsonData) {
        defer.resolve(jsonData);
    }).error(function(e) {
        defer.reject("Failed to load data");
    });

    // TODO add promise that then tries to get new version and then compares the two


    // TODO check for new version
    // TODO download and store new version if available (File API Phonegap)
    // TODO then get all the assets needed/updated linked in this file (File API Phonegap)

    return defer.promise;
};

// controller that loads splash screen and data needed for the app
app.controller('SplashController', function ($scope, dataService) {
});

// controller for home page
app.controller('HomeController', function ($scope, dataService) {

});

// navbar controller - 
app.controller('NavbarController', ['$scope', '$location', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true;
        } else {
            return false;
        }
    };
    $scope.getStatus = function () {
        if ($location.path() !== '/') {
            return true;
        } else {
            return false;
        }
    };
}]);

// load the best sellers
app.controller('ProductsController', function ($scope, $routeParams, dataService) {

    // get the best sellers
    $scope.bestSellers = dataService.getBestSellers();
    
    // get the product if there is a product called for in the $routeParams
    var productId = ($routeParams.productId) ? parseInt($routeParams.productId) : -1;
    if (productId !== -1) {
        $scope.currentProduct = dataService.getProduct(productId);
        if ($scope.currentProduct !== null) {
            // get the accessories for the product
            $scope.accessories = dataService.getAccessories($scope.currentProduct.accessoryIds);
            console.log($scope.accessories);
        } else {
            // TODO handle error for product not found
            console.log('error');
        }
    }
    
});


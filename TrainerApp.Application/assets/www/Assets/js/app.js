var app = angular.module('trainerApp', []);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'SplashController',
                templateUrl: 'Views/splash.html',
                resolve: {
                    loadData: appInit.loadData
                }
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/home',
            {
                controller: 'HomeController',
                templateUrl: 'Views/home.html',
                resolve: {
                    loadData: appInit.loadData
                }
            })
        .when('/best-sellers/', {
            controller: 'ProductsController',
            templateUrl: 'Views/best-sellers.html',
            resolve: {
                loadData: appInit.loadData
            }
        })
        .when('/products', {
            controller: 'ProductsController',
            templateUrl: 'Views/categories.html',
            resolve: {
                loadData: appInit.loadData
            }
        })
        .when('/product/:productId', {
            controller: 'ProductsController',
            templateUrl: 'Views/product.html',
            resolve: {
                loadData: appInit.loadData
            }
        })
        .otherwise({ redirectTo: '/' });
});



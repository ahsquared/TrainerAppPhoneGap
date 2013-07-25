//This directive adds custom animations to views as they enter or leave a screen
//Note that AngularJS 1.1.4 now has an ng-animate directive but this one can be used when you 
//want complete control or when you can't use that version of AngularJS yet
app.directive('showTab', ['$route', '$controller', '$location', function ($route, $controller, $location) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.on('click', function () {
                var tabsCont = $(element).parent();
                tabsCont.find('li').removeClass('active');
                $(element).addClass('active');
                tabsCont.next('.panes').find('.pane').removeClass('active').eq(attrs.showTab).addClass('active');
            });
        }
    };
}]);

;
(function(angular) {
    angular.module('Movice.detail', ['ngRoute', 'Movie.MyJsonp'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/detail/:id', {
                templateUrl: './detailed/view.html',
                controller: 'detail'
            })
        }])
        .controller('detail', ['$route', '$scope', 'MyJsonp', '$routeParams', function($route, $scope, MyJsonp, $routeParams) {
            $scope.movie = {};
            MyJsonp.jsonp('https://api.douban.com/v2/movie/subject/' + $routeParams.id, {}, function(data) {
                $scope.movie = data;
                $scope.$apply();
            });
        }])
})(angular)

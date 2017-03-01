;
angular.module('Movice', ['ngRoute', 'Movice.detail', 'Movice.views'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
    }])
    .controller('searchCtrl', ['$scope', '$route', function($scope, $route) {
        $scope.input = '';
        $scope.search = function() {
            console.log($scope.input);
            $route.updateParams({ type: 'search', q: $scope.input })
            console.log(1);
        }
    }])

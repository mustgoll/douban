(function(angular) {
    var a = angular.module('Movice.views', ['ngRoute', 'Movie.MyJsonp'])
    a.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:type/:page', {
            templateUrl: './view/view.html',
            controller: 'Movice.data'
        })
    }])
    a.controller('Movice.data', ['$scope', '$route', 'MyJsonp', '$routeParams', function($scope, $route, MyJsonp, $routeParams) {
        $scope.subjects = [];
        $scope.title = "请稍候......";
        $scope.src = "#!/" + $routeParams.type + "/";
        $scope.src2 = parseInt($routeParams.page);
        var count = 10;
        var start = (parseInt($routeParams.page) - 1) * count;
        MyJsonp.jsonp('https://api.douban.com/v2/movie/' + $routeParams.type, { count: count, start: start, q: $routeParams.q }, function(data) {
            $scope.subjects = data.subjects;
            $scope.title = data.title;
            $scope.totalPages = function() {
                return new Array(Math.ceil(data.total / count));
            }
            $scope.last = $scope.totalPages().lenght + 1;
            console.log("data--ok");
            $scope.$apply();
        })
    }])
})(angular)

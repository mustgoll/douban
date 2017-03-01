;
(function(angular) {
    angular.module('Movie.MyJsonp', [])
        .service('MyJsonp', ['$window', '$document', function($window, $document) {
            this.jsonp = function(url, json, callback) {
                var a = Math.random().toString().replace('.', '');
                a = 'My_jsonp' + a;
                $window[a] = function(data) {
                    callback(data);
                    $document[0].body.removeChild(scriptElement);
                }
                var str = "?";
                for (var i in json) {
                    str += i + "=" + json[i] + "&";
                }
                str += "callback=" + a;
                var scriptElement = $document[0].createElement('script');
                scriptElement.src = url + str;
                $document[0].body.appendChild(scriptElement);
            }
        }])
})(angular)

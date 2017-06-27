// JavaScript source code

var app = angular.module("mainApp", ["ngRoute"])

app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/', {
        //template: "Welcome User."
        templateUrl: "exampleFiles/page1.html"
    })
    .when('/dashboard', {
        //template: "Welcome User! again!"
        check: function () {
            if (!$rootScope.isValid) {
                redirectTo: "/";
            }
            templateUrl: "exampleFiles/dashboard.html"
        }
    })
    .otherwise({
        redirectTo: "/"
    })
}]);

app.controller("loginController", ["$scope", "$location", function ($scope, $location, $rootScope) {
    $scope.submit = function () {
        var username = $scope.username;
        var password = $scope.password;
        if ($scope.username == "admin" && $scope.password == "admin") {
            $rootScope.isValid = true;
            $location.path("/dashboard")
            //window.location.hash = "#/exampleFiles/dashboard.html";
        }
        else {
            alert("wrong user!");
        }
    }
}]);


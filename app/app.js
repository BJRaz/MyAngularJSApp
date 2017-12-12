"use strict";
angular.module("MyApp.Controllers", []);
var app = angular.module("app", ["MyApp.Controllers"]);
angular.module("MyApp.Controllers").controller("AppController", ["$scope", function ($scope) {
        $scope.appname = "Brians app";
        $scope.x = 1000;
        $scope.$items = [
            { name: "Brian", lastname: "Rasmussen" },
            { name: "Jane", lastname: "Hansen" }
        ];
        $scope.$watch(function () {
            console.log("Digest called");
        });
    }]);

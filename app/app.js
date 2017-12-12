"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var mycontroller_1 = require("controllers/mycontroller");
angular.module("MyApp.Controllers", []);
var app = angular.module("app", ["MyApp.Controllers"]);
angular.module("MyApp.Controllers").controller("mycontroller", mycontroller_1.MyApp.Controllers.TestController);
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
angular.module("MyApp.Controllers").directive("test", function () {
    return {
        template: "<button ng-click='vm.click()' class='btn btn-default'>Tryk</button><b><input type='text' ng-model='vm.x'/></b>",
        restrict: "E",
        controller: "mycontroller",
        controllerAs: "vm",
        scope: {} // isolate scope
    };
});

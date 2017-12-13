"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppController = /** @class */ (function () {
    function AppController($scope) {
        this.$scope = $scope;
        $scope.appname = "Brians app";
        $scope.x = 1000;
        $scope.$items = [
            { name: "Brian", lastname: "Rasmussen" },
            { name: "Jane", lastname: "Hansen" }
        ];
        $scope.$watch(function () {
            console.log("Digest called");
        });
    }
    AppController.$injector = ["$scope"];
    return AppController;
}());
exports.AppController = AppController;

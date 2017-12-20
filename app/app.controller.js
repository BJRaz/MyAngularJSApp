"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppController {
    constructor($scope) {
        this.$scope = $scope;
        $scope.appname = "Brians app";
        $scope.x = 1000;
        $scope.$items = [
            { name: "Brian", lastname: "Rasmussen" },
            { name: "Jane", lastname: "Hansen" }
        ];
        $scope.$watch(() => {
            console.log("Digest called");
        });
    }
}
AppController.$injector = ["$scope"];
exports.AppController = AppController;

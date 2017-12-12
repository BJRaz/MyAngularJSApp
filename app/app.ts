import * as angular from "angular";
import { MyApp } from "controllers/mycontroller";


angular.module("MyApp.Controllers", []);

var app = angular.module("app", ["MyApp.Controllers"]);

angular.module("MyApp.Controllers").controller("mycontroller", MyApp.Controllers.TestController);

angular.module("MyApp.Controllers").controller("AppController", ["$scope", ($scope : any) => {
    $scope.appname = "Brians app";
    $scope.x = 1000;

    $scope.$items = [
        {name: "Brian", lastname:"Rasmussen"}, 
        {name: "Jane", lastname: "Hansen"}
    ];

    $scope.$watch(() => {
        console.log("Digest called");
    });

}]);

angular.module("MyApp.Controllers").directive("test", () => {
    return {
        template : "<button ng-click='vm.click()' class='btn btn-default'>Tryk</button><b><input type='text' ng-model='vm.x'/></b>",
        restrict : "E",
        controller: "mycontroller",
        controllerAs: "vm"
        ,
        scope : {}  // isolate scope
    };
});


angular.module("MyApp.Controllers", []);

var app = angular.module("app", ["MyApp.Controllers"]);


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
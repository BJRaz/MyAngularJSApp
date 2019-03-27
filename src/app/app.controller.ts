export class AppController {
    private static $injector = ["$scope"];

    constructor(protected $scope: any) {
        $scope.appname = "Brians app";
        $scope.x = 1000;
    
        $scope.$items = [
            {name: "Jane", lastname: "Hansen"}
        ];
    
        $scope.$watch(() => {
            console.log("Digest called");
        });
    
    }
}

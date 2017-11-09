namespace MyApp.Controllers {

    export class TestController {
        
        public static $injector = ["$scope"];
        constructor(protected $scope: ng.IScope) {

        }

        public click() : void {
            console.log("Klikket");            
        }
    }

}

app.controller("mycontroller", MyApp.Controllers.TestController);
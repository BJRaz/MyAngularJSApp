namespace MyApp.Controllers {

    export class TestController {
        x: any = 10;
        
        public static $injector = ["$scope"];

        constructor(protected $scope: ng.IScope) {
            $scope.$watch(() => this.x,(newvalue: any, oldvalue: any) => {
                console.log("HEJ");
                console.log(oldvalue);
                console.log(newvalue);                
            });
        }

        public click() : void {
            console.log("Klikket");
            setTimeout(() => {
                this.$scope.$apply(() => {
                    this.x++;          
                    console.log("X is now: " + this.x);
                });

                
            },3000);  
            
        }
    }

}

angular.module("MyApp.Controllers").controller("mycontroller", MyApp.Controllers.TestController);
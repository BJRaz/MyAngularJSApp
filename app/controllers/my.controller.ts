import { MyService } from "app/services/my.service";
import { IHttpService, IQService } from "angular";

export class MyController {
    x: any = 10;
    
    public static $injector = ["$scope", "$http", "$q"];
    private $service : MyService;
    
    constructor(protected $scope: ng.IScope, $http: IHttpService, $q: IQService) {
        this.$service = new MyService($http, $q);
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

    public test(): void {
        console.log("Kalder service");
        this.$service.get("http://odensebilleder.dk").then(() => {
            console.log("HEJ");
        });
    }
}

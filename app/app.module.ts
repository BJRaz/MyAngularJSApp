import * as angular from "angular"
import { PhoneListController } from "./phone-list/phone-list.component";
import { AppController } from "app/app.controller";

import * as uirouter from "@uirouter/angularjs";

import "@uirouter/angularjs"    // force loads ui.router module
import { MyController } from "app/controllers/my.controller";
import { TestDirectiveFactory } from "app/directives/test.directive";


// import { TestDirectiveFactory } from "./directives/test";
// import { PhoneListModule } from "./phone-list/phone-list.module";
//import { PhoneListComponent } from "./phone-list/phone-list.module"

export let x = 8660;

export class AppModule
{

    public static init() : void {
        angular.module("myapp.controllers", [])
            .controller("phonelistcontroller", PhoneListController)
            .controller("mycontroller", MyController);
        angular.module("myapp.directives", [])
            .directive("test", TestDirectiveFactory);
        var app = angular.module("app", ["ui.router", "myapp.controllers", "myapp.directives"])
            .controller("appcontroller", AppController);

        app.config(($stateProvider: uirouter.StateProvider, 
            $urlRouterProvider: uirouter.UrlRouterProvider,
            $locationProvider: ng.ILocationProvider) => {
            console.log($stateProvider);
            
            $locationProvider.html5Mode(true);
            
            $stateProvider.state("hex", {
                url: "/hex",
                template: "<h1>HEX hest</h1>"
            });

            $urlRouterProvider.otherwise("/");
        });   
    
    }

    // public static init2(): void {

    //     angular.module("myapp.controllers", [])
    //         .controller("mycontroller", MyController);
    //     angular.module("myapp.directives", [])
    //         .directive("test", TestDirectiveFactory);
       
    //     angular.module("myapp.components", [PhoneListModule.name]);//.component("phoneList", PhoneListComponent);

    //         // .component("phoneList", {   // this is a CDO (component definition object)

    //         //     template: () => {
    //         //         return "<b>HEST {{$ctrl.name}}</b>" // $ctrl is a reference to controller object
    //         //     },
    //         //     controller: PhoneListController
    //         // });    

    //     var app = angular.module("app",[
    //         "ui.router",
    //         "myapp.controllers", 
    //         "myapp.directives",
    //         "myapp.components"
    //     ])
    //         .controller("appcontroller", AppController);


    //     app.config(($stateProvider: uirouter.StateProvider, 
    //         $urlRouterProvider: uirouter.UrlRouterProvider,
    //     $locationProvider: ng.ILocationProvider) => {
    //         console.log($stateProvider);
            
    //         $locationProvider.html5Mode(true);
            
    //         $stateProvider.state("hex", {
    //             url: "/hex",
    //             template: "<h1>HEX hest</h1>"
    //         });

    //         $urlRouterProvider.otherwise("/");
    //     });   
    // }
}



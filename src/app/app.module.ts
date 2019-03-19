import * as angular from "angular"
import "@uirouter/angularjs"    // force loads ui.router module
import * as uirouter from "@uirouter/angularjs";
import { PhoneListController, PhoneListComponent } from "./components/phone-list.component";
import { MyController } from "./controllers/my.controller";
import { AppController } from "./app.controller";
import { TestDirectiveFactory } from "./directives/test";
import { NavbarComponent } from "./components/navbar.component";

export let x = 8660;

export class AppModule
{
    public static init(): void {

        angular.module("myapp.controllers", [])
            .controller("mycontroller", MyController)
            .controller("phonelistcontroller", PhoneListController)
        angular.module("myapp.directives", [])
            .directive("test", TestDirectiveFactory);

        angular.module("myapp.components", [])
            .component("navbarComponent", NavbarComponent)
            .component("phoneListComponent", PhoneListComponent);

        var app = angular.module("app",[
            "ui.router",
            "myapp.controllers", 
            "myapp.directives",
            "myapp.components"
        ])
            .controller("appcontroller", AppController);


        app.config(($stateProvider: uirouter.StateProvider, 
            $urlRouterProvider: uirouter.UrlRouterProvider,
        $locationProvider: ng.ILocationProvider) => {
            console.log($stateProvider);
            
            $locationProvider.html5Mode(true);
            
            var hexState = {
                name: "hex",
                url: "/hex",
                template: "<h1>HEX HEX</h1>"
            }
            

            $stateProvider.state(hexState);

            $urlRouterProvider.otherwise("/");
        });   
    }
}



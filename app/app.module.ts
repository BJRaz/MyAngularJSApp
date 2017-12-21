import * as angular from "angular"
import "@uirouter/angularjs"    // force loads ui.router module
import * as uirouter from "@uirouter/angularjs";

import { MyController } from "controllers/my.controller";
import { AppController } from "app.controller";
import { TestDirectiveFactory } from "directives/test";

export let x = 8660;

export class AppModule
{
    public static init(): void {

        angular.module("myapp.controllers", [])
            .controller("mycontroller", MyController);
        angular.module("myapp.directives", [])
            .directive("test", TestDirectiveFactory);

        var app = angular.module("app",[
            "ui.router",
            "myapp.controllers", 
            "myapp.directives"
        ])
            .controller("appcontroller", AppController);


        app.config(($stateProvider: uirouter.StateProvider, 
            $urlRouterProvider: uirouter.UrlRouterProvider,
        $locationProvider: ng.ILocationProvider) => {
            console.log($stateProvider);
            
            $locationProvider.html5Mode(true);
            
            $stateProvider.state("hex", {
                url: "/hex",
                template: "<h1>HEX</h1>"
            });

            $urlRouterProvider.otherwise("/");
        });   
    }
}



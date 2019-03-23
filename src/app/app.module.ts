import * as angular from "angular";
import "@uirouter/angularjs";    // force loads ui.router module
import {PhoneListModule} from "./phones/phone.module";
import {MyappControllerModule} from "./controllers/myapp.controllers.module";
import {HomeModule} from "./home/home.module";
import {CoreModule} from "./core/core.module";

import * as uirouter from "@uirouter/angularjs";


import { AppController } from "./app.controller";
import { TestDirectiveFactory } from "./directives/test";


export let x = 8660;

export class AppModule
{
    public static init(): void {
 
        angular.module("myapp.directives", [])
            .directive("test", TestDirectiveFactory);

        
        var app = angular.module("app",[
            "ui.router",            
            "myapp.directives",
            MyappControllerModule.name, 
            CoreModule.name, 
            PhoneListModule.name,
            HomeModule.name
        ])
            .controller("appcontroller", AppController)
           


        // setup states...
        app.config(($stateProvider: uirouter.StateProvider, $urlRouterProvider: uirouter.UrlRouterProvider, $locationProvider: ng.ILocationProvider) => {
            
            $locationProvider.html5Mode(true);
            
            var hexState = {
                name: "hex",
                url: "/hex",
                template: "<h1>HEX HEX</h1>"
            }

            var homeState = {
                name: "home",
                url: "/",
                component: "homecomponent"                
            };

            $stateProvider.state(homeState);
            $stateProvider.state(hexState);
            
            $urlRouterProvider.otherwise("/");
            
        });   
    }
}



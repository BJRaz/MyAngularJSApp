import * as angular from "angular";
import "@uirouter/angularjs";    // force loads ui.router module
import "./phonelist/phone-list.module";
import "./controllers/myapp.controllers.module";
import "./home/home.module";
import "./core/core.module";

import * as uirouter from "@uirouter/angularjs";


import { AppController } from "./app.controller";
import { TestDirectiveFactory } from "./directives/test";
import { MyService } from "./core/services/my.service";

export let x = 8660;

export class AppModule
{
    public static init(): void {
 
        angular.module("myapp.directives", [])
            .directive("test", TestDirectiveFactory);

        
        var app = angular.module("app",[
            "ui.router",
            "myapp.controllers", 
            "myapp.directives",
            "core.module", 
            "phone-list.module",
            "home.module"
        ])
            .controller("appcontroller", AppController)
            .service("service", MyService);


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

            var phoneViewState = {
                name: "phoneview",                
                component: "phoneView"
            };

            var phoneListState = {
                name: "phonelist",
                //url: "/phonelist",
                parent: phoneViewState,
                component: "phoneList",
                resolve: {
                    value: function(service: MyService)  
                    {
                        return service.getData();
                    }   
                }
            };

            var homeState = {
                name: "home",
                url: "/",
                component: "homecomponent"                
            };

            

            $stateProvider.state(homeState);
            $stateProvider.state(hexState);
            
            $stateProvider.state(phoneViewState);
            $stateProvider.state(phoneListState);


            $urlRouterProvider.otherwise("/");
        });   
    }
}



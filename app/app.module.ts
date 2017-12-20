import * as angular from "angular"

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

        var app = angular.module("app",["myapp.controllers", "myapp.directives"])
            .controller("appcontroller", AppController);
    }
}

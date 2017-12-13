import * as angular from "angular";
import { MyController } from "controllers/my.controller";
import { AppController } from "controllers/app.controller";
import { TestDirectiveFactory } from "directives/test";

angular.module("MyApp.Controllers", [])
    .controller("mycontroller",  MyController)
    .controller("appcontroller", AppController);

angular.module("MyApp.Directives", [])
    .directive("test", TestDirectiveFactory);;

var app = angular.module("app", ["MyApp.Controllers", "MyApp.Directives"]);


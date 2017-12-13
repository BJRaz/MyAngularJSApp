"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var my_controller_1 = require("controllers/my.controller");
var app_controller_1 = require("controllers/app.controller");
var test_1 = require("directives/test");
angular.module("MyApp.Controllers", [])
    .controller("mycontroller", my_controller_1.MyController)
    .controller("appcontroller", app_controller_1.AppController);
angular.module("MyApp.Directives", [])
    .directive("test", test_1.TestDirectiveFactory);
;
var app = angular.module("app", ["MyApp.Controllers", "MyApp.Directives"]);

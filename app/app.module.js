"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const angular = require("angular");
const my_controller_1 = require("controllers/my.controller");
const app_controller_1 = require("app.controller");
const test_1 = require("directives/test");
exports.x = 8660;
class AppModule {
    static init() {
        angular.module("myapp.controllers", [])
            .controller("mycontroller", my_controller_1.MyController);
        angular.module("myapp.directives", [])
            .directive("test", test_1.TestDirectiveFactory);
        var app = angular.module("app", ["myapp.controllers", "myapp.directives"])
            .controller("appcontroller", app_controller_1.AppController);
    }
}
exports.AppModule = AppModule;

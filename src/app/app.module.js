"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const angular = require("angular");
require("@uirouter/angularjs"); // force loads ui.router module
const phone_list_component_1 = require("./components/phone-list.component");
const my_controller_1 = require("./controllers/my.controller");
const app_controller_1 = require("./app.controller");
const test_1 = require("./directives/test");
exports.x = 8660;
class AppModule {
    static init() {
        angular.module("myapp.controllers", [])
            .controller("mycontroller", my_controller_1.MyController)
            .controller("phonelistcontroller", phone_list_component_1.PhoneListController);
        angular.module("myapp.directives", [])
            .directive("test", test_1.TestDirectiveFactory);
        angular.module("myapp.components", []).component("phoneListComponent", phone_list_component_1.PhoneListComponent);
        var app = angular.module("app", [
            "ui.router",
            "myapp.controllers",
            "myapp.directives"
        ])
            .controller("appcontroller", app_controller_1.AppController);
        app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
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
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
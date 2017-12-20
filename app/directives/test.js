"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestDirectiveFactory = () => {
    return {
        templateUrl: "app/directives/test.html",
        restrict: "E",
        controller: "mycontroller",
        controllerAs: "vm",
        scope: {} // isolate scope
    };
};

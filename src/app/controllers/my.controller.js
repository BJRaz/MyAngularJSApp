"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_service_1 = require("../services/my.service");
const my_controller_test_1 = require("./my.controller.test");
class MyController {
    constructor($scope, $http, $q) {
        this.$scope = $scope;
        this.x = 10;
        this.$service = new my_service_1.MyService($http, $q);
        $scope.$watch(() => this.x, (newvalue, oldvalue) => {
            console.log("HEJ");
            console.log(oldvalue);
            console.log(newvalue);
        });
    }
    click() {
        my_controller_test_1.testMe();
        console.log("Klikket");
        setTimeout(() => {
            this.$scope.$apply(() => {
                this.x++;
                console.log("X is now: " + this.x);
            });
        }, 3000);
    }
    test() {
        console.log("Kalder service");
        this.$service.get("http://odensebilleder.dk").then(() => {
            console.log("HEJ");
        });
    }
}
MyController.$injector = ["$scope", "$http", "$q"];
exports.MyController = MyController;
//# sourceMappingURL=my.controller.js.map
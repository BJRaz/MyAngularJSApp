"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyController {
    constructor($scope) {
        this.$scope = $scope;
        this.x = 10;
        $scope.$watch(() => this.x, (newvalue, oldvalue) => {
            console.log("HEJ");
            console.log(oldvalue);
            console.log(newvalue);
        });
    }
    click() {
        console.log("Klikket");
        setTimeout(() => {
            this.$scope.$apply(() => {
                this.x++;
                console.log("X is now: " + this.x);
            });
        }, 3000);
    }
}
MyController.$injector = ["$scope"];
exports.MyController = MyController;

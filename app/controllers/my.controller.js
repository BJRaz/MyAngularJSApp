"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyController = /** @class */ (function () {
    function MyController($scope) {
        var _this = this;
        this.$scope = $scope;
        this.x = 10;
        $scope.$watch(function () { return _this.x; }, function (newvalue, oldvalue) {
            console.log("HEJ");
            console.log(oldvalue);
            console.log(newvalue);
        });
    }
    MyController.prototype.click = function () {
        var _this = this;
        console.log("Klikket");
        setTimeout(function () {
            _this.$scope.$apply(function () {
                _this.x++;
                console.log("X is now: " + _this.x);
            });
        }, 3000);
    };
    MyController.$injector = ["$scope"];
    return MyController;
}());
exports.MyController = MyController;

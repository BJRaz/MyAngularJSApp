"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var TestController = /** @class */ (function () {
            function TestController($scope) {
                var _this = this;
                this.$scope = $scope;
                this.x = 10;
                $scope.$watch(function () { return _this.x; }, function (newvalue, oldvalue) {
                    console.log("HEJ");
                    console.log(oldvalue);
                    console.log(newvalue);
                });
            }
            TestController.prototype.click = function () {
                var _this = this;
                console.log("Klikket");
                setTimeout(function () {
                    _this.$scope.$apply(function () {
                        _this.x++;
                        console.log("X is now: " + _this.x);
                    });
                }, 3000);
            };
            TestController.$injector = ["$scope"];
            return TestController;
        }());
        Controllers.TestController = TestController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp = exports.MyApp || (exports.MyApp = {}));
// 

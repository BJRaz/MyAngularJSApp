"use strict";
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var TestController = /** @class */ (function () {
            function TestController($scope) {
                this.$scope = $scope;
            }
            TestController.prototype.click = function () {
                console.log("Klikket");
            };
            TestController.$injector = ["$scope"];
            return TestController;
        }());
        Controllers.TestController = TestController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
app.controller("mycontroller", MyApp.Controllers.TestController);

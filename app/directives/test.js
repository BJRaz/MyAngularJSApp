"use strict";
app.directive("test", function () {
    return {
        template: "<button ng-click='vm.click()'>Tryk</button>",
        restrict: "E",
        controller: "mycontroller",
        controllerAs: "vm"
    };
});

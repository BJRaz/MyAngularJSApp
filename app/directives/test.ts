app.directive("test", () => {
    return {
        template : "<button ng-click='vm.click()' class='btn btn-default'>Tryk</button><b><input type='text' ng-model='vm.x'/></b>",
        restrict : "E",
        controller: "mycontroller",
        controllerAs: "vm"
        ,
        scope : {}  // isolate scope
    };
});

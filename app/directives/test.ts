export const TestDirectiveFactory = 
() => {
    return {
        templateUrl : "app/directives/test.html",
        restrict : "E",
        controller: "mycontroller",
        controllerAs: "vm"
        ,
        scope : {}  // isolate scope
    };
}

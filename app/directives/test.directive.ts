export const TestDirectiveFactory = 
() => {
    return {
        templateUrl : "app/directives/test.directive.html",
        restrict : "E",
        controller: "mycontroller",
        controllerAs: "vm"
        ,
        scope : {}  // isolate scope
    };
}

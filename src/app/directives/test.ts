// bemærk: npm install @types/requirejs kan muligøre nedenstående 
// i forhold til tsc-kompilering lykkes.
// i webpak skal der  en loader (html-loader) til html-filer defineres

export const TestDirectiveFactory = 
() => {
    return {
        template : require('./test.html'),
        restrict : "E",
        controller: "mycontroller",
        controllerAs: "vm",
        scope : {}  // isolate scope
    };
}

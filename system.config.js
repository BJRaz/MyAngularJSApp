SystemJS.config({
    baseURL: "/",
    map: {
        app: "app",
        "controllers/my.controller": "app/controllers/my.controller.js",
        "controllers/app.controller": "app/controllers/app.controller.js",
        "directives/test": "app/directives/test.js",
        angular: "node_modules/angular/angular.js"
    },
    meta: {
        "node_modules/angular/angular.js":{
            format: "global",
            exports: "angular"    
        }
    }
});
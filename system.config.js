SystemJS.config({
    baseURL: "/",
    paths: {
        "app:*": "app/*",
        "controllers:*": "app/controllers/*",
        "directives:*": "app/directives/*"
    },
    map: {
        app: "app",
         "controllers/my.controller": "controllers:my.controller.js",
         "app.controller": "app:app.controller.js",
         "directives/test": "directives:test.js",
         "app.module": "app:app.module.js",
        angular: "node_modules/angular/angular.js"
    },
    meta: {
        "node_modules/angular/angular.js":{
            format: "global",
            exports: "angular"    
        }
    }
});
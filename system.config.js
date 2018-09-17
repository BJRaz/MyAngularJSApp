SystemJS.config({
    baseURL: "/",
    // paths: {
    //     "app:*": "*",
    //     "controllers:*": "app/controllers/*",
    //     "directives:*": "app/directives/*",
    // },
    map: {
        //  "controllers/my.controller": "controllers:my.controller.js",
        //  "app.controller": "app:app.controller.js",
        //  "directives/test": "directives:test.js",
        //"app.module": "app:app.module.js",
        "angular": "/node_modules/angular/angular.js",
        "@uirouter/angularjs": "/node_modules/@uirouter/angularjs/release/angular-ui-router.js"
    },
    meta: {
        "/node_modules/angular/angular.js":{
            format: "global",
            exports: "angular"    
        },
        "/node_modules/@uirouter/angularjs/release/angular-ui-router.js": {           
            deps: ["angular"]
        }
    },
    packages:{
        ".":{
            defaultExtension: "js"
        }
    }
});
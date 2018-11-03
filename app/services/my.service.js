"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_service_1 = require("../services/base.service");
class MyService extends base_service_1.BaseService {
    //public static $inject = ["$http", "$q"];
    constructor($http, $q) {
        super($http, $q);
    }
}
exports.MyService = MyService;

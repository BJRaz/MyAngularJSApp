"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseService {
    /**
     *
     */
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    get(url) {
        var r = this.$http.get(url).then((result) => {
            return result.statusText;
        });
        return this.$q.when(r);
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map
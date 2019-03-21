import { BaseService } from "../services/base.service";
import { IQService, IHttpService, IPromise } from "angular";
import { isInjectable } from "@uirouter/core";


export class MyService extends BaseService
{
    //public static $inject = ["$http", "$q"];

    constructor($http : IHttpService, $q: IQService) {
        super($http,$q);
    }

    public getData() : any {
        return [{name: "Mobile Phone", price: 100}];
    }
}

export class MyServiceFactory {
    $get() {
        return MyService;
    }
}
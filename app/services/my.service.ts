import { BaseService } from "app/services/base.service";
import { IQService, IHttpService } from "angular";


export class MyService extends BaseService
{
    public static $inject = ["$http", "$q"];

    constructor($http : IHttpService, $q: IQService) {
        super($http,$q);
    }
}
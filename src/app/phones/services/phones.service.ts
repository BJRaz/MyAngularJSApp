import { BaseService } from "../../core/services/base.service";
import { IQService, IHttpService, IPromise } from "angular";
import { isInjectable } from "@uirouter/core";


export class PhonesService extends BaseService
{
    
    constructor($http : IHttpService, $q: IQService) {
        super($http,$q);
    }

    public getData() : any {
        return [{name: "Mobile Phone", price: 100}];
    }
}

export class PhonesServiceFactory {
    $get() {
        return PhonesService;
    }
}
import { BaseService } from "../../core/services/base.service";
import { IQService, IHttpService, IPromise } from "angular";
import { isInjectable } from "@uirouter/core";


export class PhonesService extends BaseService
{
    
    constructor($http : IHttpService, $q: IQService) {
        super($http,$q);
    }

    public getData() : any {
        return [
            {name: "Samsoon Phone", price: 100, quantity: 25, image:""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image:""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image:""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image:""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image:""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image:""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image:""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image:""}
        ];
    }
}

export class PhonesServiceFactory {
    $get() {
        return PhonesService;
    }
}
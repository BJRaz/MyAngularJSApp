import { BaseService } from "../../core/services/base.service";
import { IHttpService, IPromise, IQService } from "angular";

export class PhonesService extends BaseService {
    
    constructor($http : IHttpService, $q: IQService) {
        super($http,$q);
    }

    public getData() : any {
        return [
            {name: "Samsoon Phone", price: 100, quantity: 25, image: ""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image: ""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image: ""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image: ""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image: ""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image: ""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image: ""},
            {name: "Samsoon Phone", price: 100, quantity: 25, image: ""}
        ];
    }
}

export class PhonesServiceFactory {
    public $get() {
        return PhonesService;
    }
}

import { BaseService } from "../../core/services/base.service";
import { IHttpService, IPromise, IQService } from "angular";
import { Phone } from "phones/models/phone";
import { allTrueR } from "@uirouter/core";

export class PhonesService extends BaseService {
    data: Phone[] = [{id:0, name: "Samsoon Phone", price: 100, image: ""},
    {id:1, name: "Phone Maxim", price: 200, image: ""},
    {id:2, name: "Applee 100", price: 130, image: ""},
    {id:3, name: "CarstedByGod phone", price: 16.60, image: ""}];
    
    constructor($http : IHttpService, $q: IQService) {
        super($http,$q);
    }

    public getAll() : Phone[] {
        return this.data;
    }

    public getById(id: number) : Phone | any {
        return this.data.find(value => {                       
            return value.id == id;
        });
        
    }
}

export class PhonesServiceFactory {
    public $get() {
        return PhonesService;
    }
}

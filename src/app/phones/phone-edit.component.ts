import angular = require("angular");
import { Phone } from "./models/phone";

class PhoneController implements angular.IController {
    phone: Phone;;
    
    constructor() {    
        this.phone = new Phone();
    }

    $onInit(): void {        
    } 
}

export const PhoneEditComponent : angular.IComponentOptions = {
    template: "<div class='col-md-5'><form><div class='form-group'><label for='name'>Name</label><input type='text' name='name' ng-model='$ctrl.phone.name' /></div><div class='form-group'><label for='price'>Price</label><input type='text' name='price' ng-model='$ctrl.phone.price' /><button type='submit' class='btn btn-primary'>Save</button></form></div></div>",
    controller: ["$stateParams", "phonesservice", PhoneController],
    bindings: {
        phone: "<"
    }
}
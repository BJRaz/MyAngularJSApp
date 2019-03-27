import angular = require("angular");
import { Transition, StateParams } from "@uirouter/core";

class PhoneController implements angular.IController {
    
    constructor(protected params: StateParams){
    }

    $onInit(): void {
        
    } 
}

export const PhoneEditComponent : angular.IComponentOptions = {
    template: "<h3>EDIT</h3><br />Edit komponent Index (TODO): {{$ctrl.params['idx']}} ..",
    controller: ["$stateParams", PhoneController],
    bindings: {

    }
}
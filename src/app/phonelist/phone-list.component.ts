import { IController } from "angular";
import { StateService } from "@uirouter/core";

class PhoneListController implements IController {
    
    name : string;
    constructor(private $state: StateService) {
        this.name = "PhoneListController";   
    }

    $onInit() {        
        console.log("COMPONENT onInit has been called " + this.name);
    }

    public testState() : void {        
        this.$state.go("home");
    }
}

// CDO Component Definition Object.
export const PhoneListComponent : ng.IComponentOptions = {
    template: require('./phone-list.component.html'),    // by use of webpack html-loader...    
    controller: PhoneListController,
    bindings: {
        value: '<'                                      // from resolver in state...
    }
};
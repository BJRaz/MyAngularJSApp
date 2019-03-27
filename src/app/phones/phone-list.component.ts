import { IController, IComponentController } from "angular";
import { StateService } from "@uirouter/core";

interface IPhoneListController {
    onEdit: (item: any) => void;
}

class PhoneListController implements IPhoneListController, IController {
    onEdit: (item: any) => void = () => {}; // dummy assignment ( as function pointer), will be used when bindings are added to controller
    data: Array<any>;
    
    name : string;
    constructor(private $state: StateService) {
        this.name = "PhoneListController";           
        this.data = [];
    }

    $onInit() {        
        console.log("COMPONENT onInit has been called " + this.name);
    }

    public testState() : void {        
        this.$state.go("home");
    }

    public edit(index: number) {   
        this.onEdit({val: index});  // call binding-event (onEdit)
        this.$state.go('phoneedit');
    }
}

// CDO Component Definition Object.
export const PhoneListComponent : ng.IComponentOptions = {
    template: require('./phone-list.component.html'),       // by use of webpack html-loader...    
    controller: PhoneListController,
    bindings: {
        data: '<',                                         // from resolver in state...
        onEdit: "&"                                         // event ( output ) 
    }
};
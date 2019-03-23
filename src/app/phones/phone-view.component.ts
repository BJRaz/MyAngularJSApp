import { IController } from "angular";

class PhoneViewController implements IController {
    name : string;
    data: any = null;   // reference to binding 'data'

    constructor() {
        this.name = "PhoneViewController";        
    }

    $onInit() {
        console.log("COMPONENT onInit has been called " + this.name);
        console.log(this.data);
    }

    public editItem(idx: number) : void {
        alert(this.data[idx]);
    }
}

// CDO Component Definition Object.
export const PhoneViewComponent : ng.IComponentOptions = {
    template: require('./phone-view.component.html'),    // by use of webpack html-loader...    
    controller: PhoneViewController,
    bindings: {
        data: '<'
    }
};
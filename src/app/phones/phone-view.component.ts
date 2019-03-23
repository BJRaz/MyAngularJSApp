import { IController } from "angular";

class PhoneViewController implements IController {
    name : string;
    constructor() {
        this.name = "PhoneViewController";

    }

    $onInit() {
        console.log("COMPONENT onInit has been called " + this.name);
    }
}

// CDO Component Definition Object.
export let PhoneViewComponent : ng.IComponentOptions = {
    template: require('./phone-view.component.html'),    // by use of webpack html-loader...    
    controller: PhoneViewController,
    bindings: {
        value: '<'
    }
};
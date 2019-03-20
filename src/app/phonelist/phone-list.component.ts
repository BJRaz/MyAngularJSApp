import { IController } from "angular";

class PhoneListController implements IController {
    items: any;

    name : string;
    constructor() {
        this.name = "PhoneListController";

        this.items = [
            {name: "Mobile Phone", price: 100}
        ];
    }

    $onInit() {
        console.log("COMPONENT onInit has been called " + this.name);
    }
}

// CDO Component Definition Object.
export let PhoneListComponent : ng.IComponentOptions = {
    template: require('./phone-list.component.html'),    // by use of webpack html-loader...    
    controller: PhoneListController,
    bindings: {
        value: '<'
    }
};
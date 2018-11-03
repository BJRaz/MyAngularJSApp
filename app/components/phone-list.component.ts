import { IController } from "angular";


export class PhoneListController implements IController {
    name : string;
    constructor() {
        this.name = "Brian";
    }

    $onInit() {
        console.log("COMPONENT onInit has been called " + this.name);
    }
}

// CDO Component Definition Object.
export let PhoneListComponent : ng.IComponentOptions = {
    templateUrl: "app/components/phone-list.component.html", // BAD - not relative...
    controller: PhoneListController,
    bindings: {
        value: '='
    }
};
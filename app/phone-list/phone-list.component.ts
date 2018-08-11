import { IController } from "angular";


export class PhoneListController implements IController {
    name : string;
    constructor() {
        this.name = "";
    }

    $onInit() {
        console.log("COMPONENT onInit has been called " + this.name);
    }
}

// CDO Component Definition Object.
export let PhoneListComponent : ng.IComponentOptions = {
    templateUrl: "app/phone-list/phone-list.component.html", // BAD - not relative...
    controller: PhoneListController
};
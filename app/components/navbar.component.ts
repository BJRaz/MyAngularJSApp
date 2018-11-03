import { IController } from "angular";
import * as template from "navbar.component.html!text";

export class NavbarController implements IController {
    
    constructor() {
    
    }

    $onInit() {
        console.log("Navbar COMPONENT onInit has been called ");
    }
}

// CDO Component Definition Object.
export let NavbarComponent : ng.IComponentOptions = {
    templateUrl: "app/components/navbar.component.html", // BAD - not relative...
    controller: NavbarController
};
import { IController } from "angular";

export class NavbarController implements IController {
    
    constructor() {
    
    }

    $onInit() {
        console.log("Navbar COMPONENT onInit has been called ");
    }
}

// CDO Component Definition Object. BJR
export let NavbarComponent : ng.IComponentOptions = {
    template: require('./navbar.component.html'),    
    controller: NavbarController
};
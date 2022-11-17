import { IController } from "angular";

class HomeController implements IController {
    name : string;
    constructor() {
        this.name = "[HER]";
    }

    $onInit() {
        console.log("COMPONENT onInit has been called " + this.name);
    }
}

// CDO Component Definition Object.
export const HomeComponent : ng.IComponentOptions = {
    template: require('./home.component.html'),    
    controller: HomeController,
    bindings: {
        value: '<'
    }
};
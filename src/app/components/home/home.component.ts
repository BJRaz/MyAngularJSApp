import { IController } from "angular";

export class HomeController implements IController {
    name : string;
    constructor() {
        this.name = "Home...";
    }

    $onInit() {
        console.log("COMPONENT onInit has been called " + this.name);
    }
}

// CDO Component Definition Object.
export let HomeComponent : ng.IComponentOptions = {
    template: require('./home.component.html'),    
    controller: HomeController,
    bindings: {
        value: '='
    }
};
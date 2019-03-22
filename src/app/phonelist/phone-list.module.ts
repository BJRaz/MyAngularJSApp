import { PhoneListComponent } from "./phone-list.component";
import * as angular from "angular";
import { PhoneViewComponent } from "./phone-view.component";
import { StateRegistry } from "@uirouter/core";

export let PhoneListModule : ng.IModule = angular.module("phone-list.module", [])
    .component("phoneList", PhoneListComponent)
    .component("phoneView", PhoneViewComponent)
    .config(["$stateRegistryProvider", ($stateRegistryProvider: StateRegistry) => {
        $stateRegistryProvider.register()
    }]);
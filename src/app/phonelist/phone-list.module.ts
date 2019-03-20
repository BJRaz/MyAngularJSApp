import { PhoneListComponent } from "./phone-list.component";
import * as angular from "angular";

export let PhoneListModule : ng.IModule = angular.module("phone-list.module", [])
    .component("phonelistcomponent", PhoneListComponent);
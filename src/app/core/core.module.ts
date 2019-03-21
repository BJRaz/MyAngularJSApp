import { NavbarComponent } from "./navbar.component";

import * as angular from "angular";
import { MyServiceFactory } from "./services/my.service";

export let CoreModule : ng.IModule = angular.module("core.module", [])
    .component("navbarComponent", NavbarComponent)
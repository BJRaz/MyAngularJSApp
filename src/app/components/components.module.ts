import { NavbarComponent } from "./navbar.component";
import * as angular from "angular";

export let ComponentsModule : ng.IModule = angular.module("components.module", [])
    .component("navbarComponent", NavbarComponent);
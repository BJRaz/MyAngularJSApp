import { HomeComponent } from "./home.component";
import * as angular from "angular";

export let PhoneListModule : ng.IModule = angular.module("home.module", [])
    .component("homecomponent", HomeComponent);
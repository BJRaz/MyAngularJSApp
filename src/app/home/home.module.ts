import { HomeComponent } from "./home.component";
import * as angular from "angular";

export const HomeModule : ng.IModule = angular.module("home.module", [])
    .component("homecomponent", HomeComponent);
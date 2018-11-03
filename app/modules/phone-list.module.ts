import { PhoneListController, PhoneListComponent } from "app/components/phone-list.component";
import * as angular from "angular";
//import * as template from "./phone-list.component.html";

export let PhoneListModule : ng.IModule = angular.module("app.phoneline", []);

PhoneListModule.component("phoneList", PhoneListComponent);
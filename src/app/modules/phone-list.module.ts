import { PhoneListController, PhoneListComponent } from "../components/phonelist/phone-list.component";
import * as angular from "angular";

export let PhoneListModule : ng.IModule = angular.module("app.phoneline", []);

PhoneListModule.component("phoneList", PhoneListComponent);
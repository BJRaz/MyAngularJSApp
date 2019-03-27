
import * as angular from "angular";
import { PhoneViewComponent } from "./phone-view.component";
import { PhoneListComponent } from "./phone-list.component";
import { PhoneEditComponent } from "./phone-edit.component";

import { phoneListState, phoneViewState, phoneEditState } from "./phone.states";
import { StateProvider, Transition } from "@uirouter/angularjs";
import { PhonesService } from "./services/phones.service";

export let PhoneListModule: ng.IModule = angular.module("phone.module", [])
    .component("phoneList", PhoneListComponent)
    .component("phoneView", PhoneViewComponent)
    .component("phoneEdit", PhoneEditComponent)
    .config(["$stateProvider", ($stateProvider: StateProvider) => {
        $stateProvider.state(phoneEditState);        
        $stateProvider.state(phoneListState);
        $stateProvider.state(phoneViewState);                
    }]).factory("phonesservice", ["$http","$q", ($http : angular.IHttpService, $q: angular.IQService) => {
        return new PhonesService($http,$q);
    }]);

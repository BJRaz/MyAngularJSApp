import { PhoneListComponent } from "./phone-list.component";
import * as angular from "angular";
import { PhoneViewComponent } from "./phone-view.component";

import { phoneListState, phoneViewState } from "./phone.states";
import { StateProvider } from "@uirouter/angularjs";
import { PhonesServiceFactory, PhonesService } from "./services/phones.service";

export let PhoneListModule : ng.IModule = angular.module("phone.module", [])
    .component("phoneList", PhoneListComponent)
    .component("phoneView", PhoneViewComponent)
    .config(["$stateProvider", ($stateProvider: StateProvider) => {
        $stateProvider.state(phoneListState);
        $stateProvider.state(phoneViewState);
    }]).factory("phonesservice", ["$http","$q", ($http : angular.IHttpService, $q: angular.IQService) => {
        return new PhonesService($http,$q);
    }]);
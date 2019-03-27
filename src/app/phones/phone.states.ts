import { PhonesService } from "./services/phones.service";
import { StateParams } from "@uirouter/core";

export const phoneViewState = {
    name: "phoneview",                
    component: "phoneView",
    
};

export const phoneListState = {
    name: "phonelist",
    url: "/phonelist",
    parent: "phoneview",
    component: "phoneList",
    resolve: {
        data: (phonesservice: PhonesService) => phonesservice.getData()   
    }
};

export const phoneEditState = {
    name: "phoneedit",
    url: "/edit/{idx}",
    parent: "phoneview",
    component: "phoneEdit"    
};

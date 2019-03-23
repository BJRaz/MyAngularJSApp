import { PhonesService } from "./services/phones.service";

export const phoneListState = {
    name: "phonelist",
    //url: "/phonelist",
    parent: "phoneview",
    component: "phoneList",
    resolve: {
        value: function(phonesservice: PhonesService)  
        {
            return phonesservice.getData();
        }   
    }
};

export const phoneViewState = {
    name: "phoneview",                
    component: "phoneView"
};

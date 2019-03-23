import { PhonesService } from "./services/phones.service";

export const phoneListState = {
    name: "phonelist",
    //url: "/phonelist",
    parent: "phoneview",
    component: "phoneList"
};

export const phoneViewState = {
    name: "phoneview",                
    component: "phoneView",
    resolve: {
        data: function(phonesservice: PhonesService)  
        {
            return phonesservice.getData();
        }   
    }
};

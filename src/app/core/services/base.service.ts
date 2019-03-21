import { IPromise, IHttpService, IQService } from "angular";

export class BaseService
{
    private $q : IQService;
    private $http: IHttpService;
    /**
     *
     */
    constructor($http : IHttpService, $q : IQService) {
        this.$http = $http;
        this.$q = $q;

    }   

    public get(url: string) : IPromise<string> {
        var r = this.$http.get(url).then((result) => {
            return result.statusText;
        });
        return this.$q.when(r);
    }    
}
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(
        private http: HttpClient
    ) { }

    public request(ep: string, params: string, load: any) {
        const url: string = "http://localhost/api/";
        let result: any;
        let dt = { payload: load }
        let headers = new HttpHeaders({
            'Content-Type': 'text/plain'
        });

        result = this.http.post(url+ep+params, JSON.stringify(dt),{ headers })
        return result;
    }
}
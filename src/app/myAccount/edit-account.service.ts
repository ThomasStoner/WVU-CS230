import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AccountInfo } from "./edit-account.model";

@Injectable({ providedIn: 'root'})
export class EditAccountService {
    private baseUrl: string = 'https://shudder-app-actual-default-rtdb.firebaseio.com/';
    private accountInfoEndpoint: string = 'Account.json';

    constructor(private http: HttpClient) {

    }

    getAccountInfo() {
        console.log(this.baseUrl + this.accountInfoEndpoint);
        return this.http.get<AccountInfo>(this.baseUrl + this.accountInfoEndpoint);
    }

    modifyAccountInfo(data:AccountInfo) {

        return this.http.put(this.baseUrl + this.accountInfoEndpoint, data);
    }
}
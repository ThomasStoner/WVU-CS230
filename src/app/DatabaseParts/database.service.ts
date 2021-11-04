import { Injectable } from "@angular/core";
import { AngularFireDatabase} from "@angular/fire/compat/database"
import { Observable } from "rxjs";
import { AccountInfo } from "../myAccount/edit-account.model";

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    items: Observable<AccountInfo []>
    constructor(private db:AngularFireDatabase) {
        console.log("Setting up Firebase communication");
        this.items = this.db.list<AccountInfo>('Account').valueChanges();
    }

    public showData() {
        this.items.subscribe((data: AccountInfo []) => {
            console.log("Data received");
            for (let item of data) {
                console.log(item);
            }
        })
    }
}
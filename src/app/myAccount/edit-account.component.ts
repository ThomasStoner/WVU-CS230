import { Component } from "@angular/core";
import { DatabaseService } from "../DatabaseParts/database.service";
import { AccountInfo } from "./edit-account.model";
import { EditAccountService } from "./edit-account.service";

@Component({
    selector: 'app-edit-account',
    templateUrl: 'edit-account.component.html'
})

export class EditAccount {

    constructor(private infoService: EditAccountService, private dbService:DatabaseService) {
        dbService.showData();
    }

    onUpdateAccount(data:AccountInfo) {
        this.infoService.modifyAccountInfo(data).subscribe(data => {
            console.log("Updated Info and sent to back end");
        });
    }

}
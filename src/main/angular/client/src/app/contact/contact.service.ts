import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ContactService {

    constructor(private httpClient : HttpClient) { }

    getContacts () {
        return this.httpClient.get("/ws/contacts/getAll");
    }

    
    newContact (cnt: Contact) {
        this.httpClient.post("/ws/contacts/add", cnt).subscribe(res=>{console.log(res);}, err=>{console.log("Error occured - add");});
        
    }
    
    updateContact(cnt: Contact) {
        return this.httpClient.put("/ws/contacts/update", cnt).subscribe(res=>{console.log(res);}, err=>{console.log("Error occured - add");});
    }
    
    deleteContact(cnt: Contact) {
        
        return this.httpClient.delete("/ws/contacts/delete/"+ cnt._id).subscribe(res=>{console.log(res);}, err=>{console.log("Error occured - delete");});;
    }
}

import { Injectable } from '@angular/core';
import { Contact} from './contact'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContactService {

    constructor(private httpClient : HttpClient) { }

    getContacts () {
        return this.httpClient.get("/ws/contacts/getAll");
     }
}

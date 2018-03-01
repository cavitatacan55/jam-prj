import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { ContactService } from '../contact.service';
import { Contact } from '../contact';

@Component( {
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
} )
export class ContactListComponent implements OnInit {

    contacts: Contact[] = [];

    constructor( private contactService: ContactService ) { }

    ngOnInit() {
        this.getItems();
    }

    getItems(): void {
        this.contactService.getContacts().
            subscribe(( res: Contact[] ) => {
                this.contacts = res;
            },
            ( err: HttpErrorResponse ) => {
                console.log( 'Something went wrong!' + err.message );
            },
        );
    }
}

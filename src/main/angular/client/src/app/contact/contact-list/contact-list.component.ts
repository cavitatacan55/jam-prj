import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { ContactService } from '../contact.service';
import { Data } from '../data';

import { Contact } from '../contact';

@Component( {
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
} )
export class ContactListComponent implements OnInit {

    contacts: Contact[] = [];
   
    constructor( private router: Router, private data: Data, private contactService: ContactService ) { }

    ngOnInit() {
        this.getContacts();
    }
    
    getContacts(): void {
        this.contactService.getContacts().
            subscribe(( res: Contact[] ) => {
                this.contacts = res;
                console.log('retrieved all contacts');
            },
            ( err: HttpErrorResponse ) => {
                console.log( 'Something went wrong!' + err.message );
            },
        );
    }
    
    newContact() {
        this.router.navigate(["contactnew"]);
    }
    
    editContact(contact: Contact) {
        this.data.selectedContact = contact;
        this.router.navigate(["contactedit"]);
    }
    
    deleteContact(contact: Contact) {
        this.data.selectedContact = contact;
        this.router.navigate(["contactdelete"]);
    }
}

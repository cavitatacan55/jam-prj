import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Data } from '../data';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component( {
    selector: 'app-contact-edit',
    templateUrl: './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.css']
} )
export class ContactEditComponent implements OnInit {

    contact: Contact;
    submitted = false;

    constructor( private data: Data, private router: Router, private contactService: ContactService ) {

    }
    ngOnInit() {
        this.contact = this.data.selectedContact;
    }

    onSubmit() {
        this.submitted = true;
        
        
        this.contactService.updateContact(this.contact);
        this.router.navigate(["contacts"]);
    }

}

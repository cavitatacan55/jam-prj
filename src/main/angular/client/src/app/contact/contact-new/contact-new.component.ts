import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';


@Component( {
    selector: 'app-contact-new',
    templateUrl: './contact-new.component.html',
    styleUrls: ['./contact-new.component.css']
} )
export class ContactNewComponent implements OnInit {


    contact:Contact;
    submitted = false;
    
    constructor( private router: Router, private contactService: ContactService ) {
       
    }
    ngOnInit() {
        this.contact = new Contact();
    }

    onSubmit() {
        this.submitted = true;
        this.contactService.newContact(this.contact);
        this.router.navigate(["contacts"]);
    }
    
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Data } from '../data';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit {

  contact: Contact;

  constructor(private data: Data, private router: Router, private service: ContactService) { }

  ngOnInit() {
      this.contact = this.data.selectedContact;
  }

  deleteContact() {
      this.service.deleteContact(this.contact);
      this.router.navigate(["contacts"]);
  }
}

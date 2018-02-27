import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

import { ContactService } from './contact.service';
import { Contact } from'./contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  
  contacts: Contact[] = [];
  
  constructor(private contactService : ContactService ) {}
  
  ngOnInit() {
      this.getItems();
  }
  
  getItems(): void { 
      this.contactService.getContacts().
       subscribe((res : Contact[]) => {
               this.contacts = res; 
             },
             (err : HttpErrorResponse)  => {
                 console.log('Something went wrong!' + err.message);
             },
       );
  }
}

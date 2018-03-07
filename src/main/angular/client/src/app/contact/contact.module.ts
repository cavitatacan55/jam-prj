import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactService } from './contact.service';
import { Data } from './data';

@NgModule( {
    imports: [
        HttpClientModule,
        CommonModule,
        FormsModule,
        ContactRoutingModule
        
    ],
    declarations: [ContactListComponent,
        ContactEditComponent,
        ContactDeleteComponent,
        ContactNewComponent],

    exports: [ContactListComponent,
        ContactEditComponent,
        ContactDeleteComponent,
        ContactNewComponent],

    providers: [Data, ContactService]

} )
export class ContactModule { }

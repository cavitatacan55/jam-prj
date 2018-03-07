import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';


const routes: Routes = [
   {
    path: 'contacts',
    component: ContactListComponent
    },
    {
      path: 'contactnew',
      component: ContactNewComponent
    },
    {
        path: 'contactedit',
        component: ContactEditComponent
    },
    { path: 'contactdelete',
        component: ContactDeleteComponent}
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact/contact.service';
import { ClientContact } from 'src/app/classes/client.class';
import { PartialObserver } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-history',
  templateUrl: './contact-history.component.html',
  styleUrls: ['./contact-history.component.css']
})
export class ContactHistoryComponent implements OnInit {

  constructor(private _contact: ContactService, private _router: Router) { }

  ngOnInit() {
  }
  sendForm(formContact: NgForm): void {
    if (formContact.invalid) {
      return;
    }
    this._contact.author = formContact.value.name;
    this._router.navigate(['/thank']);
    formContact.reset();
    /*const ticket = new ClientContact(formContact.value.name, formContact.value.phone,
      formContact.value.email, formContact.value.message);
      this._contact.ContactSyfte(ticket, 'contact').subscribe(
        (ticketResp: PartialObserver<any> | any): void => {
          if (ticketResp.status) {
            this._router.navigate(['/thank']);
          }
        }
      );*/
  }

}

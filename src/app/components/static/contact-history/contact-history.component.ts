import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-history',
  templateUrl: './contact-history.component.html',
  styleUrls: ['./contact-history.component.css']
})
export class ContactHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sendForm(formContact: NgForm): void {
    console.log(formContact);
  }

}

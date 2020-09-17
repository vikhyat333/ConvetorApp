import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(public contactsService : ContactsService) { }
  contactList=[];

  ngOnInit(): void {
    this.contactList= this.contactsService.getContact();
  }

}

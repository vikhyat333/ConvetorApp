import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContact(){
    // http calls will be here
    const contactList = [
    {contactId:1,contactName:'arc'},
    {contactId:2,contactName:'brc'},
    {contactId:3,contactName:'crc'},
    {contactId:4,contactName:'drc'},
    {contactId:5,contactName:'erc'}
    ];

    return contactList;
  }

  callingFormTemplate(){
    console.log('Calling from template');
  }

}

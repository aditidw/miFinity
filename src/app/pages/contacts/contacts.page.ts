import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  data: any;

  constructor(private contactsService:ContactsService) { }

  ngOnInit() {
    fetch('./assets/contacts.json').then(res => res.json()).then(json => {
      console.log('data: ', json);
      this.data = json;
    });
  }

}

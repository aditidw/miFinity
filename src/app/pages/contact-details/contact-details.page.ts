import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.page.html',
  styleUrls: ['./contact-details.page.scss'],
})
export class ContactDetailsPage implements OnInit {

  contactId = null;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.contactId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

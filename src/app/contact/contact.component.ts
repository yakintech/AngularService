import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = "";
  message = "";
  constructor(private _emailservice:EmailService) { }

  ngOnInit(): void {
  }

  Send(){
    
    this._emailservice.sendemailapi(this.name,this.message);
  }

}

import { Component, OnInit } from '@angular/core';
import { ContactService } from "../shared/contact.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted: boolean;
  formControls = this.contactService.form.controls;
  showSuccessMessage: boolean;
  public title: string;

  constructor(public contactService: ContactService) { 
    this.title = "My PhoneBook";
  }
  
  ngOnInit() {
  }

  // adds contact on submit
  onSubmit(){
  	this.submitted = true;
  	if(this.contactService.form.valid) {
  		if(this.contactService.form.get('$key').value == null) {
  			this.contactService.addContact(this.contactService.form.value);
        this.showSuccessMessage = true;
        setTimeout(()=> this.showSuccessMessage = false,3000);
  		} else {
  			this.contactService.editContact(this.contactService.form.value);
  			this.submitted = false;
  			this.contactService.form.reset();
  		}
  	}
  }

}

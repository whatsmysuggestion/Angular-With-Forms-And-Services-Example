import { Component } from '@angular/core';
import {StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ed;
	 
	
	 
   constructor(private ss:StorageService){}
   
   
 onClickSubmit(data) {
	 
	 
	 
	 this.ss.setEmail(data.emailid);
	 
	 this.ed=this.ss.getEmail();
	 
	  
   }
}

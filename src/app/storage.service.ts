import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
		
	 
		
	getEmail(): string { 
      return sessionStorage.email; 
   } 
   
	setEmail(emailData)
	{
		sessionStorage.email=emailData;
	}
   
}

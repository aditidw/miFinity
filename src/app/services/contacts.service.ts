import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  // Enter API url
  url = "https://my-json-server.typicode.com/aditidw/contacts/posts/";

  // Checking the url
  getUrl(){
    console.log("The URL is:", this.url);
  }

  constructor(private http: HttpClient) { }

  searchContacts(name: string): Observable<any> {
    console.log("Searching bu name:", name);
    return this.http.get(`${this.url}?s=${encodeURI(name)}`)
    .pipe(map(results => {
      console.log('Raw data:', results);
      return results['Search'];
    }));
  }

  getDetailsData(id){
    console.log("Local Data is called!!")
    return this.http.get(`https://my-json-server.typicode.com/aditidw/contacts/posts/${id}`);
  }
 
  getDetails() {
    console.log("Remote data is called!!")
    return this.http.get(this.url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../types/contact';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  deleteContact(contactId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/contacts/${contactId}`);
  }

  updateContact(contactId: number, contact: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(`${this.apiUrl}/contacts/${contactId}`, contact);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from '../types/people';
import { Contact } from '../types/contact';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'http://localhost:80/api';

  constructor(private httpClient: HttpClient)
  {}

  getPeople(): Observable<People[]> {
    return this.httpClient.get<People[]>(`${this.apiUrl}/people`);
  }

  addPerson(person: any): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/people`, person);
  }

  updatePerson(personId: number, updatedPerson: Partial<People>): Observable<void> {
    return this.httpClient.put<void>(`${this.apiUrl}/people/${personId}`, updatedPerson);
  }

  deletePerson(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/people/${id}`);
  }

  addContact(personId: number, contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>(`${this.apiUrl}/people/${personId}/contacts`, contact);
  }
}

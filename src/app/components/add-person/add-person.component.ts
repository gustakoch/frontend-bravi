import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { Contact } from '../../types/contact';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-person.component.html',
})
export class AddPersonComponent {
  personName: string = '';
  contacts: Contact[] = [{ type: '', contact: '' }];

  constructor(
    private router: Router,
    private peopleService: PeopleService
  ) {
  }

  addPerson(): void {
    if (this.personName.trim()) {
      const newPerson = {
        name: this.personName,
        contacts: this.contacts.filter(contact => contact.contact.trim() !== '')
      };
      this.peopleService.addPerson(newPerson).subscribe(() => {
        this.router.navigate(['/people']);
      });
    }
  }

  addContact(): void {
    this.contacts.push({ type: '', contact: '' });
  }

  removeContact(index: number): void {
    this.contacts.splice(index, 1);
  }

  navigateToPeopleList(): void {
    this.router.navigate(['/people']);
  }
}

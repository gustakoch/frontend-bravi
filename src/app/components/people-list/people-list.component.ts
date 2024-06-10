import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeopleService } from '../../services/people.service';
import { People } from '../../types/people';
import { CommonModule } from '@angular/common';
import { Contact } from '../../types/contact';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { PipesModule } from '../../pipes/pipes.module';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbModule, PipesModule],
  templateUrl: './people-list.component.html',
})
export class PeopleListComponent {
  people: People[] = [];
  newContact: Contact = { type: '', contact: '' };
  selectedPersonId: number | null = null;
  selectedContactId: number | null = null;
  isEditMode: boolean = false;
  editPersonName: string = '';

  constructor(
    private router: Router,
    private peopleService: PeopleService,
    private contactService: ContactService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople(): void {
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
    });
  }

  openAddContactModal(content: any, personId: number) {
    this.selectedPersonId = personId;
    this.isEditMode = false;
    this.newContact = { type: '', contact: '' };
    this.modalService.open(content, { centered: true });
  }

  openEditContactModal(content: any, contact: Contact) {
    this.selectedContactId = contact.id || null;
    this.isEditMode = true;
    this.newContact = { ...contact };
    this.modalService.open(content, { centered: true });
  }

  addOrUpdateContact() {
    if (this.isEditMode && this.selectedContactId) {
      this.contactService.updateContact(this.selectedContactId, this.newContact)
        .subscribe(
          response => {
            console.log('Contato atualizado:', response);
            this.modalService.dismissAll();
            this.loadPeople();
          },
          error => {
            console.error('Erro ao atualizar contato:', error);
          }
        );
    } else if (this.selectedPersonId) {
      this.peopleService.addContact(this.selectedPersonId, this.newContact)
        .subscribe(
          response => {
            console.log('Novo contato adicionado:', response);
            this.modalService.dismissAll();
            this.loadPeople();
          },
          error => {
            console.error('Erro ao adicionar contato:', error);
          }
        );
    }
  }

  deleteContact(contactId: number): void {
    if (confirm('Tem certeza de que deseja excluir este contato?')) {
      this.contactService.deleteContact(contactId).subscribe(() => {
          this.loadPeople();
        },
      );
    }
  }

  deletePerson(personId: number): void {
    if (confirm('Tem certeza de que deseja excluir esta pessoa e todos os seus contatos?')) {
      this.peopleService.deletePerson(personId).subscribe(() => {
        this.loadPeople();
      });
    }
  }

  openEditPersonModal(content: any, person: People): void {
    this.selectedPersonId = person.id;
    this.editPersonName = person.name;
    this.modalService.open(content, { centered: true });
  }

  updatePerson(): void {
    if (!this.editPersonName.trim()) {
      return;
    }
    const updatedPerson: Partial<People> = { name: this.editPersonName };
    if (this.selectedPersonId) {
      this.peopleService.updatePerson(this.selectedPersonId, updatedPerson).subscribe(() => {
        this.loadPeople();
        this.modalService.dismissAll();
      });
    }
  }

  navigateToAddPerson(): void {
    this.router.navigate(['/people/add']);
  }
}

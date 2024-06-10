import { Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { AddPersonComponent } from './components/add-person/add-person.component';

export const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/add', component: AddPersonComponent },
];

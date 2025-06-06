import { Routes } from '@angular/router';
import { SummaryComponent } from './main/summary/summary.component';
import { AddTaskComponent } from './main/add-task/add-task.component';
import { BoardComponent } from './main/board/board.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { PrivacyPolicyComponent } from './legal/privacyPolicy/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './legal/imprint/imprint/imprint.component';

export const routes: Routes = [
  {path: 'summary', component: SummaryComponent},
  {path: 'addtask', component: AddTaskComponent},
  {path: 'board', component: BoardComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '', component: SummaryComponent},
  {path: 'privacypolicy', component: PrivacyPolicyComponent},
  {path: 'imprint', component: ImprintComponent},
];

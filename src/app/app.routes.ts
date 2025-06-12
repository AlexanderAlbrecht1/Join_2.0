import { Routes } from '@angular/router';
import { SummaryComponent } from './main/summary/summary.component';
import { AddTaskComponent } from './main/add-task/add-task.component';
import { BoardComponent } from './main/board/board.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { PrivacyPolicyComponent } from './legal/privacyPolicy/privacy-policy/privacy-policy.component';
import { ImprintComponent } from './legal/imprint/imprint/imprint.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { RegisterComponent } from './auth/register/register.component';
import { HelpsectionComponent } from './legal/helpsection/helpsection.component';

export const routes: Routes = [
  {path: 'sign-in', component: SignInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'addtask', component: AddTaskComponent},
  {path: 'board', component: BoardComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: '', component: SummaryComponent},
  {path: 'privacypolicy', component: PrivacyPolicyComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'help', component: HelpsectionComponent},
];

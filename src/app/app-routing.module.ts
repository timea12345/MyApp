import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListOfPersonsComponent } from './list-of-persons/list-of-persons.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: 'persons', component:ListOfPersonsComponent},
  {path: 'persons/:id', component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

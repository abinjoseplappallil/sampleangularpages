import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdddataComponent } from './adddata/adddata.component';
import { ListdataComponent } from './listdata/listdata.component';
const routes: Routes = [
  { path:'' , component:AdddataComponent },
  { path:'list' , component: ListdataComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

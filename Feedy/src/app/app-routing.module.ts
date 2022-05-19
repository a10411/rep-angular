import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { MarcarServicoComponent } from './user/marcar-servico/marcar-servico.component';


const routes: Routes = [
  {path:'user', component: UserComponent},
  {path:'login', component: LoginComponent},
  {path:'marcar', component: MarcarServicoComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

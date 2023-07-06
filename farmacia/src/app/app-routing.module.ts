import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutosComponent } from './produtos/produtos.component';



const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'clientes', component: ClientesComponent },
  {path: 'produtos', component: ProdutosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

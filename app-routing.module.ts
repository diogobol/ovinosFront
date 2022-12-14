import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaAnimaisComponent } from './tabela-animais/tabela-animais.component';
import { CadastroAnimaisComponent } from './cadastro-animais/cadastro-animais.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const rotas: Routes = [
  {path: 'tabela', component: TabelaAnimaisComponent},
  {path: 'novo', component: CadastroAnimaisComponent},
  {path: 'editar/:id', component:CadastroAnimaisComponent},
  {path: '**', component:PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

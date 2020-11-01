// importar as dependencias
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { E404Component } from './pages/e404/e404.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';

// constante com as rotas 
const routes: Routes = [

// Rota padrão da página inicial
{
  path: '',
  redirectTo:'home',
  pathMatch:'full'
},

// Rota para 'home'
{
path:'home',
component: HomeComponent,
data:{ title: '' }
},

// Rota para 'news'
{
  path:'noticias',
  component: NewsComponent,
  data:{ title: 'Notícias' }
},

// Rota para 'contacts'
{
  path:'contatos',
  component: ContactsComponent,
  data:{ title: 'Faça contato' }
},

// Rota para 'about'
{
  path:'sobre',
  component: AboutComponent,
  data:{ title: 'Sobre' }
},

// Rota para página de erro.
// Deve ser sempre a última rota
{
  path:'**',
  component: E404Component,
  data:{ title: 'Erro 404' }
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

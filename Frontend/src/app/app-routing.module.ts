import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},{path:'admin',canActivate:[AuthGuard],component:AdminComponent}
// {path:'signup',component:SignupComponent},{path:'login',component:LoginComponent},{path:'books-home',canActivate:[AuthGuard] ,component:BooksHomeComponent},{path:'navbar',component:NavbarComponent},{ path: 'addNew',canActivate:[AuthGuard], component: AddnewbookComponent },{path:'editBook',canActivate:[AuthGuard],component:EditbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

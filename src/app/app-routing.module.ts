import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorial/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/tutorial/add-tutorial/add-tutorial.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
//   { path: 'tutorials', component: TutorialsListComponent },
//   { path: 'tutorials/:id', component: TutorialDetailsComponent },
//   { path: 'add', component: AddTutorialComponent }
// ];

const routes: Routes = [
  // {
//   path: 'auth',
//   loadChildren: () => import('./auth/auth.module').then(auth => auth.AuthModule)
// }, 
{
  path: 'page',
  loadChildren: () => import('./components/components.module').then(page => page.ComponentsModule)
}, {
  path: '**',
  redirectTo: 'page',
  pathMatch: 'full'
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

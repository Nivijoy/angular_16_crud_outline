import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../sharedModule/shared.module';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    ShareModule,
    CommonModule,
    RouterModule.forChild([
      ...routes,
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ComponentsModule {}

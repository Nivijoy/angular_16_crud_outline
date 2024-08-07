import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const routes:Routes=[
    {
        path: 'home',
        component: DashboardComponent,
        data: {
          icon: 'dashboard',
          title: 'Dashboard',
        },
      },
      {
        path: 'tutorial',
        loadChildren: () =>
          import('./tutorial/tutorial.module').then((m) => m.TutorialModule,
    ),
        data: {
          icon: 'work',
          title: 'Business',
        },
      },
]
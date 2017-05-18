import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth-guard';
import { TasksComponent } from './components/tasks';

export const ROUTES: Routes = [
    {
        path       : '',
        component  : TasksComponent,
        canActivate: [AuthGuard]
    }
];

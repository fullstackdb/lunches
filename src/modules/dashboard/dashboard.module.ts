import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskFormComponent } from './components/task-form';
import { TaskItemComponent } from './components/task-item';
import { TaskListComponent } from './components/task-list';
import { TasksComponent } from './components/tasks';
import { AutoFocusDirective } from './directives/autofocus-directive';
import { TaskService } from './services/task-service';
import { DashboardRoutingModule } from './dashboard.module.router';

@NgModule({
    declarations: [
        AutoFocusDirective,
        TaskFormComponent,
        TaskItemComponent,
        TaskListComponent,
        TasksComponent
    ],
    imports     : [
        DashboardRoutingModule,
        CommonModule,
        FormsModule
    ],
    exports     : [
        DashboardRoutingModule
    ],
    providers   : [
        TaskService
    ]
})

export class DashboardModule {
}

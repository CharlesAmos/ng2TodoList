import { CreatetaskComponent } from './createtask/createtask.component';



export const ROUTES = [
    {path: '', redirectTo: 'component', pathMatch: 'full'},
    { path: 'createtask', component: CreatetaskComponent}
]
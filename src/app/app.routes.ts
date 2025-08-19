import { Routes } from '@angular/router';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { UsergetbyidComponent } from './usergetbyid/usergetbyid.component';

export const routes: Routes = [
    {
        path:'',
        component:DetailStudentComponent
    },
    {
        path:':id',
        component:UsergetbyidComponent
    }
];

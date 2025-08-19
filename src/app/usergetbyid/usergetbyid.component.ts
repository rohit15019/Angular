import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiStudentService } from '../api-student.service';  // Import the correct service

@Component({
  selector: 'app-usergetbyid',
  templateUrl: './usergetbyid.component.html',
  styleUrls: ['./usergetbyid.component.css']
})
export class UsergetbyidComponent implements OnInit {
  private api = inject(ApiStudentService);  
  private _activedRoute = inject(ActivatedRoute);
  id: any = 0;  

  ngOnInit() {
    this.id = this._activedRoute.snapshot.params['id'];

    this.api.getbyid(this.id).subscribe(
      (res: any) => {
        console.log(res);  
      },
      (err) => {
        console.error('Error fetching user by id:', err);  
      }
    );
  }
}

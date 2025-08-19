
import { Component, inject, OnInit } from '@angular/core';
import { ApiStudentService } from '../api-student.service';  // Import the correct service
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-detail-student',
  imports: [NgFor,RouterLink,RouterOutlet],  // This is for Angular's structural directive to loop through items
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {

  private api = inject(ApiStudentService);  
  private _activedRoute=inject(ActivatedRoute)
  private _router!: Router;
  temp: any[] = [];

  ngOnInit() {
    this.api.geta().subscribe(
      (res: any) => {
        this.temp = res;  
        console.log(res);
      },
      (err) => {
        console.error('Error fetching data', err);  
      }
    );
  }

  gotoDetail(id:number){
    this._router.navigate(['student',id]);
  }
}

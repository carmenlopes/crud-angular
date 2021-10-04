import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category'];

  courses: Course[] = [
    {_id:1,name:'Angular', category:'frontend'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

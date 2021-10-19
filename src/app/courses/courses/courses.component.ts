import { CoursesService } from "./../services/courses.service";
import { Course } from "./../model/course";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ["name", "category"];

  courses: Course[] = [];

  // courseServices: CoursesService;

  constructor(private courseServices: CoursesService) {
    // this.courseServices = new CoursesService();
    this.courses = this.courseServices.list();
  }

  ngOnInit(): void {}
}

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from "./../services/courses.service";
import { Course } from "./../model/course";
import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  
  courses$: Observable<Course[]>;
  displayedColumns: string[] = ["name", "category"];

  constructor(private courseServices: CoursesService,
    public dialog: MatDialog) {
    // this.courseServices = new CoursesService();
    this.courses$ = this.courseServices.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.')
        return of([])
      })
    );
  }

  ngOnInit(): void {}

  onError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}

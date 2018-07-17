import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  coursesObservable: Observable<any[]>;
  testsObservable: Observable<any[]>;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) { }
  public departmentId;

  ngOnInit() {
  	let id = parseInt(this.route.snapshot.paramMap.get('id'));
  	this.departmentId = id;
  	this.coursesObservable = this.getCourses('/courses');
  	this.testsObservable = this.getTest('/test');
  }

  getCourses(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getTest(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, convertToParamMap, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
    You selected department with Id {{departmentId}} is selected.
    </h3>

    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
      <button (click)="goPrevious()">Previous </button>
      <button (click)="goNext()"> Next</button>
    </p>

    <div>
      <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), null);
    // this.departmentId = id;
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), null);
      this.departmentId = id;
    });
  }

  goPrevious() {
    const previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    const nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments() {
    const selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id : selectedId}]);
    this.router.navigate(['../', {id : selectedId}], {relativeTo: this.activatedRoute});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.activatedRoute});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.activatedRoute});
  }
}

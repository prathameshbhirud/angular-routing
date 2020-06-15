import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li (click)="onSelect(dept)" [class.selected]="isSelected(dept)" *ngFor="let dept of departments">
        <span class="bridge">{{dept.id}}</span> {{dept.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {'id': 1, 'name': 'Angular'},
    {'id': 2, 'name': 'Node'},
    {'id': 3, 'name': 'MongoDB'},
    {'id': 4, 'name': 'Ruby'},
    {'id': 5, 'name': 'Python'},
  ];
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'), null);
    });
  }

  onSelect(dept) {
    // this.router.navigate(['/departments', dept.id]);
    this.router.navigate([dept.id], {relativeTo: this.activatedRoute});
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }
}

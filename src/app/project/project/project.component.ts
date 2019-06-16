import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  private projects$: Observable<Project[]>;

  constructor(
    private service: ProjectService,
  ) { }

  ngOnInit() {
    this.projects$ = this.service.getProjects();
    this.projects$.subscribe(project => console.log(`${JSON.stringify(project)}`));
  }

}

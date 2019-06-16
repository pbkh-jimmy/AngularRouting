import { Component, OnInit } from '@angular/core';
import { Observable, } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ProjectService]
})
export class ProjectListComponent implements OnInit {

  private projects$: Observable<Project[]>;

  constructor(
    private service: ProjectService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.projects$ = this.route.paramMap.pipe(
      switchMap(() => this.service.getProjects())
    );
  }

}

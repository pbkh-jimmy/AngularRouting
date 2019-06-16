import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from './project';
import { PROJECTS } from './mock.project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProjectById(id: number): Project {
    return PROJECTS.find(x => x.id === id);
  }
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { ProjectModule } from './project/project.module';

const appRoutes: Routes = [
  {
    path: 'projects',
    loadChildren: () => ProjectModule,
  },
  {
    path: 'dash',
    component: DashComponent
  },
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: FourZeroFourComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

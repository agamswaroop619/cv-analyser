import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { StudentAnalyserComponent } from './student-analyser/student-analyser.component';

const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'student', component: StudentAnalyserComponent },
  { path: 'recruiter', component: RecruiterComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

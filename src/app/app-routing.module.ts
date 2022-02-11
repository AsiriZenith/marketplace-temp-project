import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './component/h2-compute-assignment/create-student.component/create-student.component';
import { H2ComputeComponent } from './component/h2-compute-assignment/h2-compute.component';
import { ImageUploadComponent } from './component/image-upload/image-upload.component';
import { VideoUploadComponent } from './component/video-upload/video.upload.component';

const routes: Routes = [
  { path: '', component: VideoUploadComponent },
  { path: 'newstudent', component: CreateStudentComponent },
  { path: 'viewstudent', component: H2ComputeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

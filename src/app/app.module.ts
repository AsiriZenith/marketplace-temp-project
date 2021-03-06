import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExampleComponent } from './component/example/example.component';
import { StarRatingComponent } from './component/star-rating/star-rating.component';
import { FlexLayOutComponent } from './component/flexLayout/flexLayout.component';
import { ImageUploadComponent } from './component/image-upload/image-upload.component';
import { VideoUploadComponent } from './component/video-upload/video.upload.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { H2ComputeComponent } from './component/h2-compute-assignment/h2-compute.component';
import { EditComponent } from './component/h2-compute-assignment/edit-component/edit.component';
import { NewApplicationComponent } from './component/new-application/new-application.component';
import { ImageUploadPart2Component } from './component/image-upload-part2/image-upload2.component';
import { CreateStudentComponent } from './component/h2-compute-assignment/create-student.component/create-student.component';

import { StudentService } from './service/student.service';
import { FileUploadService } from './service/file-upload.service';
import { LandingPageService } from './service/landing-page.service';
import { DataTransformationService } from './service/datatransformation.service';
@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ExampleComponent,
    H2ComputeComponent,
    FlexLayOutComponent,
    StarRatingComponent,
    VideoUploadComponent,
    LandingPageComponent,
    ImageUploadComponent,
    CreateStudentComponent,
    NewApplicationComponent,
    ImageUploadPart2Component,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatRadioModule,
    MatTableModule,
    MatChipsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatStepperModule,
    HttpClientModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    StudentService,
    FileUploadService,
    LandingPageService,
    DataTransformationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

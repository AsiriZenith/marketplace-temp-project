import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentDetails } from 'src/app/Model/student.details';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  studentformGroup!: FormGroup;

  get firstName() {
    return this.studentformGroup.get('firstname');
  }

  get lastName() {
    return this.studentformGroup.get('lastname');
  }

  get dob() {
    return this.studentformGroup.get('dob');
  }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentDetails
  ) {}

  ngOnInit(): void {
    this.initStudentForm();
  }

  initStudentForm() {
    this.studentformGroup = this.fb.group({
      firstname: [this.data.firstname, Validators.required],
      lastname: [this.data.lastname, Validators.required],
      dob: [this.data.dob, Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

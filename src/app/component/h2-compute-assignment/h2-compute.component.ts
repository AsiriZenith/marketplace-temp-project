import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditComponent } from './edit-component/edit.component';

import { StudentDetails } from 'src/app/Model/student.details';

import { DataTransformationService } from 'src/app/service/datatransformation.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'h2-compute',
  templateUrl: './h2-compute.component.html',
  styleUrls: ['./h2-compute.component.css'],
})
export class H2ComputeComponent implements OnInit {
  dataSource!: StudentDetails[];
  displayedColumns: string[] = [
    'code',
    'firstname',
    'lastname',
    'dob',
    'action',
  ];

  constructor(
    private dataTransformationService: DataTransformationService,
    private studentService: StudentService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getStudentDetails();
  }

  /** get all student details */
  getStudentDetails() {
    this.studentService.getApplicationData().subscribe((data) => {
      this.dataSource = data.list;
    });
    this.dataTransformationService.setStudentData(this.dataSource);
  }

  /** open dialog view to edit student details */
  openDialog(row: StudentDetails): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '500px',
      height: '400px',
      data: row,
    });

    dialogRef.afterClosed().subscribe((result: StudentDetails) => {
      console.log(result);
      // let editstudent: StudentDetails = this.dataSource.find((data) => {
      //   data.code == result.code;
      // });
      // console.log(editstudent);
      // let editstudentindex = this.dataSource.indexOf(editstudent[0]);
      // this.dataSource[editstudentindex].firstname = result.firstname;
      // this.dataSource[editstudentindex].lastname = result.lastname;
      // this.dataSource[editstudentindex].dob = result.dob;
    });
    this.dataTransformationService.setStudentData(this.dataSource);
  }

  /** delete row data (when clicking the delete action) */
  deleteRowData(row: StudentDetails) {
    this.dataSource = this.dataSource.filter((value) => {
      return value.code != row.code;
    });
  }
}

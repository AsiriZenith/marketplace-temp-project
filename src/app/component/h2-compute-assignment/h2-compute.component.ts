import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDetails } from 'src/app/Model/student.details';
import { StudentService } from 'src/app/service/student.service';
import { EditComponent } from './edit-component/edit.component';

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
  }

  openDialog(row: StudentDetails): void {
    const dialogRef = this.dialog.open(EditComponent, {
      width: '500px',
      data: { firstname: row.firstname, lastname: row.lastname, dob: row.dob },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      row.dob = result;
    });
  }

  /** delete row data (when clicking the delete action) */
  deleteRowData(row: StudentDetails) {
    this.dataSource = this.dataSource.filter((value) => {
      return value.code != row.code;
    });
  }
}

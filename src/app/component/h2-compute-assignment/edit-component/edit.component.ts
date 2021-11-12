import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentDetails } from 'src/app/Model/student.details';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentDetails,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component } from '@angular/core';
import { Category } from 'app/model/auctions.model';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-category-picker-dialog',
  templateUrl: './category-picker-dialog.component.html',
  styleUrl: './category-picker-dialog.component.scss'
})
export class CategoryPickerDialogComponent {

  constructor(private dialogRef: MatDialogRef<CategoryPickerDialogComponent>) { }


  onSelectCategory(category: Category): void {
    this.dialogRef.close(category);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FileUploadPopupComponent } from './fileUpload/file-upload-popup.component';
import { truncateChar } from '../app/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'voiro';
  dialogRef!: MatDialogRef<unknown, any>;
  returnImage : string = ''
  fileName : string = ''

  constructor(
    private _matDialog: MatDialog,
  ) {
  }

  truncateChar(text: string, length: any): string {
    return truncateChar(text,length)
  }

  openFileUpload() {
    this.dialogRef = this._matDialog.open(
      FileUploadPopupComponent, {
        panelClass: "file-upload-popup",
      }
    );
    this.dialogRef.afterClosed().subscribe(result => {
      this.returnImage = result.image
      this.fileName = result.name
    });
  }
  
}

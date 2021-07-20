import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FileUploadPopupComponent } from './file-upload-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxFileDropModule } from 'ngx-file-drop';
import { ImageCropperModule } from 'ngx-image-cropper';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    FileUploadPopupComponent,
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    NgxFileDropModule,
    ImageCropperModule,
    BrowserModule
  ],

  entryComponents: [FileUploadPopupComponent]
})
export class FileUploadPopupModule {
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { ImageCroppedEvent } from 'ngx-image-cropper';


@Component({
  selector: 'file-upload-popup',
  templateUrl: './file-upload-popup.component.html',
  styleUrls: ['./file-upload-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class FileUploadPopupComponent implements OnInit {
  public files: NgxFileDropEntry[] = [];
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageAdded : boolean = false;
  imageName : string = ''

  constructor(
    public matDialogRef: MatDialogRef<FileUploadPopupComponent>,
  ) {

  }
  ngOnInit(): void {

  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        this.imageName = fileEntry.name
        fileEntry.file(
          (ev) => {
            this.imageChangedEvent = { target: { files: [ev] } }
            this.imageAdded = true
          }
        );
      }

    }
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }

  public resetUpload() {
    this.croppedImage = ''
    this.imageChangedEvent = ''
    this.imageAdded = false
    this.imageName = ''
  }

  public fileChangeEvent(event: any): void {
    console.log(event)
    this.imageChangedEvent = event;
  }

  public imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }

  public imageLoaded() {
      // show cropper 
  }
  public cropperReady() {
      // cropper ready
  }
  public loadImageFailed() {
      // show message
  }

}
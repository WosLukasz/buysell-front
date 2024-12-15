import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Attachment, AttachmentSaveRequest } from 'app/model/auctions.model';
import { AttachmentsService } from 'app/services/common/attachments.service';
import { FilesClientService } from 'app/services/minio/files-client.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  @Input() attachment?: Attachment;

  @Input() context: string;

  @Output() imageUploaded = new EventEmitter<Attachment>();

  selectedFiles?: FileList;

  currentFile?: File;

  previewUrl: string | undefined;

  constructor(private attachmentsService: AttachmentsService) {}

  ngOnInit(): void {
    if(this.attachment?.path) {
      console.log('ImageUploadComponent.ngOnInit!!!!');
      this.generatePreviewUrl();
    }
  }

  selectFile(event: any): void {
    this.previewUrl = '';
    this.selectedFiles = event.target.files;

    if (!this.selectedFiles) {
      return;
    }

    const file: File | null = this.selectedFiles.item(0);
    if (file) {
      this.currentFile = file;
    }

    const request = {
      context: this.context,
      content: file
    } as AttachmentSaveRequest;

    this.attachmentsService.addAttachment(request).subscribe((savedAttachment) => {
      this.attachment = savedAttachment;
      this.generatePreviewUrl();
      this.imageUploaded.emit(savedAttachment);
      })
  }

  remove(): void {
    delete this.attachment;
    delete this.selectedFiles;
    delete this.currentFile;
    this.imageUploaded.emit(this.currentFile);
  }

  private generatePreviewUrl(): void {
    this.previewUrl = FilesClientService.prepareUrl(this.attachment);
  }

  // private generatePreview(): void {
  //   const reader = new FileReader();
  //   reader.onload = (e: any) => {
  //     console.log(e.target.result);
  //     this.preview = e.target.result;
  //   };

  //   reader.readAsDataURL(this.currentFile as Blob);
  // }
}

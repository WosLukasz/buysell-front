import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Attachment, AttachmentSaveRequest } from 'src/app/model/auctions.model';
import { AttachmentsService } from 'src/app/services/common/attachments.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  @Input() initialFile: Attachment;

  @Input() context: string;

  @Output() imageUploaded = new EventEmitter<Attachment>();

  selectedFiles?: FileList;

  currentFile?: File;

  preview: any;

  constructor(private attachmentsService: AttachmentsService) {}

  ngOnInit(): void {
    console.log('ImageUploadComponent.ngOnInit');
    if(this.initialFile?.id) {
      console.log('ImageUploadComponent.ngOnInit!!!!');
      this.attachmentsService.getAttachmentContent(this.initialFile).subscribe((attachmentWithContent) => {
        this.currentFile = attachmentWithContent.content;
        this.generatePreview();
      })
    }
  }

  selectFile(event: any): void {
    this.preview = '';
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.preview = '';
        this.currentFile = file;
        this.generatePreview();
        
      }

      const request = {
        context: this.context,
        content: file
      } as AttachmentSaveRequest;

      this.attachmentsService.addAttachment(request).subscribe((savedFile) => {
        this.imageUploaded.emit(savedFile);
      })
    }
  }

  remove(): void {
    delete this.selectedFiles;
    delete this.currentFile;
    this.imageUploaded.emit(this.currentFile);
  }

  private generatePreview(): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      console.log(e.target.result);
      this.preview = e.target.result;
    };

    reader.readAsDataURL(this.currentFile as Blob);
  }
}

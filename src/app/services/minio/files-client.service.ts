import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attachment } from 'app/model/attachments.model';

// minio bucket read only for anonymous access.
@Injectable({
  providedIn: 'root'
})
export class FilesClientService {

  static url = 'http://127.0.0.1:9000/';

  static defaultBucket = 'buysell/';


  static prepareUrl(attachment: Attachment | undefined): string | undefined {
    if (attachment === undefined) {
      return undefined;
    }
    return this.url + this.defaultBucket + attachment.path;
  }

  static getMainImageUrl(attachments: Attachment[]): string | undefined {
    const attachment = attachments.find((item) => item.main === true);
    if (!attachment) {
      return undefined;
    }

    return this.prepareUrl(attachment);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppConstants } from 'src/app/constants/app.constants';
import { Attachment, AttachmentSaveRequest, AttachmentWithContent } from 'src/app/model/auctions.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttachmentsService {

  constructor(private http: HttpClient) {}


  getAttachmentContent(request: Attachment) : Observable<AttachmentWithContent> {
    return of({});

    // return this.http.get<AttachmentWithContent>(environment.serviceUrl + AppConstants.ATTACHEMNTS_API_URL, {
    //   params : {
    //     id : request.id,
    //     path: request.path
    //   },
    //   observe: 'body',
    //   responseType: 'json'
    // }); 
  }
  

  addAttachment(request: AttachmentSaveRequest) : Observable<Attachment> {
    const formData: FormData = new FormData();
    formData.append('context', request.context as string);
    formData.append('content', request.content as Blob);

    return this.http.post<Attachment>(environment.serviceUrl + AppConstants.ATTACHEMNTS_API_URL, formData); 
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, map, Observable, of } from 'rxjs';
import { Attachment } from 'src/app/model/auctions.model';
import { Client } from 'minio';
// import process from 'process'


@Injectable({
  providedIn: 'root'
})
export class FilesClientService {

  defaultBucket = 'buysell';

  apiKey = 'yWnAUbvnGRJSfailEXmk'

  secretKey = 'bqzMq9GQxEp35IyCPbBY3TGN3nn8sInXDYRuLdUW'

  url = 'http://127.0.0.1'

  minioClient: Client;

  constructor(private http: HttpClient) { 
    this.minioClient = new Client({
      endPoint: this.url,
      port: 9000,
      useSSL: false, 
      accessKey: this.apiKey,
      secretKey: this.secretKey,
    })
  } // change keys to read only auction images bucket

  fetchFile(attachment: Attachment): Observable<File> {
    return of({} as File);
  //   return from(this.minioClient.getObject(this.defaultBucket, attachment?.path as string))
  //   .pipe(map((stream)=> {
  //     console.log('stream', stream);
  //     return stream.read();
  // }));

    // dataStream.on('data', function (chunk) {
    //   size += chunk.length
    // })
    // dataStream.on('end', function () {
    //   console.log('End. Total size = ');
    // })
    // dataStream.on('error', function (err) {
    //   console.log(err);
    // })
  }





}

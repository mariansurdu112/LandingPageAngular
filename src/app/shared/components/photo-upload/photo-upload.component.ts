import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { PhotoService } from '../../services/photo.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-photo-upload',
  templateUrl: './photo-upload.component.html',
  styleUrls: ['./photo-upload.component.scss']
})
export class PhotoUploadComponent implements OnInit, OnDestroy {
  public progress: number;
  public message: string;
  private appHost: string;
  public imagePath;
  imgURL: any;
  private resource = 'api/PhotoAsync';
  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onUploadFinished = new EventEmitter();
  @Input() events: Observable<void>;
  @Input() editPhotoUrl: string;
  private eventsSubscription: Subscription;
  files: any;
  constructor(private http: HttpClient, private photoService: PhotoService) {
    this.appHost = environment.host;
  }

  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }

  ngOnInit() {
    this.eventsSubscription = this.events.subscribe(() => {
      this.uploadFile(this.files);
    });
    console.log(this.editPhotoUrl);
    if (this.editPhotoUrl !== '') {
      this.imgURL = this.editPhotoUrl;
    }
  }




  public setFiles = (files) => {
    if (files.length === 0) {
      return;
    }
    console.log('Set files');
    this.files = files;
    this.preview(this.files);
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.imgURL = reader.result;
    };
  }

  public uploadFile = (files) => {
    if (!files) {
      this.onUploadFinished.emit(0);
      return;
    }
    if (files.length === 0) {
      return;
    }

    const fileToUpload = files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(this.appHost + this.resource, formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }

}

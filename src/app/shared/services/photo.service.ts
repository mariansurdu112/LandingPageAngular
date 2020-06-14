import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photoSubject: Subject<void> = new Subject<void>();
  constructor() { }
}

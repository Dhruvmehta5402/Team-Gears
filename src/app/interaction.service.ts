import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { EventPin } from './Map/event.model';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private subject = new Subject<EventPin>();
  sendPushEventPin(pin: EventPin) {
    console.log("sendPushEventPin");
    this.subject.next(pin);
  }

  getPushEventPin(): Observable<EventPin> {
    console.log("getPushEventPin");
    return this.subject.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastMessageOptions } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  INIT_STATE = 'INIT';

  private send$ = new BehaviorSubject<ToastMessageOptions>({ summary: this.INIT_STATE });
  sendSub = this.send$.asObservable();

  public send(message: ToastMessageOptions): void {
    this.send$.next(message);
  }
}


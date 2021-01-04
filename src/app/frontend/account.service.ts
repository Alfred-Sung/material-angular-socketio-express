import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AccountService {
  username = new Subject<string>();

  setUsername(_username: string): void { this.username.next(_username); }
}

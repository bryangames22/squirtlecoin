import { Component } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'sqr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public openMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public $openMenu: Observable<boolean> = this.openMenu.asObservable();

  onOpenMainMenu(): void {
    this.openMenu.next(true);
  }

  onCloseMainMenu(): void {
    this.openMenu.next(false);
  }
}

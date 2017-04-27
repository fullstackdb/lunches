import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  styles: [
    require('./app-header.scss')
  ],
  template: `
    <md-menu #appMenu="mdMenu">
      <button md-menu-item> Settings </button>
      <button md-menu-item (click)="logout()"> Sign out </button>
    </md-menu>

    <button md-icon-button [mdMenuTriggerFor]="appMenu">
      <md-icon>more_vert</md-icon>
    </button>
  `
})

export class AppHeaderComponent {
  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);

  logout(): void {
    this.signOut.emit();
  }
}

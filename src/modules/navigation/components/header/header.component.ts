import { ChangeDetectionStrategy, Component} from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'l-header',
  styles: [require('./header.component.scss')],
  template: require('./header.component.html')
})
export class HeaderComponent {
  title: string = 'HeaderComponent';
}

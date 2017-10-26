/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Blank_PhonePortrait } from '../pages/Blank/PhonePortrait/Blank';
import { 222 _PhonePortrait } from '../pages/222/PhonePortrait/222';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Blank_PhonePortrait,
    222 _PhonePortrait
  ];
  static mapping = {
    'Blank': {
      PhonePortrait: Blank_PhonePortrait
    },
    '222': {
      PhonePortrait: 222 _PhonePortrait
    }
  }
}
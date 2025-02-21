import { Component } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-header',
    imports: [ButtonModule, SplitButtonModule, AvatarModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'Profile',
        icon: 'pi pi-bell',
      },
      {
        label: 'Log out',
        icon: 'pi-log-out',
      },
    ];
  }
}

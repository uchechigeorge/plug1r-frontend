import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { SplitterModule } from 'primeng/splitter';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-side-menu',
    imports: [DrawerModule, SplitterModule, ButtonModule],
    templateUrl: './side-menu.component.html',
    styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements AfterViewInit {
  visible = false;

  ngAfterViewInit() {
    setTimeout(() => {
      this.visible = true;
    }, 0);
  }
}

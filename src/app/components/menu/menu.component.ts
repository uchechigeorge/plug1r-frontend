import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  host: { class: 'contents' },
})
export class MenuComponent {
  constructor(private router: Router) {}

  goTo(route: string) {
    this.router.navigateByUrl(route);
  }

  isActive(route: string): string {
    return this.router.url === route ? 'selected' : '';
  }
}

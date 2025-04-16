import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';

=======

import { RouterOutlet } from '@angular/router';
>>>>>>> main

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, CommonModule],
  template: `
    <router-outlet></router-outlet>

  `
})
export class AppComponent {
  title = 'CrudAngular';
=======
  imports: [CommonModule, RouterOutlet],
  template: `
  <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'PortfolioAngular';
>>>>>>> main
}

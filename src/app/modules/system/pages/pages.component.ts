import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { HeroComponent } from '../components/hero/hero.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-pages',
  imports: [
    HeaderComponent,
    HeroComponent,
    FooterComponent
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}

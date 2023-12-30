import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-basic';
  backgroundImageUrl: string;

  constructor(    private seo: SeoService
    ) {
    // Set the background image URL dynamically
    this.backgroundImageUrl = `/assets/backgrounds/background-${3}.webp`;
    this.seo.updateMetaData()
  }
}

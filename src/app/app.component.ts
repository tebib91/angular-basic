import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-basic';
  backgroundImageUrl: string;

  constructor() {
    // Set the background image URL dynamically
    this.backgroundImageUrl = `/assets/backgrounds/background-${3}.webp`;
  }
}

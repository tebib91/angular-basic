import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<footer>
    <div class="footer_item" *ngFor="let item of icons; let i = index">
      <img
        class="taskbar-icon"
        src="/assets/custom_icons/{{ item }}.png"
        [alt]="item"

      />
    </div>
  </footer>`,
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  icons = ['finder-me', 'mail', 'preferences','bin'];
}

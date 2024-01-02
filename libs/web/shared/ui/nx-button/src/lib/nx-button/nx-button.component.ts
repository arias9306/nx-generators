import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-generators-nx-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nx-button.component.html',
  styleUrl: './nx-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NxButtonComponent {}

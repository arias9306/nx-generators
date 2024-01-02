import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { BuildableLibComponent } from '@nx-generators/buildable-lib';

@Component({
  selector: 'nx-generators-nx-welcome',
  standalone: true,
  imports: [CommonModule, BuildableLibComponent],
  template: `<nx-generators-buildable-lib />`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}

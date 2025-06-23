import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellComponent } from './shared/shell/shell.component';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet, ShellComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-proj';
}

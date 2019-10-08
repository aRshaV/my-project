import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  colors: Array<string>;
  text = 'TExto';

  constructor() {
    this.colors = ['red', 'blue', 'green'];
  }

  addYellow(): void {
    this.colors.push('yellow');
  }

  showConsole(event: any) {
    console.log(event);
  }
}

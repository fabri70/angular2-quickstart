// app.component.ts
import {Component} from 'angular2/core';
import {CounterComponent} from './counter.component';

@Component({
  selector: 'my-app',
  styles: [`
    .app {

    }
  `],
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `,
  directives: [
    CounterComponent
  ]
})
export class AppComponent {

}
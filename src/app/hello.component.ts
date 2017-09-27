import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;

  constructor() {}
  ngOnInit() {
    console.log('hello ngOnInit');
    // 在這裡安排一個手動的錯誤
    throw new Error(`I'm error`);
  }
}

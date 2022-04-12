import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    hello
    <p>
    <button  [disabled]="disabled">{{text}}</button>
    </p>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {
 
  constructor() { }
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  ngOnInit(): void {
  }

}

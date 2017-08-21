import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //Funciona como un selector de CSS, By element
  //selector: '[app-servers]', //By attribute
  //selector: '.app-servers', //By class
  //Inline template, multiline `text`
  //template: `
  //  <app-server></app-server>
  //  <app-server></app-server>`,
  templateUrl: './servers.component.html',
  //styleUrls: ['./servers.component.css']
  styles: [`
    h3 {
      color: red;
    }
  `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

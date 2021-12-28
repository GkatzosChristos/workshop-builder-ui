import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-fullheight">
    <h1>welcome home</h1>
  </section>
  `,
  styles: ['section{background-image: url("/assets/images/wood_back.jpg");background-size:cover;background-position:center center;}']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
